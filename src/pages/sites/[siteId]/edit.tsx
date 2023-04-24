// @ts-ignore
import React, { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import { useRouter } from "next/router"
import { useQuery, useMutation } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"
import AdminLayout from "core/layouts/AdminLayout"
import getSite from "sites/queries/getSite"
import updateSite from "sites/mutations/updateSite"
import { Field, Form as FinalForm } from "react-final-form"
import { FORM_ERROR } from "final-form"

import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  Container,
  Box,
  Stack,
  CardHeader,
  Switch,
} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { TextField } from "mui-rff"
import InputAdornment from "@mui/material/InputAdornment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmarkLarge } from "@fortawesome/pro-regular-svg-icons"
import { fonts, misc } from "../../../configs/colors/default"
import {
  faEnvelope,
  faFaceAnguished,
  faGear,
  faUnlock,
  faUser,
} from "@fortawesome/pro-duotone-svg-icons"
import BadWords from "../../../../data/badwords.json"
import Alert from "@mui/material/Alert"

export const EditSite = () => {
  const router = useRouter()
  const siteId = useParam("siteId", "string")
  const [site, { setQueryData }] = useQuery(
    getSite,
    { id: siteId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateSiteMutation] = useMutation(updateSite)

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
  const validateUrl = simpleMemoize(async (value) => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    // No lookups unless 4 characters or more
    if (value.length < 4) {
      return ""
    }
    await sleep(100)
    // TODO: need to check value to see if bad word shows up "badbad" should flag, if "bad" is in badwords.json
    if (~BadWords.indexOf(value && value.toLowerCase())) {
      console.log("BadWords")
      //return "bad"
      return <FontAwesomeIcon icon={faFaceAnguished} size="xl" style={{ color: "#c90000" }} />
    }

    return ""

    // return true;    // wont work
  })

  return (
    <Box>
      <Grid
        container
        // spacing={{ xs: 2, md: 3, lg: 6 }}
      >
        <Card variant="outlined">
          <CardHeader title={site.title} />
          <CardContent>
            <FinalForm
              submitText="Update Site"
              // TODO use a zod schema for form validation
              //  - Tip: extract mutation's schema into a shared `validations.ts` file and
              //         then import and use it here
              //schema={UpdateSite}
              initialValues={site}
              onSubmit={async (values: any) => {
                try {
                  // const updated = await updateSiteMutation({
                  //   id: site.id,
                  //   ...values,
                  // })
                  console.log("values", values)
                  // const updated = await updateSiteMutation(...values)
                  const updated = await updateSiteMutation(values)

                  await setQueryData(updated)
                  await router.push(Routes.ShowSitePage({ siteId: updated.id }))
                } catch (error: any) {
                  console.error(error)
                  return {
                    [FORM_ERROR]: error.toString(),
                  }
                }
              }}
              render={({ handleSubmit, form, submitting, submitError, pristine, values }) => (
                <form onSubmit={handleSubmit} className={`banner ${submitError ? "error" : ""}`}>
                  {submitError && (
                    <Alert severity="error" className="mt-4 mb-4">
                      {submitError}
                    </Alert>
                  )}

                  <Stack spacing={4}>
                    <TextField
                      label="Link Title"
                      name="title"
                      type="text"
                      style={{ maxWidth: 380 }}
                    />

                    <Field name="url" validate={validateUrl}>
                      {({ input, meta }) => (
                        <Stack direction="row" spacing={2}>
                          <TextField
                            label="URL"
                            name="url"
                            type="text"
                            style={{ maxWidth: 380 }}
                            className="input input-md"
                            size="small"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  {meta.error !== "bad" && meta.error && meta.touched && (
                                    <FontAwesomeIcon icon={faXmarkLarge} color={fonts["alert"]} />
                                  )}
                                  {meta.error === "bad" && meta.error && meta.touched && (
                                    <FontAwesomeIcon
                                      icon={faFaceAnguished}
                                      color={fonts["alert"]}
                                    />
                                    // <FontAwesomeIcon icon={faXmarkLarge} color={"#e10000"} />
                                  )}
                                  {submitting && (
                                    <FontAwesomeIcon icon={faGear} spin color={fonts["gear"]} />
                                  )}
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Stack>
                      )}
                    </Field>

                    <TextField
                      label="Link Description"
                      name="description"
                      type="text"
                      style={{ maxWidth: 380 }}
                      helperText="An optional description for this link"
                    />

                    <Switch
                      // checked={!!link.status}
                      name="status"
                      checked={site.status === "active"}
                      //checked={checked}
                      //onChange={handleActiveChange(link.id)}
                      inputProps={{ "aria-label": "controlled" }}
                    />

                    <TextField
                      label="Order"
                      name="order"
                      type="number"
                      style={{ maxWidth: 380 }}
                      helperText="An optional description for this link"
                    />

                    <Box textAlign="center">
                      <Button
                        variant="contained"
                        type="submit"
                        disabled={submitting}
                        sx={{ width: 200 }}
                      >
                        {/*<Button variant="contained" type="submit" disabled={submitting}>*/}
                        Update Link
                      </Button>
                    </Box>
                  </Stack>
                </form>
              )}
            ></FinalForm>
            <pre>{JSON.stringify(site, null, 2)}</pre>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  )
}

const EditSitePage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditSite />
      </Suspense>
    </div>
  )
}

EditSitePage.authenticate = true
EditSitePage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>

export default EditSitePage
