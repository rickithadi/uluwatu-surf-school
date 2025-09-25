'use client'

import { useState } from 'react'

const WHATSAPP_NUMBER = '6281234567890'

interface FormState {
  firstName: string
  lastName: string
  email: string
  experience: string
  lessonType: string
  message: string
}

const initialState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  experience: '',
  lessonType: '',
  message: ''
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const message = `Hi Scoot! I'd love more detail on lessons.\n\nName: ${formState.firstName} ${formState.lastName}\nEmail: ${formState.email}\nExperience: ${formState.experience || 'Not specified'}\nLesson interest: ${formState.lessonType || 'Not specified'}\n\nMessage: ${formState.message || 'No additional notes yet.'}`

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    await new Promise((resolve) => setTimeout(resolve, 400))

    setFormState(initialState)
    setIsSubmitting(false)
  }

  const inputStyles = 'w-full bg-black/40 border border-white/10 px-4 py-3 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/30'

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
        <label htmlFor="experience" className="text-body-sm text-neutral-500">Surfing Experience</label>
        <select
          id="experience"
          name="experience"
          value={formState.experience}
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
        <label htmlFor="lessonType" className="text-body-sm text-neutral-500">Lesson Interest</label>
        <select
          id="lessonType"
          name="lessonType"
          value={formState.lessonType}
          onChange={handleChange}
          className={inputStyles}
        >
          <option value="">Select lesson type</option>
          <option value="group">Group Session</option>
          <option value="semi-private">Semi-Private</option>
          <option value="private">Private + Video Analysis</option>
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
