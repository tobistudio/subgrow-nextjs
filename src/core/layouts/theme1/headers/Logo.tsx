import React, { FC, Suspense } from "react"
import { BlitzLayout } from "@blitzjs/next"
import Image from "next/image"

// const DashboardsPage = () => {
// const Logo: BlitzLayout<{ imageSource?: any }> = ({ imageSource, children }) => {
const Logo: BlitzLayout<{ imageSource?: any }> = (imageSource) => {
  const myLoader = ({ src, width, quality }) => {
    return `https://place-hold.it/1x1/666/fff/000.gif`
  }

  const temp = "https://place-hold.it/100x30/666/fff/000.gif"

  return (
    <div className="side-nav-header">
      <div className="logo px-6">
        <Image
          loader={myLoader}
          src={temp}
          alt="Sub Grow"
          width={200}
          height={25}
          className="logo-image"
        />
      </div>
    </div>
  )
}

export default Logo
