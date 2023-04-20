import React, { lazy, Suspense, useEffect } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useQuery, useMutation, usePaginatedQuery } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"
// import ShareBtn from 'react-share-button';
import AdminLayout from "core/layouts/AdminLayout"
import getProfile from "profiles/queries/getProfile"
import deleteProfile from "profiles/mutations/deleteProfile"
import { Button } from "@mui/material"
import ProfileLayout from "../core/layouts/ProfileLayout"

import { FacebookProvider, Like, ShareButton, Comments } from "react-facebook"
import getCurrentUser from "../users/queries/getCurrentUser"
// import getUser from "../users/queries/getUser"
import getUserForProfile from "../users/queries/getUserForProfile"
import getSiteForProfile from "../sites/queries/getSiteForProfile"
import getSites from "../sites/queries/getSites"

// TODO: tik tok video feed
// https://open-api.tiktok.com/oauth/access_token/

// lazy load available templates
const Modern = React.lazy(() => import("profiles/layouts/modern"))

export const ProfileIndex = () => {
  const router = useRouter()
  const profileId = useParam("profileId", "string")
  console.log("profileId", profileId)
  const [user] = useQuery(getUserForProfile, { username: profileId })
  const [profile]: any = useQuery(getProfile, { userId: user.id, current: "yes" })
  const [sites] = useQuery(getSiteForProfile, { userId: user.id })

  // TODO: proper 404 page if username not found

  // TODO: video background, image background, etc

  // TODO: checks to make sure this user has premium account advanced features

  // TODO: allow user to select to show profile pic, or select from which account

  // TODO: allow headers, parralax options, and footers

  // TODO: dragon lord gradient color picker for link colors, background colors, etc

  // TODO: if logged in, put an edit button top right corner

  /*

 */
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
      // layoutType = lazy(() => import('profiles/layouts/modern'))
      layoutType = <Modern user={user} profile={profile} sites={sites} />
      //layoutType = <div>test layout</div>
      break
    case "y":
      // code block
      break
    default:
      layoutType = <Modern user={user} profile={profile} sites={sites} />
  }

  return (
    <>
      <Head>
        <title>{profile.title ? profile.username : profile.username}</title>
      </Head>

      <div>
        {layoutType}

        {/*<FacebookProvider appId="100091929967851" target="_top">*/}
        {/*  <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />*/}
        {/*</FacebookProvider>*/}

        {/*<ShareBtn*/}
        {/*  url={`https://facebook.com/${profile.username}`}*/}
        {/*  text={"share"}*/}
        {/*  className='ib'*/}
        {/*  displayText='Share'*/}
        {/*/>*/}

        {/*<FacebookProvider appId="123456789">*/}
        {/*  <Comments href="http://www.facebook.com" />*/}
        {/*</FacebookProvider>*/}
        <pre>{JSON.stringify(user, null, 2)}</pre>

        <h2>profile</h2>
        <pre>{JSON.stringify(profile, null, 2)}</pre>

        <h2>site</h2>
        <pre>{JSON.stringify(sites, null, 2)}</pre>
      </div>
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

ShowProfileIndexPage.authenticate = false
ShowProfileIndexPage.getLayout = (page) => <ProfileLayout>{page}</ProfileLayout>

export default ShowProfileIndexPage
