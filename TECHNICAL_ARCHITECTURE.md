# Technical Architecture - Scoot Website Integration

## Architecture Overview

The Uluwatu Surf School website transformation maintains the existing modern Next.js 14 foundation while implementing comprehensive enhancements for the "Scoot Website" requirements. This architecture ensures scalability, performance, and maintainability.

## Technology Stack

### Core Framework
- **Next.js 14**: App router with TypeScript
- **React 18**: Component-based UI development
- **TypeScript**: Type safety and developer experience
- **Tailwind CSS**: Utility-first styling framework
- **Framer Motion**: Animation and interaction library

### Additional Dependencies
- **Lucide React**: Icon library (existing)
- **clsx & tailwind-merge**: Conditional styling utilities
- **Web Vitals**: Performance monitoring

### New Dependencies (Required)
```json
{
  "react-hook-form": "^7.45.0",
  "zod": "^3.22.0",
  "@hookform/resolvers": "^3.3.0",
  "date-fns": "^2.30.0",
  "react-datepicker": "^4.16.0",
  "embla-carousel-react": "^8.0.0",
  "react-player": "^2.13.0"
}
```

### API Integration Dependencies
```json
{
  "@sendgrid/mail": "^7.7.0",
  "resend": "^2.1.0",
  "instagram-basic-display-api": "^1.0.0"
}
```

## Component Architecture

### New Component Structure
```
components/
├── sections/
│   ├── HeroPanorama.tsx          # Enhanced hero with panoramic video
│   ├── PricingPackages.tsx       # IDR pricing display
│   ├── ScootProfile.tsx          # Head instructor profile
│   ├── EnhancedBookingForm.tsx   # Client-spec booking form
│   ├── FindUsSection.tsx         # Location + reviews + Instagram
│   ├── VideoAnalysisSection.tsx  # Land coaching showcase
│   └── SurfExamplesGallery.tsx   # Beginner/Intermediate examples
├── booking/
│   ├── BookingConfirmation.tsx   # Confirmation messaging system
│   ├── BookingForm.tsx           # Enhanced form component
│   ├── TimeSlotPicker.tsx        # Time selection component
│   └── WhatsAppIntegration.tsx   # WhatsApp booking notifications
├── integrations/
│   ├── GoogleReviews.tsx         # Reviews display
│   ├── InstagramFeed.tsx         # Instagram posts integration
│   ├── SurfForecast.tsx          # Optional forecast widget
│   └── EmailService.tsx          # Email confirmation system
├── ui/ (existing)
│   ├── Button.tsx
│   ├── Input.tsx
│   └── Select.tsx (new)
└── animations/ (existing)
    └── StaggerChildren.tsx
```

### Component Design Patterns

#### 1. Compound Components for Complex Forms
```typescript
// EnhancedBookingForm.tsx
export const BookingForm = () => {
  return (
    <Form>
      <Form.Section title="Personal Information">
        <Form.Input name="fullName" required />
        <Form.Input name="email" type="email" required />
        <Form.Input name="whatsapp" type="tel" />
      </Form.Section>
      <Form.Section title="Lesson Details">
        <Form.Select name="numberOfPeople" options={peopleOptions} />
        <Form.DatePicker name="preferredDate" />
        <Form.TimeSlots name="preferredTime" />
        <Form.Select name="surfLevel" options={levelOptions} />
      </Form.Section>
    </Form>
  )
}
```

#### 2. Provider Pattern for Booking State
```typescript
// contexts/BookingContext.tsx
interface BookingContextType {
  booking: BookingData
  updateBooking: (data: Partial<BookingData>) => void
  submitBooking: () => Promise<BookingConfirmation>
  confirmationMessage: string
}

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [booking, setBooking] = useState<BookingData>(initialBooking)
  
  const submitBooking = async (): Promise<BookingConfirmation> => {
    const confirmation = await api.submitBooking(booking)
    await sendConfirmationEmail(confirmation)
    await sendWhatsAppNotification(confirmation)
    return confirmation
  }
  
  return (
    <BookingContext.Provider value={{ booking, updateBooking, submitBooking, confirmationMessage }}>
      {children}
    </BookingContext.Provider>
  )
}
```

## Data Models & Types

### Booking System Types
```typescript
// types/booking.ts
interface BookingData {
  id: string
  fullName: string
  email: string
  whatsappNumber: string
  numberOfPeople: number
  preferredDate: Date
  preferredTime: string
  surfLevel: 'Beginner' | 'Intermediate' | 'Advanced'
  lessonType: 'Group' | 'Semi-Private' | 'Private + Video'
  surfLocation?: string
  meetingPoint?: string
  specialRequests?: string
}

interface BookingConfirmation {
  bookingId: string
  customerName: string
  date: string
  time: string
  numberOfPeople: number
  lessonType: string
  surfLocation: string
  meetingPoint: string
  totalAmount: string
  confirmationMessage: string
}

interface TimeSlot {
  time: string
  available: boolean
  capacity: number
}
```

