import Head from "next/head"
import React, { FC, Suspense } from "react"
import { BlitzLayout } from "@blitzjs/next"
// import styles from "../../../../styles/Home.module.css";

// const DashboardsPage = () => {
const AdminFooter: BlitzLayout<{ title?: string; type?: string; children?: React.ReactNode }> = ({
  title,
  type,
  children,
}) => {
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

  return (
    <>
      <footer>
        <span>Copyright 2023</span>
      </footer>
      {children}
    </>
  )
}

export default AdminFooter
