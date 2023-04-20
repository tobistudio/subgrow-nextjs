import Head from "next/head"
import React, { FC, Suspense } from "react"
import { BlitzLayout } from "@blitzjs/next"
// import styles from "../../../../styles/Home.module.css";

// const DashboardsPage = () => {
const HomeFooter: BlitzLayout<{ title?: string; type?: string; children?: React.ReactNode }> = ({
  title,
  type,
  children,
}) => {

  return (
    <>
      <footer>
        <span>Copyright 2023</span>
      </footer>
      {children}
    </>
  )
}

export default HomeFooter
