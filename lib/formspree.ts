import { useForm } from '@formspree/react'

export const useFormspreeForm = (formId: string) => {
  return useForm(formId)
}

export const FORMSPREE_FORMS = {
  contact: 'contact' // Using form key directly from formspree.json - only one form needed
} as const