### Content Types
```typescript
// types/content.ts
interface InstructorProfile {
  name: string
  title: string
  experience: string
  certifications: string[]
  bio: string
  profileImage: string
  actionImages: string[]
  instagramHandle: string
  accomplishments: string[]
}

interface LessonPackage {
  id: string
  title: string
  price: string
  currency: 'IDR'
  duration: string
  maxPeople: number
  features: string[]
  popular?: boolean
  videoAnalysis?: boolean
}

interface SurfExample {
  level: 'Beginner' | 'Intermediate'
  title: string
  description: string
  media: {
    type: 'video' | 'image'
    url: string
    thumbnail?: string
  }[]
}
```

## API Architecture

### Booking API Endpoints
```typescript
// pages/api/booking/
├── submit.ts           # POST /api/booking/submit
├── availability.ts     # GET /api/booking/availability?date=YYYY-MM-DD
├── confirmation.ts     # GET /api/booking/confirmation/[id]
└── admin/
    ├── list.ts         # GET /api/booking/admin/list
    └── update.ts       # PUT /api/booking/admin/update/[id]
```

### Integration API Endpoints
```typescript
// pages/api/integrations/
├── instagram.ts        # GET /api/integrations/instagram
├── reviews.ts          # GET /api/integrations/reviews
├── forecast.ts         # GET /api/integrations/forecast
└── whatsapp.ts         # POST /api/integrations/whatsapp
```

### Email Service Architecture
```typescript
// lib/email/templates/
├── booking-confirmation.tsx    # Booking confirmation email
├── admin-notification.tsx      # New booking notification
└── booking-reminder.tsx        # Lesson reminder email

// lib/email/service.ts
export class EmailService {
  async sendBookingConfirmation(booking: BookingData): Promise<void>
  async sendAdminNotification(booking: BookingData): Promise<void>
  async sendBookingReminder(booking: BookingData): Promise<void>
}
```

## Database Schema (Optional Enhancement)

### If Database Implementation Required
```sql
-- bookings table
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  whatsapp_number VARCHAR(20),
  number_of_people INTEGER NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time TIME NOT NULL,
  surf_level VARCHAR(20) NOT NULL,
  lesson_type VARCHAR(50) NOT NULL,
  surf_location VARCHAR(100),
  meeting_point VARCHAR(100),
  special_requests TEXT,
  status VARCHAR(20) DEFAULT 'pending',
  total_amount INTEGER,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- availability table
CREATE TABLE availability (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date DATE NOT NULL,
  time_slot TIME NOT NULL,
  available_spots INTEGER NOT NULL,
  max_capacity INTEGER NOT NULL,
  lesson_type VARCHAR(50) NOT NULL
);
```

## State Management Strategy

### Local State (React useState/useReducer)
- Form data and validation states
- UI interactions (modals, dropdowns, etc.)
- Component-specific temporary data

### Context API
- Booking flow state
- User preferences
- Theme and UI settings

### Server State (React Query/SWR - if needed)
- API data caching
- Background data synchronization
- Optimistic updates

## Performance Optimization

### Image Optimization
```typescript
// next.config.js
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'instagram.com', 'maps.googleapis.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 420, 768, 1024, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  }
}
```

### Video Optimization Strategy
```typescript
// components/HeroPanorama.tsx
const HeroPanorama = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  
  return (
    <div className="relative h-screen">
      {/* Optimized video loading */}
      <video
        preload="metadata"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        className={`transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <source src="/videos/uluwatu-panoramic-1080p.mp4" type="video/mp4" />
        <source src="/videos/uluwatu-panoramic-720p.webm" type="video/webm" />
      </video>
      
      {/* Fallback image */}
      {!videoLoaded && (
        <Image
          src="/images/uluwatu-hero-fallback.jpg"
          alt="Uluwatu Surf"
          fill
          className="object-cover"
          priority
        />
      )}
    </div>
  )
}
```

### Code Splitting Strategy
```typescript
// Dynamic imports for heavy components
const SurfExamplesGallery = dynamic(() => import('@/components/sections/SurfExamplesGallery'), {
  loading: () => <div>Loading gallery...</div>,
  ssr: false
})

