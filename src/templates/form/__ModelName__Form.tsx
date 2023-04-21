// @ts-nocheck
import { Form, FormProps } from "core/components/Form"
import { LabeledTextField } from "core/components/LabeledTextField"
import { z } from "zod"
import React from "react"
export { FORM_ERROR } from "core/components/Form"

export function __ModelName__Form<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <div className="form-container vertical">
        <LabeledTextField
          name="name"
          label="Plan Name"
          placeholder=""
          className="input input-md"
          labelClass="form-label-custom"
          wrapperClass="form-item vertical"
          required={true}
        />

        <LabeledTextField
          name="description"
          label="Description"
          placeholder=""
          className="input input-md"
          labelClass="form-label-custom"
          wrapperClass="form-item vertical"
          required={true}
        />
      </div>
    </Form>
  )
}
