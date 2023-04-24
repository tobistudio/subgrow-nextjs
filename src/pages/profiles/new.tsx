// TODO: will never be used, unless we allow multiple profiles
//  edit page used instead, since system makes a profile on signup
// src/pages/profiles/[profileId]/edit.tsx
import { Routes } from "@blitzjs/next"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"
// import { Card, Button, Grid } from 'components/ui'
import {
  Box,
  Typography,
  Container,
  Card,
  Button,
  Grid,
  CardHeader,
  CardContent,
  CardActions,
} from "@mui/material"
import AdminLayout from "core/layouts/AdminLayout"
import createProfile from "profiles/mutations/createProfile"
import { ProfileForm, FORM_ERROR } from "profiles/components/ProfileForm"

const NewProfilePage = () => {
  const router = useRouter()
  const [createProfileMutation] = useMutation(createProfile)

  return (
    <AdminLayout title="Create New Profile">
      <Box>
        <Grid container spacing={{ xs: 2, md: 3, lg: 6 }}>
          <Grid item xs={8}>
            <Card variant="outlined">
              <CardHeader title="Profile" />

              <CardContent>
                <ProfileForm
                  submitText="Create Profile"
                  // TODO use a zod schema for form validation
                  //  - Tip: extract mutation's schema into a shared `validations.ts` file and
                  //         then import and use it here
                  //schema={CreateProfile}
                  // initialValues={{}}
                  onSubmit={async (values) => {
                    try {
                      console.log("values", values)

                      const profile = await createProfileMutation(values)

                      // descriptionColor

                      // {
                      //   "layout":"modern",
                      //   "titleStyle":"h6"
                      //   "titleColor":"#000000"
                      //   "descriptionStyle":"body1",
                      //   "descriptionColor":"#000000",
                      //   "linkType": "button",
                      //   "linkStyle": "link-modern",
                      //   "linkSpacing": 20,
                      //   "linkAlign": "center",
                      //   "bgColor": "#000000",
                      //   "bgCardColor": "#021931",
                      //   "linkWidth": "200"
                      //   "fontFamily": "\"Comic Sans MS\", \"Comic Sans\", cursive",
                      // }

                      // await router.push(Routes.ShowProfilePage({ profileId: profile.id }))
                      //await router.push(`/${profile.username}`)
                    } catch (error: any) {
                      console.error(error)
                      return {
                        [FORM_ERROR]: error.toString(),
                      }
                    }
                  }}
                />
              </CardContent>

              {/*<CardActions>*/}
              {/*  <Link href={Routes.ProfilesPage()}>Profiles</Link>*/}
              {/*</CardActions>*/}
            </Card>
          </Grid>

          <Grid item xs={4} pl={5}>
            <h3>Theme Examples</h3>

            <p>Modern Default Theme</p>
            <textarea
              defaultValue={`{
                "layout":"modern",
                "titleStyle":"h6",
                "titleColor":"#000000",
                "descriptionStyle":"body1",
                "descriptionColor":"#000000",
                "linkType": "button",
                "linkStyle": "link-modern",
                "linkSpacing": 20,
                "linkAlign": "center",
                "bgColor": "#000000",
                "bgCardColor": "#021931",
                "linkWidth": "200",
                "fontFamily": ""
              }`}
            ></textarea>

            <p>Light Theme</p>
            <textarea
              defaultValue={`{
                "layout":"modern",
                "titleStyle":"h6"
                "titleColor":"#000000"
                "descriptionStyle":"body1",
                "descriptionColor":"#000000",
                "linkType": "button",
                "linkStyle": "link-modern",
                "linkSpacing": 20,
                "linkAlign": "center",
                "bgColor": "#ffffff",
                "bgCardColor": "#021931",
                "linkWidth": "200"
                "fontFamily": "\\"Comic Sans MS\\", \\"Comic Sans\\", cursive",
              }`}
            ></textarea>
          </Grid>
        </Grid>
      </Box>
    </AdminLayout>
  )
}

NewProfilePage.authenticate = true

export default NewProfilePage

// user must be logged in and with role "ADMIN" or "USER"
// Page.authenticate = { role: "ADMIN" }
// or set role as a list, where user must be logged in and with role "ADMIN" or "USER"
// Page.authenticate = { role: ["ADMIN", "USER"] }

// https://blitzjs.com/docs/authorization
// Redirecting Logged In Users
// For pages that are only for logged out users, such as login and signup pages, set Page.redirectAuthenticatedTo = '/' to automatically redirect logged in users to another page.
// using full path
// Page.redirectAuthenticatedTo = "/"
// // using route manifest
// Page.redirectAuthenticatedTo = Routes.Home()
// // using function
// Page.redirectAuthenticatedTo = ({ session }) =>
//   session.role === "admin" ? "/admin" : Routes.Home()
