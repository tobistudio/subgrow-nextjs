import { Routes } from "@blitzjs/next"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"
import AdminLayout from "core/layouts/AdminLayout"
import { CreateServiceSchema } from "apps/schemas"
import createService from "apps/mutations/createService"
import { ServiceForm, FORM_ERROR } from "apps/components/ServiceForm"
import React, { Suspense, useState } from "react"
import {
  Container,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Autocomplete,
  Alert,
} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { Form as FinalForm, Field } from "react-final-form"
import { TextField } from "mui-rff"
import Head from "next/head"
import { DashboardBox } from "../dashboard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons"
import AddLinkCard from "../../components/dashboard/AddLinkCard"

const NewServicePage = () => {
  const router = useRouter()
  const [createServiceMutation] = useMutation(createService)
  const [components, setComponents] = useState(["Sample Component"])

  const handleAddService = (service_site) => {
    setComponents([...components, "Sample Component " + service_site])
  }

  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ]

  return (
    <AdminLayout>
      <Head>
        <title>Social Media Services</title>
      </Head>

      <Suspense fallback={"loading..."}>
        <Box>
          <Grid container spacing={{ xs: 2, md: 3, lg: 6 }}>
            <Grid xs={8}>
              <Card variant="outlined">
                <CardHeader
                  title="Add Social Media Site"
                  subheader="Add a social media site like Facebook to unlock advanced features."
                />
                <CardContent>
                  <FinalForm
                    submitText="Update Site"
                    schema={CreateServiceSchema}
                    // initialValues={{}}
                    onSubmit={async (values) => {
                      try {
                        const service = await createServiceMutation(values)
                        await router.push(Routes.ShowServicePage({ appId: service.id }))
                      } catch (error: any) {
                        console.error(error)
                        return {
                          [FORM_ERROR]: error.toString(),
                        }
                      }
                    }}
                    render={({ handleSubmit, form, submitting, submitError, pristine, values }) => (
                      <form
                        onSubmit={handleSubmit}
                        className={`banner ${submitError ? "error" : ""}`}
                      >
                        {submitError && (
                          <Alert severity="error" className="mt-4 mb-4">
                            {submitError}
                          </Alert>
                        )}

                        <Stack spacing={4}>
                          {/*// TODO: FIXME auto complete not working right, perhaps because of fina form wrapper*/}
                          {/*<Autocomplete*/}
                          {/*  disablePortal*/}
                          {/*  //name="name"*/}
                          {/*  id="combo-box-demo"*/}
                          {/*  options={top100Films}*/}
                          {/*  sx={{ width: 300 }}*/}
                          {/*  // renderInput={(params) => <Field {...params} label="Movie" />}*/}
                          {/*  renderInput={(params) => <TextField {...params} label="Movie" />}*/}
                          {/*/>*/}

                          {/*<TextField*/}
                          {/*  label="Site Name"*/}
                          {/*  name="name"*/}
                          {/*  style={{maxWidth: 380}}*/}
                          {/*  size="small"*/}
                          {/*/>*/}

                          <TextField
                            label="API Key"
                            name="api_secret"
                            style={{ maxWidth: 380 }}
                            size="small"
                          />

                          <TextField
                            label="API Secret"
                            name="api_secret"
                            style={{ maxWidth: 380 }}
                            size="small"
                          />

                          <Box textAlign="center">
                            <Button
                              variant="contained"
                              type="submit"
                              disabled={submitting}
                              sx={{ width: 200 }}
                            >
                              {/*<Button variant="contained" type="submit" disabled={submitting}>*/}
                              Add
                            </Button>
                          </Box>
                        </Stack>
                      </form>
                    )}
                  />
                </CardContent>
              </Card>

              {components.map((link, i) => (
                <AddLinkCard key={i} link={link} />
              ))}
            </Grid>

            <Grid xs={4} pl={5}>
              <Card variant="outlined">
                <CardHeader title="Available Services" />

                <CardContent>
                  <p>
                    {" "}
                    icons of social media services. clicking on them will make an add box appear on
                    the right
                  </p>

                  <Box textAlign="center">
                    <Button
                      variant="outlined"
                      //style={{ justifyContent: "flex-start" }}
                      startIcon={<FontAwesomeIcon icon={faFacebook} size="lg" />}
                      //onClick={handleAddService('facebook')}
                      onClick={() => {
                        handleAddService("facebook")
                      }}
                    >
                      <span>Add Facebook</span>
                    </Button>
                  </Box>
                </CardContent>
              </Card>

              {/*<FacebookProvider appId="123456789">*/}
              {/*  <Comments href="https://www.facebook.com/amir.meshkin" />*/}
              {/*</FacebookProvider>*/}
              {/*Page is creating errors*/}
              {/*<FacebookProvider appId="123456789">*/}
              {/*  <Page href="https://www.facebook.com" tabs="timeline" />*/}
              {/*</FacebookProvider>*/}
            </Grid>
          </Grid>
        </Box>
      </Suspense>
    </AdminLayout>
  )
}
NewServicePage.authenticate = true

export default NewServicePage