const InstagramFeed = dynamic(() => import('@/components/integrations/InstagramFeed'), {
  loading: () => <div>Loading Instagram feed...</div>
})
```

## SEO Architecture

### Metadata Configuration
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'Uluwatu Surf School - Scoot Professional Surf Instruction',
    template: '%s | Uluwatu Surf School'
  },
  description: 'Professional surf instruction with Scoot in Uluwatu, Bali. Group lessons IDR 400k, semi-private IDR 500k, private + video analysis IDR 700k. 15+ years local expertise.',
  keywords: ['uluwatu surf school', 'scoot surf instructor', 'bali surf lessons', 'professional surf coaching', 'video analysis surfing'],
  openGraph: {
    title: 'Uluwatu Surf School - Scoot Professional Surf Instruction',
    description: 'Professional surf instruction with Scoot in Uluwatu, Bali.',
    url: 'https://uluwatusurfschool.com',
    siteName: 'Uluwatu Surf School',
    locale: 'en_US',
    type: 'website'
  }
}
```

### Structured Data Implementation
```typescript
// components/StructuredData.tsx
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Uluwatu Surf School",
  "image": [
    "https://uluwatusurfschool.com/images/school-photo-1.jpg",
    "https://uluwatusurfschool.com/images/school-photo-2.jpg"
  ],
  "@id": "https://uluwatusurfschool.com",
  "url": "https://uluwatusurfschool.com",
  "telephone": "+62-812-3456-7890",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jalan Pantai Suluban",
    "addressLocality": "Uluwatu",
    "addressRegion": "Bali",
    "postalCode": "80361",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -8.8299,
    "longitude": 115.0849
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    "opens": "06:00",
    "closes": "18:00"
  },
  "priceRange": "IDR 400,000 - IDR 700,000"
}
```

## Security Considerations

### Form Security
- Input validation and sanitization
- CSRF protection
- Rate limiting on form submissions
- Email and phone number format validation

### API Security
- API rate limiting
- Input validation on all endpoints
- Secure environment variable handling
- HTTPS enforcement

### Third-Party Integration Security
- API key management
- Secure token storage
- Webhook signature verification
- Error handling without information disclosure

## Deployment Architecture

### Vercel Deployment Configuration
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "functions": {
    "pages/api/**/*.ts": {
      "maxDuration": 30
    }
  },
  "headers": [
    {
      "source": "/videos/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=86400"
        }
      ]
    }
  ]
}
```

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://uluwatusurfschool.com
SENDGRID_API_KEY=sg-xxx
WHATSAPP_API_KEY=xxx
INSTAGRAM_ACCESS_TOKEN=xxx
GOOGLE_PLACES_API_KEY=xxx
ADMIN_EMAIL=admin@uluwatusurfschool.com
```

## Monitoring & Analytics

### Performance Monitoring
```typescript
// components/WebVitalsReporter.tsx (existing, enhanced)
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

const reportWebVitals = (metric: any) => {
  // Send to analytics service
  gtag('event', metric.name, {
    event_category: 'Web Vitals',
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    event_label: metric.id,
    non_interaction: true
  })
}
```

### Error Tracking
- Implement error boundaries for graceful error handling
- Logging service integration (Sentry or similar)
- User feedback collection for errors

## Testing Strategy

### Unit Testing
```typescript
// __tests__/components/BookingForm.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { BookingForm } from '@/components/booking/BookingForm'

describe('BookingForm', () => {
  test('validates required fields', async () => {
    render(<BookingForm />)
    
    fireEvent.click(screen.getByText('Book Now'))
    
    await waitFor(() => {
      expect(screen.getByText('Full name is required')).toBeInTheDocument()
      expect(screen.getByText('Email is required')).toBeInTheDocument()
    })
  })
})
```

### Integration Testing
- API endpoint testing
- Form submission flow testing
- Third-party integration testing

### End-to-End Testing
```typescript
// e2e/booking-flow.spec.ts
import { test, expect } from '@playwright/test'

test('complete booking flow', async ({ page }) => {
  await page.goto('/')
  
  await page.click('text=Book Session')
  await page.fill('[name="fullName"]', 'Test User')
  await page.fill('[name="email"]', 'test@example.com')
  await page.selectOption('[name="numberOfPeople"]', '2')
  
  await page.click('text=Book Now')
  
  await expect(page.getByText('Booking confirmed')).toBeVisible()
})
```

## Maintenance & Updates

### Content Management
- Clear procedures for content updates
- Image and video upload guidelines
- SEO metadata update processes

### Dependency Management
- Regular security updates
- Performance optimization reviews
- Feature enhancement planning

### Backup & Recovery
- Regular database backups (if applicable)
- Code repository management
- Environment configuration backups

## Scalability Considerations

### Performance Scaling
- CDN implementation for static assets
- Image optimization and lazy loading
- API response caching strategies

### Feature Scaling
- Modular component architecture
- Plugin-based enhancement system
- API versioning for future updates

This technical architecture provides a solid foundation for implementing the Scoot Website requirements while maintaining scalability, performance, and maintainability standards.