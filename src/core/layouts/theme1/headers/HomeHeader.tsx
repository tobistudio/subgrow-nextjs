import React, { FC, Suspense } from "react"
import { BlitzLayout } from "@blitzjs/next"
// import styles from "../../../../styles/Home.module.css";
import S from "../../../../components/search/S"
import UserInfo from "components/user/UserInfo"
import LanguageSelector from "components/template/LanguageSelector"
import Notification from "components/template/Notification"
import Logo from "./Logo"
import Grid from "@mui/material/Unstable_Grid2"
const SidePanel = React.lazy(() => import("components/template/SidePanel"))
// error caused in phpstorm, {children} but fixes typescript error
const HomeHeader: BlitzLayout<{ title?: string; type?: string }> = ({ title, type, children }) => {
  return (
    <header className="header-wrapper">
      <Grid container spacing={2}>
        <Grid xs={6}>
          <Logo imageSource="https://place-hold.it/100x30.jpg/666/fff/000">{children}</Logo>
        </Grid>
        <Grid xs={6}>
          <div className={"user-info-wrapper"}>
            <Suspense>
              <UserInfo />
              <SidePanel />
            </Suspense>
          </div>
        </Grid>
      </Grid>
    </header>
  )
}

export default HomeHeader
