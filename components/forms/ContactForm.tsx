'use client'

import { useState } from 'react'
import { useFormspreeForm, FORMSPREE_FORMS } from '@/lib/formspree'

const WHATSAPP_NUMBER = '6281999885826'

interface FormState {
  fullName: string
  numberOfPeople: string
  whatsapp: string
  email: string
  preferredDateTime: string
  surfLevel: string
  message: string
}

const initialState: FormState = {
  fullName: '',
  numberOfPeople: '',
  whatsapp: '',
  email: '',
  preferredDateTime: '',
  surfLevel: '',
  message: ''
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMethod, setSubmitMethod] = useState<'formspree' | 'whatsapp'>('formspree')
  
  // Initialize Formspree form
  const [formspreeState, handleFormspreeSubmit] = useFormspreeForm(FORMSPREE_FORMS.contact)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    if (submitMethod === 'formspree') {
      // Submit via Formspree
      await handleFormspreeSubmit(formState)
      if (formspreeState.succeeded) {
        setFormState(initialState)
      }
    } else {
      // Submit via WhatsApp (fallback)
      const message = `Hi Scotty Dex! I'd love more detail on lessons.\n\nFull Name: ${formState.fullName}\nNumber of people: ${formState.numberOfPeople || 'Not specified'}\nWhatsApp #: ${formState.whatsapp || 'Not provided'}\nEmail: ${formState.email}\nPreferred date/time: ${formState.preferredDateTime || 'Not specified'}\nSurf level: ${formState.surfLevel || 'Not specified'}\n\nMessage: ${formState.message || 'No additional notes yet.'}`

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

      await new Promise((resolve) => setTimeout(resolve, 400))
      setFormState(initialState)
    }

    setIsSubmitting(false)
  }

  const inputStyles = 'w-full bg-black/40 border border-white/10 px-4 py-3 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/30'

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="fullName" className="text-body-sm text-neutral-500">Full Name *</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          value={formState.fullName}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="numberOfPeople" className="text-body-sm text-neutral-500">Number of People</label>
          <input
            type="number"
            id="numberOfPeople"
            name="numberOfPeople"
            min="1"
            value={formState.numberOfPeople}
            onChange={handleChange}
            className={inputStyles}
            placeholder="1"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="whatsapp" className="text-body-sm text-neutral-500">WhatsApp Number</label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            value={formState.whatsapp}
            onChange={handleChange}
            className={inputStyles}
            placeholder="+62..."
          />
        </div>
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
        <label htmlFor="preferredDateTime" className="text-body-sm text-neutral-500">Preferred Date/Time</label>
        <input
          type="text"
          id="preferredDateTime"
          name="preferredDateTime"
          value={formState.preferredDateTime}
          onChange={handleChange}
          className={inputStyles}
          placeholder="e.g., Tomorrow morning, Dec 15 6AM"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="surfLevel" className="text-body-sm text-neutral-500">Surf Level</label>
        <select
          id="surfLevel"
          name="surfLevel"
          value={formState.surfLevel}
          onChange={handleChange}
          className={inputStyles}
        >
          <option value="">Select level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-body-sm text-neutral-500">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formState.message}
          onChange={handleChange}
          className={`${inputStyles} resize-none`}
          placeholder="Goals, questions, timeline…"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.24em] text-white hover:bg-white hover:text-black transition disabled:opacity-60"
      >
        {isSubmitting ? 'Opening WhatsApp…' : 'Send Via WhatsApp'}
      </button>
    </form>
  )
}
