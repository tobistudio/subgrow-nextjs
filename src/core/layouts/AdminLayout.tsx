import Head from "next/head"
import React, { FC, Suspense } from "react"
import { BlitzLayout } from "@blitzjs/next"
import { Box, Container } from "@mui/material"

import SideNav from "components/template/SideNav"
// TODO: need to get var here for theme
const AdminHeader = React.lazy(() => import("core/layouts/theme1/headers/AdminHeader"))
const AdminFooter = React.lazy(() => import("core/layouts/theme1/footers/AdminFooter"))
const LoadingSvg = React.lazy(() => import("assets/svg/LoadingSvg"))
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

  // TODO: get user, session, and profile and pass down

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
      <Suspense fallback={<LoadingSvg />}>
        <Head>
          <title>{title || "Sub Grow Admin"}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Container fixed>{header}</Container>
          <Container
            className={"admin-wrapper"}
            fixed
            // maxWidth="xl"
            sx={{
              py: {
                xs: 0,
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4
              }
            }}
          >{children}</Container>

          <Container fixed maxWidth="xl">{footer}</Container>
        </main>
      </Suspense>
    </>
  )
}

export default AdminLayout
