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
const SidePanel = React.lazy(() => import("components/template/SidePanel"))
const LoadingSvg = React.lazy(() => import("assets/svg/LoadingSvg"))

const AdminHeader: BlitzLayout<{ title?: string; type?: string }> = ({ title, type, children }) => {
  const myLoader = ({ src, width, quality }) => {
    return `https://place-hold.it/1x1/666/fff/000.gif`
  }

  return (
    <header className="header-wrapper">
      <Grid container spacing={2}>
        <Grid xs={6}>
          logo
          {/*<MobileNav />*/}
          {/*<SideNavToggle />*/}
        </Grid>
        <Grid xs={6}>
          <div className={"user-info-wrapper"}>
            <Suspense fallback={<LoadingSvg />}>
              <UserInfo />
              {/*<LanguageSelector />*/}
              {/*<Notification />*/}
              <SidePanel />
              {/*<UserDropdown hoverable={false} /> TODO: uses elstar auth*/}
            </Suspense>
          </div>
        </Grid>
      </Grid>
    </header>
  )
}

export default AdminHeader
