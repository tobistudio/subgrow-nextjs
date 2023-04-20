import React, { FC, Suspense } from "react"
import { BlitzLayout } from "@blitzjs/next"
// import styles from "../../../../styles/Home.module.css";
import S from "../../../../components/search/S"
import UserInfo from "components/user/UserInfo"
import LanguageSelector from "components/template/LanguageSelector"
import Notification from "components/template/Notification"
import Logo from "./Logo"

// error caused in phpstorm, {children} but fixes typescript error
const HomeHeader: BlitzLayout<{ title?: string; type?: string }> = ({ title, type, children }) => {
  return (
    <header className="header-wrapper login-wrapper">
      <div className="header-action header-action-start">
        <Logo imageSource="https://place-hold.it/100x30.jpg/666/fff/000">{children}</Logo>
      </div>
      <div className="header-action header-action-middle">Home Header</div>

      <div className="header-action header-action-end">
        <div className={"user-info-wrapper"}>
          <Suspense fallback="Loading...">
            <UserInfo />
          </Suspense>
        </div>
      </div>
    </header>
  )
}

export default HomeHeader
