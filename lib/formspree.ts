import { useForm } from '@formspree/react'

export const useFormspreeForm = (formId: string) => {
  return useForm(formId)
}

export const FORMSPREE_FORMS = {
  contact: '2833978329348964282' // Formspree form ID extracted from provided URL
} as const