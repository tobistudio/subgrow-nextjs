import React, { useEffect } from "react"
import { FORM_ERROR } from "core/components/Form"
import signup from "auth/mutations/signup"
import { useMutation, useQuery } from "@blitzjs/rpc"
import { Form as FinalForm, Field } from "react-final-form"
import { PromiseReturnType, validateZodSchema } from "blitz"
import Alert from "@mui/material/Alert"
import { Button, Stack, Typography, Card, CardContent, Box, Container } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGear,
  faCircleExclamation,
  faUser,
  faUnlock,
  faEnvelope,
} from "@fortawesome/pro-duotone-svg-icons"
// import { faFaceDisappointed } from '@fortawesome/pro-thin-svg-icons'
import { faXmarkLarge, faCheck } from "@fortawesome/pro-regular-svg-icons"
import { faFaceAnguished } from "@fortawesome/pro-duotone-svg-icons"
import UserList from "../../../data/users.json"
import BadWords from "../../../data/badwords.json"
import { RootStateOrAny, useSelector } from "react-redux"
import login from "../mutations/login"

import { TextField } from "mui-rff"
import InputAdornment from "@mui/material/InputAdornment"
import { fonts, misc } from "configs/colors/default"

type SignupFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof login>) => void
}

export const SignupForm = (props: SignupFormProps) => {
  const [signupMutation] = useMutation(signup)

  // TODO: error on build
  // Type error: Property 'theme' does not exist on type 'DefaultRootState'.
  // // https://stackoverflow.com/questions/60777859/ts2339-property-tsreducer-does-not-exist-on-type-defaultrootstate

  const theme = useSelector((state: RootStateOrAny) => state.theme)
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  console.log("theme", theme)

  let primeColor, secColor

  if (theme.mode === "dark") {
    primeColor = "#7389c7"
    secColor = "#cdd4e3"
  } else {
    primeColor = "#1b52b2"
    secColor = "#5e8ce0"
  }
  // style={{"--fa-primary-color": "#0d3d8a", "--fa-secondary-color": "#1953b8",}}

  const simpleMemoize = (fn) => {
    let lastArg
    let lastResult
    return (arg) => {
      if (arg !== lastArg) {
        lastArg = arg
        lastResult = fn(arg)
      }
      return lastResult
    }
  }

  // useEffect(() => {
  //   console.log("useEffect")
  //   //const [check] = useQuery(checkUser, { username: "ameshkin" }) // TODO: cannot call here
  //
  //   //return check
  // }, [])

  // TODO: something is throwing validation of, button isn't disabled but won't work if font returned
  const usernameAvailable = simpleMemoize(async (value) => {
    // No lookups unless 4 characters or more
    if (value.length < 4) {
      return ""
    }
    await sleep(100)
    // TODO: need to check value to see if bad word shows up "badbad" should flag, if "bad" is in badwords.json

    // TODO: set meta or figure out how to get this into InputProps
    if (~BadWords.indexOf(value && value.toLowerCase())) {
      console.log("BadWords")
      return <FontAwesomeIcon icon={faFaceAnguished} style={{ color: fonts.alert }} />
    }

    if (~UserList.indexOf(value && value.toLowerCase())) {
      // TODO: disable button
      console.log("UserList", UserList)
      //return 'Username Not Available'
      return <FontAwesomeIcon icon={faXmarkLarge} style={{ color: fonts.alert }} />
    }
    // return true doesnt work, return anything
    // if (!value) {
    //   console.log("turning excliam", value)
    //   return <FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#c62a2a" }} />
    // }
    //
    // if (value.length < 4) {
    //   console.log("return")
    //   return ""
    // }
    //
    // if (~UserList.indexOf(value && value.toLowerCase())) {
    //   // TODO: disable button
    //   return <FontAwesomeIcon icon={faXmarkLarge} size="xl" style={{ color: "#c62a2a" }} />
    // }
    //
    // if (value.length > 5) {
    //   return <FontAwesomeIcon icon={faCheck} size="xl" style={{ color: "#408d0a" }} />
    // }

    return ""

    // return true;    // wont work
  })
  const onSubmit = async (values) => {
    // await sleep(300)

    console.log("submit values", values)

    try {
      const signResult = await signupMutation(values)
      // const user = await loginMutation(values)
      // props.onSuccess?.(signResult)
      console.log("submit signResult", signResult)
      // TODO: very slow to forward to next page, needs loading
    } catch (error: any) {
      console.log("error.code", error.code)
      console.log("error", error)
      if (error.code === "P2002" && error.meta?.target?.includes("email")) {
        // This error comes from Prisma

        return { email: "This email is already being used" }
      } else {
        return { [FORM_ERROR]: error.toString() }
      }
    }
  }
  // MuiInputBase-input MuiOutlinedInput-input css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
      pt={5}
    >
      <Card sx={{ minWidth: 600, maxWidth: 800 }}>
        <CardContent>
          <Typography variant="h1" color={theme.mode === "dark" ? "text.light" : "text.dark"}>
            Create an Account
          </Typography>

          <FinalForm
            onSubmit={onSubmit}
            validate={(values) => {
              // const errors = {}
              // Fixes build error
              // https://stackoverflow.com/questions/48539216/error-ts2339-property-email-does-not-exist-on-type-object
              const errors: any = {}

              if (!values.email) {
                errors.email = "Email Required"
              }
              if (!values.username) {
                errors.username = <FontAwesomeIcon icon={faXmarkLarge} color={misc.fa_primary} />
                errors.textflag = true
              }
              if (!values.password) {
                errors.password = "Required"
              } else if (!values.password2) {
                errors.password2 = "Required"
              } else if (values.password !== values.password2) {
                errors.password = "Passwords must match"
              } else if (values.password.length < 5) {
                errors.password = "Must be at least 5 characters"
              } else if (values.password2.length < 5) {
                errors.password2 = "Must be at least 5 characters"
              }
              return errors
            }}
            render={({ handleSubmit, form, submitting, submitError, pristine, values }) => (
              <form onSubmit={handleSubmit} className={`banner ${submitError ? "error" : ""}`}>
                {submitError && (
                  <Alert severity="error" className="mt-4 mb-4">
                    {submitError}
                  </Alert>
                )}

                <Stack spacing={4}>
                  <Field name="username" validate={usernameAvailable}>
                    {({ input, meta }) => (
                      <Stack direction="row" spacing={2}>
                        <TextField
                          {...input}
                          label="Username"
                          style={{ maxWidth: 380 }}
                          className="input input-md"
                          type="text"
                          // InputProps={{
                          //   placeholder: "Reenter Password",
                          //   startAdornment: (
                          //     <InputAdornment position="start">
                          //       <FontAwesomeIcon icon={faUnlock} color={"#a0a0ce"} />
                          //     </InputAdornment>
                          //   ),
                          // }}
                          InputProps={{
                            //placeholder: "Username",
                            startAdornment: (
                              <InputAdornment position="start">
                                <FontAwesomeIcon icon={faUser} color={misc.fa_primary} />
                              </InputAdornment>
                            ),
                            // TODO: fixme get rid of grey ex and error under box
                            endAdornment: (
                              <InputAdornment position="end">
                                {meta.validating ? (
                                  <FontAwesomeIcon icon={faGear} spin color={misc.fa_primary} />
                                ) : (
                                  meta.error
                                )}
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Stack>
                    )}
                  </Field>
                  <TextField
                    label="Email Address"
                    name="email"
                    style={{ maxWidth: 380 }}
                    InputProps={{
                      //placeholder: "Email Address",
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon={faEnvelope} color={misc.fa_primary} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    label="Password"
                    name="password"
                    type="password"
                    // required={true}
                    style={{ maxWidth: 380 }}
                    InputProps={{
                      //placeholder: "Password",
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon={faUnlock} color={misc.fa_primary} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    label="Reenter Password"
                    name="password2"
                    style={{ maxWidth: 380 }}
                    type="password"
                    InputProps={{
                      placeholder: "Reenter Password",
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon={faUnlock} color={misc.fa_primary} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Box textAlign="center">
                    <Button
                      variant="contained"
                      type="submit"
                      disabled={submitting}
                      sx={{ width: 200 }}
                    >
                      {/*<Button variant="contained" type="submit" disabled={submitting}>*/}
                      Create Account
                    </Button>
                  </Box>
                </Stack>
              </form>
            )}
          />
        </CardContent>
      </Card>
    </Grid>
  )
}
export default SignupForm
