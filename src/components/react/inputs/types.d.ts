import type { FieldValues, UseControllerProps } from 'react-hook-form'

export type ITextFieldProps<T extends FieldValues> = UseControllerProps<T> & {
   name: string
   type: 'text' | 'password' | 'email'
   placeholder: string
}
