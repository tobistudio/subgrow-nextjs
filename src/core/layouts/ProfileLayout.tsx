import Head from "next/head"
import React, { FC, Suspense } from "react"
import { BlitzLayout } from "@blitzjs/next"
import Grid from "@mui/material/Unstable_Grid2"
import UserInfo from "../../components/user/UserInfo"
import { Container } from "@mui/material"
// const ProfileHeader = React.lazy(() => import("core/layouts/theme1/headers/ProfileHeader"))

const ProfileLayout: BlitzLayout<{
  title?: string
  type?: string
  rootClass?: string
  children?: React.ReactNode
}> = ({ title, type, rootClass, children }) => {
  return (
    <div className={rootClass}>
      <Head>
        <title>{title || "Sub Grow Profile"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  )
}

export default ProfileLayout
