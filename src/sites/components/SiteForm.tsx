// TODO: use only for adds, not edits
import { Form, FormProps } from "core/components/Form"
import { LabeledTextField } from "core/components/LabeledTextField"
import { z } from "zod"
import React from "react"
export { FORM_ERROR } from "core/components/Form"

export function SiteForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <div className="form-container vertical">
        <LabeledTextField
          name="name"
          label="Site Name"
          placeholder=""
          className="input input-md"
          labelClass="form-label-custom"
          wrapperClass="form-item vertical"
          required={true}
        />

        <LabeledTextField
          name="url"
          label="Site URL"
          placeholder="https://facebook.com/xxx"
          className="input input-md"
          labelClass="form-label-custom"
          wrapperClass="form-item vertical"
          required={true}
        />

        <LabeledTextField
          name="api_key"
          label="API Key"
          placeholder=""
          className="input input-md"
          labelClass="form-label-custom"
          wrapperClass="form-item vertical"
          required={true}
        />

        <LabeledTextField
          name="api_secret"
          label="API Secret"
          placeholder=""
          className="input input-md"
          labelClass="form-label-custom"
          wrapperClass="form-item vertical"
          type="password"
          required={true}
        />

        {/*<LabeledTextField*/}
        {/*  name="api_secret"*/}
        {/*  label="API Secret"*/}
        {/*  placeholder=""*/}
        {/*  className="input input-md"*/}
        {/*  labelClass="form-label-custom"*/}
        {/*  wrapperClass="form-item vertical"*/}
        {/*  type="password"*/}
        {/*  required={true}*/}
        {/*/>*/}
      </div>
    </Form>
  )
}
