import Head from "next/head"
import React, { FC, Suspense } from "react"
import { BlitzLayout } from "@blitzjs/next"
import UserInfo from "../../../../components/user/UserInfo"


const LoginHeader: BlitzLayout<{ title?: string; type?: string }> = ({ title, type, children }) => {

  return (
    <header className="header-wrapper">
      <div className="header-action header-action-start"></div>
      <div className="header-action header-action-middle">Login Header</div>

      <div className="header-action header-action-end">
        <div className={"user-info-wrapper"}>


          Info wrapper
        </div>
      </div>
    </header>
  )
}

export default LoginHeader
