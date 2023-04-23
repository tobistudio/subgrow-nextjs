import Head from "next/head"
import React, { FC } from "react"
import { BlitzLayout } from "@blitzjs/next"
const ProfileHeader = React.lazy(() => import("core/layouts/theme1/headers/ProfileHeader"))

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
      <ProfileHeader title="My Profile" type="profile">
        a
      </ProfileHeader>
      {children}
    </div>
  )
}

export default ProfileLayout
