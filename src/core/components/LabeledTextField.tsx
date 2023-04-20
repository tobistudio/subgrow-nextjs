import { forwardRef, ComponentPropsWithoutRef, PropsWithoutRef } from "react"
import { useField, UseFieldConfig } from "react-final-form"

export interface LabeledTextFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
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

export const LabeledTextField = forwardRef<HTMLInputElement, LabeledTextFieldProps>(
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
    // (
    //   {
    //     name,
    //     label,
    //     type,
    //     labelClass,
    //     wrapperClass,
    //     required,
    //     outerProps,
    //     fieldProps,
    //     labelProps,
    //     ...props
    //   },
    //   ref
    // ) => {
    //   const {
    //     input,
    //     meta: { touched, error, submitError, submitting },
    //   } = useField(name, {
    //     parse:
    //       props.type === "number"
    //         ? (Number as any)
    //         : // Converting `""` to `null` ensures empty values will be set to null in the DB
    //           (v) => (v === "" ? null : v),
    //     ...fieldProps,
    //   })

    const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError

    // console.log("normalizedError", normalizedError)
    // console.log("submitError", submitError)
    return (
      <div className={wrapperClass}>
        {/*<div {...outerProps}>*/}
        <label className={labelClass} {...labelProps}>
          {label}
          {required && normalizedError && (
            <span role="alert" className="required">
              *
            </span>
          )}

          {required}
        </label>
        <input {...input} disabled={submitting} {...props} ref={ref} type={type} />
        {touched && normalizedError && (
          <div role="alert" className="btn-danger">
            {normalizedError}
          </div>
        )}
      </div>
    )
  }
)
LabeledTextField.displayName = "LabeledTextField"
export default LabeledTextField
