import { useForm } from '@formspree/react'

export const useFormspreeForm = (formId: string) => {
  return useForm(formId)
}

export const FORMSPREE_FORMS = {
  booking: 'mwkaoqoy' // Try with a standard Formspree form ID
} as const