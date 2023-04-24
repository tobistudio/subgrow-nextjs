import React, { Suspense } from "react"
import { Form, FormProps } from "core/components/Form"
import { LabeledTextField } from "core/components/LabeledTextField"
// TODO: do not use this
import { z } from "zod"
export { FORM_ERROR } from "core/components/Form"

export function ServiceForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      {/* template: <__component__ name="__fieldName__" label="__Field_Name__" placeholder="__Field_Name__"  type="__inputType__" /> */}
    </Form>
  )
}
