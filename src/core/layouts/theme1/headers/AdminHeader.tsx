import React, { FC, Suspense } from "react"
import { BlitzLayout } from "@blitzjs/next"
import Grid from "@mui/material/Unstable_Grid2"
import UserInfo from "../../../../components/user/UserInfo"
import Logo from "./Logo"

import SidePanel from "components/template/SidePanel"
import UserDropdown from "components/template/UserDropdown"
import LanguageSelector from "components/template/LanguageSelector"
import Notification from "components/template/Notification"
import MobileNav from "components/template/MobileNav"
import Search from "components/template/Search"
import StackedSideNav from "components/template/StackedSideNav"

const AdminHeader: BlitzLayout<{ title?: string; type?: string }> = ({ title, type, children }) => {
  const myLoader = ({ src, width, quality }) => {
    return `https://place-hold.it/1x1/666/fff/000.gif`
  }

  return (
    <header className="header-wrapper">
      <Grid container spacing={2} className="justify-content-xs-center" sx={{ flexGrow: 1 }} my={1}>
        <Grid xs={12} sm={6} display="flex" justifyContent="left" alignItems="center">
          <Logo imageSource="https://place-hold.it/100x30.jpg/666/fff/000">{children}</Logo>
        </Grid>
        <Grid xs={12} sm={6} display="flex" justifyContent="right" alignItems="center">
          <Suspense>
            <UserInfo />
            <UserDropdown />
          </Suspense>
        </Grid>
      </Grid>
    </header>
  )
}

export default AdminHeader
