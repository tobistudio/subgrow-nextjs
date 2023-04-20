import { forwardRef, ComponentPropsWithoutRef, PropsWithoutRef } from "react"
import { useField, UseFieldConfig } from "react-final-form"

export interface HiddenTextFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  /** Field name. */
  name: string
  /** Field label. */
  label: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number" | "hidden"
  labelClass?: string
  wrapperClass?: string
  required?: boolean
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  labelProps?: ComponentPropsWithoutRef<"label">
  fieldProps?: UseFieldConfig<string>
}

export const HiddenTextField = forwardRef<HTMLInputElement, HiddenTextFieldProps>(
  (
    {
      name,
      label,
      type,
      labelClass,
      wrapperClass,
      required,
      outerProps,
      fieldProps,
      labelProps,
      ...props
    },
    ref
  ) => {
    const {
      input,
      meta: { touched, error, submitError, submitting },
    } = useField(name)

    return (
      <div className={wrapperClass}>
        <input {...input} disabled={submitting} {...props} ref={ref} hidden />
      </div>
    )
  }
)
HiddenTextField.displayName = "LabeledTextField"
export default HiddenTextField
