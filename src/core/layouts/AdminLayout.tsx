import Head from "next/head"
import React, { FC, Suspense } from "react"
import { BlitzLayout } from "@blitzjs/next"
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
        <link href="/styles.css" rel="stylesheet" />
      </Head>
      <div className="app-layout-modern flex flex-auto flex-col">
        <main className="flex flex-auto min-w-0">
          <aside className="side-nav side-nav-transparent side-nav-expand">
            <SideNav />
          </aside>
          <div className="main-content flex flex-col flex-auto min-h-screen min-w-0 relative w-full border-l border-gray-200 dark:border-gray-700">
            {header}
            {/*<View {...props} /> TODO: figure out how to put views back in here*/}

            {/*{ TODO: uses routes, won't work '}*/}
            {/*<View />*/}

            {/*<div className="h-full flex flex-auto flex-col justify-between">*/}
            {/*<div className="col-span-2 flex flex-col justify-center items-center bg-white dark:bg-gray-800"> for right forms*/}

            {/*TODO: better sizing for mobile, 100 on phones, */}
            {/*<div className="h-full flex flex-auto flex-col justify-between col-span-2">*/}
            <div className="page-container relative h-full flex flex-auto flex-col px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:px-8">
              <div className="container mx-auto">{children}</div>
            </div>
          </div>
        </main>
        {footer}
      </div>
    </>
  )
}

export default AdminLayout
