import Head from "next/head"
import React, { FC, Suspense } from "react"
import { BlitzLayout } from "@blitzjs/next"
import { Box, Container } from "@mui/material"

import SideNav from "components/template/SideNav"
// TODO: need to get var here for theme
const AdminHeader = React.lazy(() => import("core/layouts/theme1/headers/AdminHeader"))
const AdminFooter = React.lazy(() => import("core/layouts/theme1/footers/AdminFooter"))

// TODO: build error
// https://stackoverflow.com/questions/71791347/npm-package-cannot-be-used-as-a-jsx-component-type-errors/71828113#71828113
// Type error: Type '{}' is not assignable to type 'IntrinsicAttributes & (({ title?: string | undefined; type?: string | undefined; } & { children: ReactNode; }) | ({ title?: string | undefined; type?: string | undefined; } & { ...; } & RefAttributes<...>))'.

// const AdminLayout: BlitzLayout<{ title?: string; type?: string; children?: React.ReactNode }> = ({

// const ThemeProviderFixed = ThemeProvider as unknown as React.FC<PropsWithChildren<{ theme: string }>>;

// const AdminLayout = Provider as unknown as React.FC<{
//   children?: JSX.Element | string;
//   store: any;
// }>;
const AdminLayout: BlitzLayout<{
  title?: string
  type?: string
  rootClass?: string
  children?: React.ReactNode
}> = ({
  //const AdminLayout: BlitzLayout<{ title?: string; type?: string; children?: React.FC }> = ({
  title,
  type,
  children,
}) => {
  let header, footer
  // TODO: only prints header
  switch (type) {
    case "home":
      header = (
        <AdminHeader title={title} type={type}>
          {/*{children}*/}
        </AdminHeader>
      )
      footer = (
        <AdminFooter title={title} type={type}>
          {/*{children}*/}
        </AdminFooter>
      )
      break
    case "profile":
      header = (
        <AdminHeader title={title} type={type}>
          {/*{children}*/}
        </AdminHeader>
      )
      footer = (
        <AdminFooter title={title} type={type}>
          {/*{children}*/}
        </AdminFooter>
      )
      break
    default:
      header = (
        <AdminHeader title={title} type={type}>
          {/*{children}*/}
        </AdminHeader>
      )
      footer = (
        <AdminFooter title={title} type={type}>
          {/*{children}*/}
        </AdminFooter>
      )
  }

  return (
    <>
      <Head>
        <title>{title || "Sub Grow Admin"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container fixed>{header}</Container>
        <Container
          fixed
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 300,
          }}
        >{children}</Container>
      </main>
      {footer}
    </>
  )
}

export default AdminLayout
