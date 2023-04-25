import Head from "next/head"
import React from "react"
import { BlitzLayout } from "@blitzjs/next"

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
