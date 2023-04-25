import React, { FC, Suspense } from "react"
import { BlitzLayout } from "@blitzjs/next"
// import styles from "../../../../styles/Home.module.css";
import S from "../../../../components/search/S"
import UserInfo from "components/user/UserInfo"
import LanguageSelector from "components/template/LanguageSelector"
import Notification from "components/template/Notification"
import Logo from "./Logo"
import Grid from "@mui/material/Unstable_Grid2"
// const SidePanel = React.lazy(() => import("components/template/SidePanel"))
// error caused in phpstorm, {children} but fixes typescript error
const HomeHeader: BlitzLayout<{ title?: string; type?: string }> = ({ title, type, children }) => {
  return (
    <header className="header-wrapper">
      <Grid container spacing={2} className="justify-content-xs-center" sx={{ flexGrow: 1 }} my={1}>
        <Grid xs={12} sm={6} display="flex" justifyContent="left" alignItems="center">
          <Logo imageSource="https://place-hold.it/100x30.jpg/666/fff/000">{children}</Logo>
        </Grid>
        <Grid xs={12} sm={6} display="flex" justifyContent="right" alignItems="center">
          <Suspense>
            <UserInfo />
          </Suspense>
        </Grid>
      </Grid>
    </header>
  )
}

export default HomeHeader
