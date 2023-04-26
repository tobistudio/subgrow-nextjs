import React, { ReactNode, PropsWithoutRef } from "react"
import { Form as FinalForm, FormProps as FinalFormProps, FormSpy, Field } from "react-final-form"
import setFieldData from "final-form-set-field-data"
import { z } from "zod"
import { validateZodSchema } from "blitz"
export { FORM_ERROR } from "final-form"
import Alert from "@mui/material/Alert"
import { Box, Button, Stack } from "@mui/material"
import { FileDownloadTwoTone as FileDownloadTwoToneIcon } from "@mui/icons-material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/pro-duotone-svg-icons"
import { FacebookProvider, LoginButton } from "react-facebook"
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons"

// TODO: f you want to write it to the DOM, pass a string instead: global="true" or global={value.toString()}.
export interface FormProps<S extends z.ZodType<any, any>>
  extends Omit<PropsWithoutRef<JSX.IntrinsicElements["form"]>, "onSubmit"> {
  /** All your form fields */
  children?: ReactNode
  /** Text to display in the submit button */
  submitText?: string
  submitClass?: string
  schema?: S
  onSubmit: FinalFormProps<z.infer<S>>["onSubmit"]
  initialValues?: FinalFormProps<z.infer<S>>["initialValues"]
}

const handleResponse = (data) => {
  console.log(data)
}

const handleFacebookError = (error) => {
  console.log("error", error)
  //this.setState({ error });
}

const handleFacebookSuccess = (response) => {
  console.log(response.status)
}

// TODO: instead of opening, need to make ajax call, and redirect??
const handleTwitterLogin = () => {
  // Authenticate using via passport api in the backend
  // Open Twitter login page
  window.open("/api/auth/twitter", "_self")
}

const handleTwitterLogout = () => {
  // Logout using Twitter passport api
  // Set authenticated state to false in the HomePage component
  window.open("/api/auth/twitter/logout", "_self")
  handleTwitterNoAuth()
}

const handleTwitterNoAuth = () => {
  console.log("handleTwitterNoAuth")
}

const handleTiktokLogin = () => {
  console.log("handleTiktokLogin")

  // window.open("/api/auth/tiktok/login", "_self");
  window.open("/api/auth/tiktok", "_self")
}

const handleInstagramLogin = () => {
  console.log("handleInstagramLogin")

  // window.open("/api/auth/instagram/login", "_self")
  window.open("/api/auth/instagram", "_self")
}

const handleGoogleLogin = () => {
  console.log("handleGoogleLogin")

  // window.open("/api/auth/tiktok/login", "_self");
  window.open("/api/auth/google", "_self")
  // window.open("/api/auth/google/login", "_self")
}

// const WarningEngine = ({ mutators: { setFieldData } }) => (
//   <FormSpy
//     subscription={{ values: true }}
//     onChange={({ values }) => {
//
//       console.log("values",values);
//       setFieldData("name", {
//         warning: values.name ? undefined : "Recommended",
//       })
//       setFieldData("content", {
//         warning: values.content ? undefined : "Recommended",
//       })
//     }}
//   />
// )
export function LoginFinalForm<S extends z.ZodType<any, any>>({
  children,
  submitText,
  submitClass,
  schema,
  initialValues,
  onSubmit,
  ...props
}: FormProps<S>) {
  return (
    <FinalForm
      initialValues={initialValues}
      validate={validateZodSchema(schema)}
      onSubmit={onSubmit}
      mutators={{ setFieldData }}
      render={({ handleSubmit, form, submitting, submitError, pristine, values }) => (
        <form onSubmit={handleSubmit} className={`banner ${submitError ? "error" : ""}`} {...props}>
          {submitError && (
            <Alert severity="error" className="mt-4 mb-4">
              {submitError}
            </Alert>
          )}

          {children}

          {/* TODO: material ui button not working */}
          {submitText && (
            <Box display="flex" justifyContent="center" pt={4}>
              <Stack
                spacing={2}
                // alignItems="left"
                // alignContent="left"
              >
                <Button
                  variant="outlined"
                  style={{ justifyContent: "flex-start" }}
                  startIcon={<FontAwesomeIcon icon={faUser} style={{ width: 17, height: 17 }} />}
                  className={submitClass}
                  type="submit"
                  disabled={submitting}
                >
                  <span>{submitText}</span>
                </Button>
                <FacebookProvider appId="241448415049637">
                  <Button
                    variant="fbbutton"
                    style={{ justifyContent: "flex-start" }}
                    startIcon={
                      <FontAwesomeIcon icon={faFacebook} style={{ width: 17, height: 17 }} />
                    }
                  >
                    <LoginButton
                      asChild="span"
                      scope="email"
                      onError={handleFacebookError}
                      onSuccess={handleFacebookSuccess}
                    >
                      <span>Login via Facebook</span>
                    </LoginButton>
                  </Button>
                </FacebookProvider>

                <Button
                  variant="twbutton"
                  style={{ justifyContent: "flex-start" }}
                  onClick={handleTwitterLogin}
                  startIcon={<FontAwesomeIcon icon={faTwitter} style={{ width: 17, height: 17 }} />}
                >
                  <span>Login via Twitter</span>
                </Button>

                <Button
                  variant="igbutton"
                  style={{ justifyContent: "flex-start" }}
                  onClick={handleInstagramLogin}
                  startIcon={
                    <FontAwesomeIcon icon={faInstagram} style={{ width: 17, height: 17 }} />
                  }
                >
                  <span>Login via Instagram</span>
                </Button>

                <Button
                  variant="ttbutton"
                  style={{ justifyContent: "flex-start" }}
                  onClick={handleTiktokLogin}
                  startIcon={<FontAwesomeIcon icon={faTiktok} style={{ width: 17, height: 17 }} />}
                >
                  <span>Login via Tik Tok</span>
                </Button>

                <Button
                  variant="gbutton"
                  style={{ justifyContent: "flex-start" }}
                  onClick={handleGoogleLogin}
                  startIcon={<FontAwesomeIcon icon={faGoogle} style={{ width: 17, height: 17 }} />}
                >
                  <span>Login via Google</span>
                </Button>
              </Stack>
            </Box>
          )}
        </form>
      )}
    />
  )
}

export default LoginFinalForm
