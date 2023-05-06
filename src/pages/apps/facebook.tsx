import { Routes } from "@blitzjs/next"
import { useSession } from "@blitzjs/auth"
import { useRouter } from "next/router"
import { useMutation, useQuery } from "@blitzjs/rpc"
import AdminLayout from "core/layouts/AdminLayout"
import { CreateFacebookSchema } from "apps/schemas"
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

const NewFacebookPage = () => {
  const router = useRouter()
  const session = useSession()
  // const session = useAuthorizeIf("ROLE","USer")
  const [createServiceMutation] = useMutation(createService)
  // const [components, setComponents] = useState(["Sample Component"])

  console.log("session", session.role);

  // @ts-ignore
  const [apps] = useQuery(getThisUsersAppBySite, { userId: session.userId, site_name: "facebook" })
  const [show_list, setShowList] = React.useState({ show_share: false, show_feed: false, show_sub: false });
  // const [profile] = useQuery(getCurrentProfileUsername, { username: session.username, current: 'yes' })
  const [appList, setAppList] = React.useState<Array<any>>(apps);

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
                        if (!values.api_key || !values.api_secret || !values.description || !show_list) {
                          alert("Input is required");
                          return;
                        }
                        const service = await createServiceMutation({ ...values, ...show_list, userId: session.userId, name: session.username, site_name: "facebook", });
                        setAppList([...appList, service]);
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

                          {/*<HiddenTextField*/}
                          {/*  label="Site Name"*/}
                          {/*  name="site_name"*/}
                          {/*  value="facebook"*/}
                          {/*/>*/}

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
                              label="Show Facebook Feed"
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

                          {/*<label>Show Facebook Feed</label>*/}
                          {/*<ToggleButton*/}
                          {/*  aria-label="Show Facebook Feed"*/}
                          {/*  value="check"*/}
                          {/*  size="small"*/}
                          {/*  name="show_sub"*/}
                          {/*  selected={apps.show_sub === 'yes'}*/}
                          {/*  // onClick*/}
                          {/*  // selected={showFeedSelected}*/}

                          {/*  // onChange={() => {*/}
                          {/*  //   setShowFeedSelected(!showFeedSelected)*/}
                          {/*  // }}*/}
                          {/*>*/}
                          {/*  <CheckIcon />*/}
                          {/*</ToggleButton>*/}


                          {/*<ToggleButton*/}
                          {/*  aria-label="Show Share Buttons"*/}
                          {/*  value="check"*/}
                          {/*  size="small"*/}
                          {/*  // selected={selected}*/}
                          {/*  // onChange={() => {*/}
                          {/*  //   setSelected(!selected)*/}
                          {/*  // }}*/}
                          {/*>*/}
                          {/*  <CheckIcon />*/}
                          {/*</ToggleButton>*/}

                          {/*<ToggleButton*/}
                          {/*  aria-label="Show Subscriber Count"*/}
                          {/*  value="check"*/}
                          {/*  size="small"*/}
                          {/*  // selected={selected}*/}
                          {/*  // onChange={() => {*/}
                          {/*  //   setSelected(!selected)*/}
                          {/*  // }}*/}
                          {/*>*/}
                          {/*  <CheckIcon />*/}
                          {/*</ToggleButton>*/}


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
                appList &&
                appList.map((ele, id) =>
                (
                  <Card key={id} variant="outlined" style={{ width: '100%', maxWidth: 600, marginTop: 20 }}>
                    <CardHeader
                      title="Facebook sub API"
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

console.log("plansConfig.level3.role", plansConfig.level3.role);
// if logged in, send to pricing tables page for upgrade /pricing page
// if not logged in, login "/auth/login"
NewFacebookPage.authenticate = { role: plansConfig.level3.role, redirectTo: "/account/upgrade" }

export default NewFacebookPage
