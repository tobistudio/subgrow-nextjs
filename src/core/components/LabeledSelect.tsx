import React, {
  forwardRef,
  ComponentPropsWithoutRef,
  PropsWithoutRef,
  useRef,
  useState,
  useEffect,
} from "react"
import { Field, useField, UseFieldConfig } from "react-final-form"

export interface LabeledTextFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  /** Field name. */
  name: string
  /** Field label. */
  label: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number"
  labelClass?: string
  defaultValue?: string
  wrapperClass?: string
  options?: {}
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  labelProps?: ComponentPropsWithoutRef<"label">
  fieldProps?: UseFieldConfig<string>
}

export const Opts = (props) => {
  {
    /*// TODO: default value?*/
  }
  let firstOption
  if (props.defaultValue) {
    firstOption = <option />
  } else {
    firstOption = (
      <option key="0" value="0">
        Select a Company
      </option>
    )
  }

  return (
    <select name={props.name} onChange={props.onChange}>
      {firstOption}
      {props.options.map((x) => {
        return (
          <option key={x.id} value={x.id}>
            {x.name}
          </option>
        )
      })}
    </select>
  )
}

export const LabeledSelect = forwardRef<HTMLInputElement, LabeledTextFieldProps>(
  (
    {
      name,
      label,
      labelClass,
      defaultValue,
      wrapperClass,
      options,
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
    } = useField(name, {
      parse:
        props.type === "number"
          ? (Number as any)
          : // Converting `""` to `null` ensures empty values will be set to null in the DB
            (v) => (v === "" ? null : v),
      ...fieldProps,
    })

    // useEffect(() => {
    //   if (defaultValue && options) {
    //     options.unshift({ id: 0, value: 0, name: defaultValue })
    //   }
    // }, [])

    // const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError
    // console.log("normalizedError", normalizedError)
    // {defaultValue && {
    //     options.push({name:"defaultValue"});
    //     // adds every state update
    //     //companies.push({name:"Select a Company"});
    //   }
    // }

    // onChange={props.onChange}
    return (
      <div className={wrapperClass}>
        <div className="select select-md">
          <label className={labelClass} {...labelProps}>
            {label}
          </label>
          {/*<Field name="favoriteColor" component="select">*/}
          <Field name={name} options={options} component="select">
            {/*{props.options.map((x) => {*/}
            {/*  return (*/}
            {/*    <option key={x.id} value={x.id}>*/}
            {/*      {x.name}*/}
            {/*    </option>*/}
            {/*  )*/}
            {/*})}*/}
            {({ input, meta, options }) => {
              return (
                <Opts
                  key={input.value}
                  //ref={optionRef}  // ref empty causes errors
                  options={options}
                  name={input.name}
                  // onChange={(value) => input.onChange(value)} // Doesn't work sometimes
                  onChange={(value, prevVal) => {
                    input.onChange(value)
                    console.log("value", value)
                  }}
                />
              )
            }}
          </Field>
        </div>
      </div>
    )
    // return (
    //   <div className={wrapperClass}>
    //     {/*<div {...outerProps}>*/}
    //
    //
    //     {/*<input {...input} disabled={submitting} {...props} ref={ref} />*/}
    //
    //     <div className="form-item vertical">
    //       <label className={labelClass} {...labelProps}>{label}</label>
    //       <Field {...input} disabled={submitting} {...props} ref={ref} name="type" component="select" className="input input-md">
    //         <option />
    //         {options.map((option, i) => {
    //           return <option key={i} value={option} ref={optionRef}>{option}</option>;
    //         })}
    //       </Field>
    //     </div>
    //
    //
    //     {touched && normalizedError && (
    //       <div role="alert" className="btn-danger">
    //         {normalizedError}
    //       </div>
    //     )}
    //   </div>
    //
    // )
  }
)
LabeledSelect.displayName = 'LabeledSelect';
export default LabeledSelect
