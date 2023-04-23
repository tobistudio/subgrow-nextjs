import Head from "next/head"
import React, { FC, Suspense } from "react"
import { BlitzLayout } from "@blitzjs/next"
import Grid from "@mui/material/Unstable_Grid2"
import UserInfo from "../../../../components/user/UserInfo"
import Search from "../../../../components/search/Search"
import S from "../../../../components/search/S"
import UserDropdown from "components/template/UserDropdown"
import LanguageSelector from "components/template/LanguageSelector"
import Notification from "components/template/Notification"
import SideNavToggle from "components/template/SideNavToggle"
import MobileNav from "components/template/MobileNav"
import SideNav from "components/template/SideNav"
import Logo from "./Logo"
const ProfileDesignPanel = React.lazy(
  () => import("components/template/SidePanel/ProfileDesignPanel")
)
const LoadingSvg = React.lazy(() => import("assets/svg/LoadingSvg"))

import { Box, Container, Stack } from "@mui/material"
const ProfileHeader: BlitzLayout<{ title?: string; type?: string }> = ({ title, type }) => {
  const myLoader = ({ src, width, quality }) => {
    return `https://place-hold.it/1x1/666/fff/000.gif`
  }

  return (
    <header className="header-wrapper">
      <Suspense>
        <Grid
          container
          // justify="flex-end"
          // alignItems="center"
          justifyContent="flex-end"
          spacing={2}
          my={2}
          mr={3}
        >
          <UserInfo />
        </Grid>
      </Suspense>
    </header>
  )
}

export default ProfileHeader
