import React, { Suspense } from "react"
import Head from "next/head"
import { useQuery } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"
import ProfileLayout from "core/layouts/ProfileLayout"
import { useSession } from "@blitzjs/auth"
import { useRouter } from "next/router";
import getProfile from "profiles/queries/getProfile"
import getUserForProfile from "../users/queries/getUserForProfile"
// import getSiteForProfile from "../sites/queries/getSiteForProfile"
import getSiteForProfileByStatus from "../sites/queries/getSiteForProfileByStatus"
import { modern1 } from "../../data/userthemes/modern1"
// import userTheme from '../../data/userthemes/babyblue.json'
// import Grid from "@mui/material/Unstable_Grid2"
// import UserInfo from "../components/user/UserInfo"
// import SidePanel from 'components/template/SidePanel'

// TODO: tik tok video feed
// https://open-api.tiktok.com/oauth/access_token/

// lazy load available templates
const Modern = React.lazy(() => import("profiles/layouts/modern"))
export const ProfileIndex2 = () => {
  return <div>sdf</div>
}

const styles = (theme) => ({
  addButtonContainer: {
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
})

export const ProfileIndex = () => {

  const profileId = useParam("profileId", "string")
  const router = useRouter()
  const session = useSession()

  const [profileUser] = useQuery(getUserForProfile, { username: profileId })
  const [profile]: any = useQuery(getProfile, { userId: Number(localStorage.id ? localStorage.id : session.userId), current: "yes" })

  // TODO: dawn bl
  let bl = Number(localStorage.id ? localStorage.id : session.userId)

  // React.useEffect(() => {
  //   if (!user.id) {
  //     router.push('/login');
  //   }
  // }, [])

  const tester_profile = {
    theme: modern1,
    title: "tester",
    description: "tester",
    template: "custom"
  }

  // console.log("bl", bl);
  /*
  NotFoundError {name: 'NotFoundError', message: 'This could not be found', code: undefined, statusCode: 404, meta: undefined, …}
code
:
undefined
message
:
"This could not be found"
meta
:
undefined
name
:
"NotFoundError"
statusCode
:
404
url
:
undefined
   */
  // TODO: dawn profile comes back blank
  // console.log("profile", profile);
  // TODO: need to figure out how to exit here, if this profile doesn't exist
  // TODO: forward to a /claim-username page
  // TODO: dawn we need to pull data for this PROFILE, not user!!!!
  //const [sites] = useQuery(getSiteForProfileByStatus, { userId: (profileId === 'tester' && !user.id) ? 0 : user.id, status: "active" })


  // const [sites] = useQuery(getSiteForProfileByStatus, { userId: (profileId === 'tester' && !profileUser.id) ? 0 : profileUser.id, status: "active" })
  const [sites] = useQuery(getSiteForProfileByStatus, { userId: profileUser.id, status: "active" })


  // TODO: the layout should be set on dashboard page.
  // remove "layout", everything should use modern
  // const layoutType = <Modern user={user} profile={(profileId === 'tester' && !profile.theme) ? tester_profile : profile} sites={sites} />
  // const layoutType = <Modern profile={(profileId === 'tester' && !profile.theme) ? tester_profile : profile} sites={sites} />
  const layoutType = <Modern profile={profile} sites={sites} />


  // let userLayout
  // // shouldn't be empty, for errors
  // if (profile?.theme?.layout) {
  //   userLayout = profile.theme.layout
  // } else {
  //   userLayout = "modern"
  // }
  //
  // let layoutType
  // switch (userLayout) {
  //   case "modern":
  //     layoutType = <Modern user={user} profile={profile} sites={sites} />
  //     break
  //   default:
  //     layoutType = <Modern user={user} profile={profile} sites={sites} />
  // }

  // @ts-ignore
  return (
    <>
      <Head>
        <title>{profile.title ? profile.username : profile.username}</title>
      </Head>

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
