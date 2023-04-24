import React, { Suspense } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useQuery, useMutation, usePaginatedQuery } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"
import ProfileLayout from "core/layouts/ProfileLayout"
import getProfile from "profiles/queries/getProfile"
import getUserForProfile from "../users/queries/getUserForProfile"
import getSiteForProfile from "../sites/queries/getSiteForProfile"
import Grid from "@mui/material/Unstable_Grid2"
import UserInfo from "../components/user/UserInfo"

// TODO: tik tok video feed
// https://open-api.tiktok.com/oauth/access_token/

// lazy load available templates
const Modern = React.lazy(() => import("profiles/layouts/modern"))
export const ProfileIndex2 = () => {
  return <div>sdf</div>
}

export const ProfileIndex = () => {
  const profileId = useParam("profileId", "string")
  const [user] = useQuery(getUserForProfile, { username: profileId })
  const [profile]: any = useQuery(getProfile, { userId: user.id, current: "yes" })
  const [sites] = useQuery(getSiteForProfile, { userId: user.id })

  console.log("profile", profile)
  console.log("sites", sites)

  // TODO: the layout should be set on dashboard page.
  let userLayout
  // shouldn't be empty, for errors
  if (profile.theme.layout) {
    userLayout = profile.theme.layout
  } else {
    userLayout = "modern"
  }

  let layoutType
  switch (userLayout) {
    case "modern":
      layoutType = <Modern user={user} profile={profile} sites={sites} />
      break
    default:
      layoutType = <Modern user={user} profile={profile} sites={sites} />
  }

  return (
    <>
      <Head>
        <title>{profile.title ? profile.username : profile.username}</title>
      </Head>
      <header>
        <Grid container spacing={2} display="flex" justifyContent="flex-end" alignItems="flex-end">
          <Grid xs={6}>logo</Grid>
          <Grid xs={6}>
            <div className={"user-info-wrapper"}>
              <Suspense>
                <UserInfo />
              </Suspense>
            </div>
          </Grid>
        </Grid>
      </header>
      {layoutType}
    </>
  )
}

const ShowProfileIndexPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfileIndex />
    </Suspense>
  )
}

// ShowProfileIndexPage.authenticate = false
ShowProfileIndexPage.getLayout = (page) => <ProfileLayout>{page}</ProfileLayout>
// TODO: some type of flashing font material ui issue

export default ShowProfileIndexPage

// TODO: proper 404 page if username not found

// TODO: video background, image background, etc

// TODO: checks to make sure this user has premium account advanced features

// TODO: allow user to select to show profile pic, or select from which account

// TODO: allow headers, parralax options, and footers

// TODO: dragon lord gradient color picker for link colors, background colors, etc

// TODO: if logged in, put an edit button top right corner
