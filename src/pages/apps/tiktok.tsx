import { Routes } from "@blitzjs/next"
import { useSession } from "@blitzjs/auth"
import { useRouter } from "next/router"
import { useMutation, useQuery } from "@blitzjs/rpc"
import AdminLayout from "core/layouts/AdminLayout"
import { CreateTiktokSchema } from "apps/schemas"
import createService from "apps/mutations/createService"
import getThisUsersAppBySite from "apps/queries/getThisUsersAppBySite"
import { FORM_ERROR } from "apps/components/ServiceForm"
import React, { Suspense, useState } from "react"
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Autocomplete,
  Alert,
  ToggleButton,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Typography
} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { Form as FinalForm, Field } from "react-final-form"
import { TextField } from "mui-rff"
import Head from "next/head"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons"

import { plansConfig } from "../../configs/plans.config";
import CheckIcon from "@mui/icons-material/Check";
import { Apps } from "../../../db/generated/prisma-client-js"

const NewTikTokPage = () => {
  const router = useRouter()
  const session = useSession()
  // const session = useAuthorizeIf("ROLE","USer")
  const [createServiceMutation] = useMutation(createService)
  // const [components, setComponents] = useState(["Sample Component"])

  console.log("session", session.role);

  // @ts-ignore
  const [apps]: Apps[] = useQuery(getThisUsersAppBySite, { userId: session.userId, site_name: "tiktok" })
  const [show_list, setShowList] = React.useState({ show_share: false, show_feed: false, show_sub: false });
  // const [profile] = useQuery(getCurrentProfileUsername, { username: session.username, current: 'yes' })
  const [appList, setAppList] = React.useState<Apps | Apps[]>(apps);

  console.log("appss", apps);

  // TODO: need to figure out if this user has already added. new/edit takes place on this page


  const handleCheckChange = (e: any) => {
    console.log(show_list);

    setShowList({ ...show_list, [e.target.value]: e.target.checked })
  }

  const handleAddService = (app) => {

    console.log("app", app);

    // setComponents([...components, "Sample Component " + service_site])
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
                  title="Add Tik Tok"
                  subheader="Add api details to use premium Tik Tok features"
                />
                <CardContent>
                  <FinalForm
                    submitText="Tik Tok"
                    schema={CreateTiktokSchema}
                    initialValues={{}}
                    onSubmit={async (values: any) => {
                      try {
                        if (!values.api_key || !values.api_secret || !values.description || !show_list) {
                          alert("Input is required");
                          return;
                        }
                        const service = await createServiceMutation({ ...values, ...show_list, userId: session.userId, name: session.username, site_name: "tiktok", });
                        Array.isArray(appList) ? setAppList([...appList, service]) : setAppList([appList, service]);
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

                          <TextField
                            label="API Key"
                            name="api_key"
                            style={{ maxWidth: 380 }}
                            size="small"
                          />

                          <TextField
                            label="API Secret"
                            name="api_secret"
                            style={{ maxWidth: 380 }}
                            size="small"
                          />

                          <TextField
                            label="Description"
                            name="description"
                            style={{ maxWidth: 380 }}
                            size="small"
                          />

                          <FormGroup row>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  // checked={apps.show_sub === 'yes'}
                                  checked={show_list.show_sub}
                                  onChange={handleCheckChange}
                                  name="show_sub"
                                  value="show_sub"
                                />
                              }
                              label="Show Subscribers"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={show_list.show_feed}
                                  onChange={handleCheckChange}
                                  value="show_feed"
                                  name="show_feed"
                                  color="primary"
                                />
                              }
                              label="Show Tiktok Feed"
                            />

                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={show_list.show_share}
                                  onChange={handleCheckChange}
                                  value="show_share"
                                  name="show_share"
                                  color="primary"
                                />
                              }
                              label="Show Share Buttons"
                            />
                          </FormGroup>

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

              {
                (Array.isArray(appList) ? appList : [appList]).map((ele, id) =>
                (
                  <Card key={id} variant="outlined" style={{ width: '100%', maxWidth: 600, marginTop: 20 }}>
                    <CardHeader
                      title="Tiktok sub API"
                    />
                    <CardContent>
                      <Box >api_key : {ele.api_key}</Box>
                      <Box >api_secret : {ele.api_secret}</Box>
                      <Box >description: {ele.description}</Box>
                      <Box >show feed : {ele.show_feed ? "true" : "false"} show subscription : {ele.show_sub ? "true" : "false"} show share Buttons : {ele.show_share ? "true" : "false"}</Box>
                    </CardContent>
                  </Card>
                )
                )
              }

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
                      startIcon={<FontAwesomeIcon icon={faTiktok} size="lg" />}
                      onClick={() => {
                        handleAddService("tiktok")
                      }}
                    >
                      <span>Add Tik Tok</span>
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

// level 3
NewTikTokPage.authenticate = { role: plansConfig.level3.role, redirectTo: "/account/upgrade" }

export default NewTikTokPage
