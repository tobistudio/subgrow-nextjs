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
  Checkbox
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
  // const [profile] = useQuery(getCurrentProfileUsername, { username: session.username, current: 'yes' })
  const [appList, setAppList] = React.useState(apps);

  console.log("apps", apps);

  // TODO: need to figure out if this user has already added. new/edit takes place on this page

  // const [show_sub, setShowFeedSelected] = React.useState()
  // const [show_sub, setShowFeedSelected] = React.useState()
  const [showFeed, setShowFeed] = React.useState(apps.show_feed)
  const [showSub, setShowSub] = React.useState(apps.show_sub)
  const [showShare, setShowShare] = React.useState(apps.show_share)


  // const handleCheckChange = (e, {field}) => {
  const handleCheckChange = (e) => {

    console.log("field", e.target.checked);
    console.log("value", e.target.value);


    switch (e.target.value) {
      case "show_sub":
        console.log("field", e.target.checked);
        setShowSub(e.target.checked)

        break;
      case "show_feed":

        setShowFeed(e.target.checked)
        break;
      default:
      // code block
    }


    // [name]: event.target.checked
    // set state
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

                          {/*<HiddenTextField*/}
                          {/*  label="Site Name"*/}
                          {/*  name="site_name"*/}
                          {/*  value="facebook"*/}
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

                          <TextField
                            label="API Secret"
                            name="api_secret"
                            style={{ maxWidth: 380 }}
                            size="small"
                          />

                          <FormGroup row>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  // checked={apps.show_sub === 'yes'}
                                  checked={showSub}
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
                                  checked={showFeed}
                                  onChange={handleCheckChange}
                                  value="Show Facebook Feed"
                                  color="primary"
                                />
                              }
                              label="Show Facebook Feed"
                            />

                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={showShare}
                                  onChange={handleCheckChange}
                                  value="show_share"
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
