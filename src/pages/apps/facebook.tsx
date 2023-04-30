import { Routes } from "@blitzjs/next"
import Link from "next/link"
import { useSession } from "@blitzjs/auth"
import { useRouter } from "next/router"
import {useMutation, useQuery} from "@blitzjs/rpc"
import AdminLayout from "core/layouts/AdminLayout"
import { CreateFacebookSchema } from "apps/schemas"
import createService from "apps/mutations/createService"
import getThisUsersApps from "apps/queries/getThisUsersApps"
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
// import {useSession} from "@blitzjs/auth";
import {useAuthorizeIf} from "@blitzjs/auth";
import {plansConfig} from "../../configs/plans.config";
import {faRightToBracket} from "@fortawesome/pro-duotone-svg-icons";
import {misc} from "../../configs/colors/default";
import PreviewLinkButton from "../../components/dashboard/PreviewLinkButton";
import getSiteForProfile from "../../sites/queries/getSiteForProfile";

const NewFacebookPage = () => {
  const router = useRouter()
  const session = useSession()
  // const session = useAuthorizeIf("ROLE","USer")
  const [createServiceMutation] = useMutation(createService)
  const [components, setComponents] = useState(["Sample Component"])


  console.log("session",session.role);

  // @ts-ignore
  const [apps] = useQuery(getThisUsersApps, { userId: session.userId, site_name: "facebook" })
  // const [profile] = useQuery(getCurrentProfileUsername, { username: session.username, current: 'yes' })
  const [appList, setAppList] = React.useState(apps);

  console.log("apps",apps);

  // TODO: need to figure out if this user has already added. new/edit takes place on this page



  const handleAddService = (service_site) => {
    setComponents([...components, "Sample Component " + service_site])
  }

  return (
    <AdminLayout>
      <Head>
        <title>Social Media Services</title>
      </Head>

      <Suspense fallback={"loading..."}>
        <Box>
          <Grid container spacing={{ xs: 2, md: 3, lg: 6 }}>
            <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
              <Card variant="outlined">
                <CardHeader
                  title="Add Facebook"
                  subheader="Add api details to use premium facebook features"
                />
                <CardContent>
                  <FinalForm
                    submitText="Update Site"
                    schema={CreateFacebookSchema}
                    initialValues={{}}
                    onSubmit={async (values: any) => {
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

              {/*{components.map((link, i) => (*/}
              {/*  <Box textAlign="center" key={i}>*/}
              {/*    <Button*/}
              {/*      variant="contained"*/}
              {/*      type="submit"*/}

              {/*      sx={{ width: 200 }}*/}
              {/*    >*/}
              {/*      ddd*/}
              {/*    </Button>*/}
              {/*  </Box>*/}
              {/*))}*/}
            </Grid>

            <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
              <Card variant="outlined">
                <CardHeader title="Available Services" />

                <CardContent>

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

                    {/*{*/}
                    {/*  appList.map((ele, id) => <PreviewLinkButton key={id} ele={ele} />)*/}
                    {/*}*/}



                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Suspense>
    </AdminLayout>
  )
}

// if logged in, send to pricing tables page for upgrade /pricing page
// if not logged in, login "/auth/login"
NewFacebookPage.authenticate = { role: plansConfig.level3.role, redirectTo: "/account/upgrade" }



// level 3 package ONLY
// /Users/amirmeshkin/_code/_business/blitz-app/src/configs/plans.config.tsx




// /apps/facebook



// NewFacebookPage.authenticate = true
//
// // user must be logged in
// Page.authenticate = true
// // user must be logged in and redirects otherwise
// Page.authenticate = { redirectTo: "/login" }

// user must be logged in with role "ADMIN" and redirects otherwise
// Page.authenticate = { role: "ADMIN", redirectTo: "/login" }


export default NewFacebookPage
