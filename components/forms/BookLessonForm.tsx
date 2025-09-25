'use client'

import { useState } from 'react'
import { Button } from '../ui/Button'

interface FormState {
  lessonType: string
  firstName: string
  lastName: string
  email: string
  phone: string
  experience: string
  participants: string
  date: string
  time: string
  notes: string
}

const initialState: FormState = {
  lessonType: 'group',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  experience: '',
  participants: '1',
  date: '',
  time: '',
  notes: ''
}

const WHATSAPP_NUMBER = '6281234567890'

const lessonOptions = [
  { value: 'group', title: 'Group Session', description: 'Max 4 surfers', price: 'IDR 400K' },
  { value: 'semi-private', title: 'Semi-Private', description: 'Max 2 surfers', price: 'IDR 500K' },
  { value: 'private', title: 'Private + Video', description: '1-on-1 + film review', price: 'IDR 700K' }
]

export default function BookLessonForm() {
  const [formState, setFormState] = useState<FormState>(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const message = `Hi Scoot! I'd like to reserve a lesson.\n\nLesson Type: ${formState.lessonType}\nParticipants: ${formState.participants}\nExperience: ${formState.experience || 'Not specified'}\nPreferred Date: ${formState.date || 'Not selected'}\nPreferred Time: ${formState.time || 'No preference'}\n\nName: ${formState.firstName} ${formState.lastName}\nEmail: ${formState.email}\nWhatsApp #: ${formState.phone}\nNotes: ${formState.notes || 'None'}\n\nI understand payment is cash on the day.`

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    await new Promise((resolve) => setTimeout(resolve, 400))

    setFormState(initialState)
    setIsSubmitting(false)
  }

  const inputStyles = 'w-full bg-black/40 border border-white/10 px-4 py-3 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/30'

  return (
    <form className="space-y-10" onSubmit={handleSubmit}>
      <div className="space-y-6">
        <h3 className="text-heading-2">Choose Your Program</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {lessonOptions.map((option) => (
            <label key={option.value} className="surface-panel border border-white/12 hover:border-white/25 transition cursor-pointer">
              <div className="space-y-3 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-body-sm text-neutral-500">{option.description}</span>
                  {formState.lessonType === option.value && (
                    <span className="text-body-sm text-white">Selected</span>
                  )}
                </div>
                <p className="text-heading-2 text-white tracking-[0.2em]">{option.title}</p>
                <p className="text-body text-neutral-300">{option.price}</p>
              </div>
              <input
                type="radio"
                name="lessonType"
                value={option.value}
                checked={formState.lessonType === option.value}
                onChange={handleChange}
                className="sr-only"
              />
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-heading-2">Personal Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-body-sm text-neutral-500">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formState.firstName}
              onChange={handleChange}
              className={inputStyles}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-body-sm text-neutral-500">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formState.lastName}
              onChange={handleChange}
              className={inputStyles}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-body-sm text-neutral-500">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formState.email}
              onChange={handleChange}
              className={inputStyles}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-body-sm text-neutral-500">WhatsApp Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formState.phone}
              onChange={handleChange}
              className={inputStyles}
              placeholder="+62 812 3456 7890"
            />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-heading-2">Session Preferences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="experience" className="text-body-sm text-neutral-500">Surfing Experience *</label>
            <select
              id="experience"
              name="experience"
              required
              value={formState.experience}
              onChange={handleChange}
              className={inputStyles}
            >
              <option value="">Select level</option>
              <option value="never">Never surfed</option>
              <option value="beginner">Beginner (1-10 sessions)</option>
              <option value="intermediate">Intermediate (unbroken waves)</option>
              <option value="advanced">Advanced (overhead reef)</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="participants" className="text-body-sm text-neutral-500">Participants</label>
            <select
              id="participants"
              name="participants"
              value={formState.participants}
              onChange={handleChange}
              className={inputStyles}
            >
              {[1, 2, 3, 4].map((count) => (
                <option key={count} value={count}>{count} Surfer{count === 1 ? '' : 's'}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="date" className="text-body-sm text-neutral-500">Preferred Date *</label>
            <input
              type="date"
              id="date"
              name="date"
              required
              value={formState.date}
              onChange={handleChange}
              className={inputStyles}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="time" className="text-body-sm text-neutral-500">Preferred Time</label>
            <select
              id="time"
              name="time"
              value={formState.time}
              onChange={handleChange}
              className={inputStyles}
            >
              <option value="">No preference</option>
              <option value="dawn">Dawn patrol (06:00)</option>
              <option value="morning">Morning (09:00)</option>
              <option value="midday">Midday (12:00)</option>
              <option value="afternoon">Afternoon (15:00)</option>
              <option value="sunset">Late session (17:00)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="notes" className="text-body-sm text-neutral-500">Special Requests</label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          value={formState.notes}
          onChange={handleChange}
          className={`${inputStyles} resize-none`}
          placeholder="Goals, injuries, board preferences…"
        ></textarea>
      </div>

      <div className="surface-divider pt-6">
        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Opening WhatsApp…' : 'Submit & Confirm'}
        </Button>
        <p className="text-body-sm text-neutral-500 text-center mt-4">
          We confirm via WhatsApp and include tide suggestions. Payment is cash on the day.
        </p>
      </div>
    </form>
  )
}
