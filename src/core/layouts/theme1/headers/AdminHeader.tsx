import Head from "next/head"
import React, { FC, Suspense } from "react"
import { BlitzLayout } from "@blitzjs/next"

import UserInfo from "../../../../components/user/UserInfo"
import Search from "../../../../components/search/Search"
import S from "../../../../components/search/S"
// import { Search } from "../../../../components/search/Search";

import UserDropdown from "components/template/UserDropdown"
import LanguageSelector from "components/template/LanguageSelector"
import Notification from "components/template/Notification"
import SideNavToggle from "components/template/SideNavToggle"
import MobileNav from "components/template/MobileNav"
import SideNav from "components/template/SideNav"
// import SidePanel from 'components/template/SidePanel'
const SidePanel = React.lazy(() => import("components/template/SidePanel"))
const LoadingSvg = React.lazy(() => import("assets/svg/LoadingSvg"))

// const DashboardsPage = () => {
const AdminHeader: BlitzLayout<{ title?: string; type?: string }> = ({ title, type, children }) => {
  // TODO: only prints header
  switch (type) {
    case "home":
      // code block
      break
    case "y":
      // code block
      break
    default:
    // code block
  }

  const myLoader = ({ src, width, quality }) => {
    return `https://place-hold.it/1x1/666/fff/000.gif`
  }

  return (
    <header className="header-wrapper">
      <div className="header-action header-action-start">
        <MobileNav />
        <SideNavToggle />
        {/*<S />*/}
      </div>

      <div className="header-action header-action-end">
        <div className={"user-info-wrapper"}>
          <Suspense fallback={<LoadingSvg />}>
            {/*<UserInfo />*/}
            {/*<LanguageSelector />*/}
            {/*<Notification />*/}
            <SidePanel />
            {/*<UserDropdown hoverable={false} /> TODO: uses elstar auth*/}
          </Suspense>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader
