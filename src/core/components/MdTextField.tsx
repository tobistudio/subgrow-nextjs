import { forwardRef, ComponentPropsWithoutRef, PropsWithoutRef } from "react"
import { Form, Field, useField, UseFieldConfig } from "react-final-form"
import { TextField, Checkbox, Radio, Select } from "@mui/material" // final-form-material-ui

// TODO: may fix issue with mui
// missing Type error: Cannot find name 'LabeledTextFieldProps'.

import { TimePicker, DatePicker } from "@mui/lab"
import LabeledTextField from "./LabeledTextField"

// function DatePickerWrapper(props) {
//   const {
//     input: { name, onChange, value, ...restInput },
//     meta,
//     ...rest
//   } = props
//   const showError = ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) && meta.touched
//
//   return (
//     <DatePicker
//       {...rest}
//       name={name}
//       helperText={showError ? meta.error || meta.submitError : undefined}
//       error={showError}
//       inputProps={restInput}
//       onChange={onChange}
//       value={value === "" ? null : value}
//     />
//   )
// }

function TimePickerWrapper(props) {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props
  const showError = ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) && meta.touched

  return (
    <TimePicker
      {...rest}
      name={name}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value === "" ? null : value}
    />
  )
}

export interface MdTextFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  /** Field name. */
  name: string
  /** Field label. */
  label: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number"
  labelClass?: string
  wrapperClass?: string
  required?: boolean
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  labelProps?: ComponentPropsWithoutRef<"label">
  helperText?: string
  fieldProps?: UseFieldConfig<string>
}

export const MdTextField = forwardRef<HTMLInputElement, MdTextFieldProps>(
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
      helperText,
      ...props
    },
    ref
  ) => {
    const {
      //input,
      input: { onChange, value, ...restInput },
      meta: { touched, error, submitError, submitting },
      ...rest
    } = useField(name, {
      parse:
        type === "number"
          ? (Number as any)
          : // Converting `""` to `null` ensures empty values will be set to null in the DB
            (v) => (v === "" ? null : v),
      ...fieldProps,
    })

    // Type error: Property 'type' does not exist on type '{ onChange?: ChangeEventHandler<HTMLInputElement> | undefined; value?: string | number | readonly string[] | undefined; key?: Key | null | undefined; ... 285 more ...; onTransitionEndCapture?: TransitionEventHandler<...> | undefined; }'.

    const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError

    console.log("rest", restInput)
    // console.log("submitError", submitError)
    return (
      <div className={wrapperClass}>
        {/*let toucheProp*/}
        {/*{touched && normalizedError && (*/}
        {/*  toucheProp = error*/}
        {/*)}*/}
        {/*https://mui.com/material-ui/react-text-field/*/}
        {/*{...fieldProps}*/}
        <TextField
          {...restInput}
          ref={ref}
          name={name}
          label={label}
          InputLabelProps={{ className: labelClass }}
          // inputProps={{ className: labelClass }}
          className={labelClass}
          margin="dense"
          variant="outlined"
          helperText={helperText}
          required={required}
          error={!!(touched && normalizedError)}
          disabled={submitting}
          type={type}

          // color="warning"
          // focused
        />

        {/*{required}*/}

        {/*{required && normalizedError && (*/}
        {/*  <span role="alert" className="required">*/}
        {/*      **/}
        {/*    </span>*/}
        {/*)}*/}

        {touched && normalizedError && (
          <div role="alert" className="btn-danger touched">
            {normalizedError}
          </div>
        )}

        {/*<label className={labelClass} {...labelProps}>*/}
        {/*  {label}*/}
        {/*  {required && normalizedError && (*/}
        {/*    <span role="alert" className="required">*/}
        {/*      **/}
        {/*    </span>*/}
        {/*  )}*/}
        {/*  <input {...input} disabled={submitting} {...props} ref={ref} />*/}

        {/*  {required}*/}
        {/*</label>*/}

        {/*{touched && normalizedError && (*/}
        {/*  <div role="alert" className="btn-danger touched">*/}
        {/*    {normalizedError}*/}
        {/*  </div>*/}
        {/*)}*/}
      </div>
    )
  }
)
MdTextField.displayName = "MdTextField"
export default MdTextField
