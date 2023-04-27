import AdminLayout from "core/layouts/AdminLayout"
import { LabeledTextField } from "core/components/LabeledTextField"
import { Form, FORM_ERROR } from "core/components/Form"
import { ForgotPassword } from "auth/validations"
import forgotPassword from "auth/mutations/forgotPassword"
import { useMutation } from "@blitzjs/rpc"
import { BlitzPage } from "@blitzjs/next"
import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Stack,
} from "@mui/material"

const ForgotPasswordPage: BlitzPage = () => {
  const [forgotPasswordMutation, { isSuccess }] = useMutation(forgotPassword)

  return (
    <AdminLayout title="Forgot Your Password?">
      <h1>Forgot your password?</h1>

      {isSuccess ? (
        <div>
          <Alert severity="info" className="mt-4 mb-4">
            You will receive an email to reset your password shortly.
          </Alert>
        </div>
      ) : (
        <Form
          submitText="Send Reset Password Instructions"
          schema={ForgotPassword}
          initialValues={{ email: "" }}
          onSubmit={async (values, submitError) => {
            try {
              await forgotPasswordMutation(values)
            } catch (error: any) {
              return {
                [FORM_ERROR]: "Sorry, we had an unexpected error. Please try again.",
              }
            }
          }}
        >
          <LabeledTextField name="email" label="Email" placeholder="Email" />
        </Form>
      )}
    </AdminLayout>
  )
}

export default ForgotPasswordPage
