import Head from "next/head"
import React, { FC } from "react"
import { BlitzLayout } from "@blitzjs/next"
import { Container } from "@mui/material"

// TODO: need to get var here for theme
// const HomeHeader = lazy(() => import('core/layouts/theme1/headers/HomeHeader'));
// #202A37
const HomeHeader = React.lazy(() => import("core/layouts/theme1/headers/HomeHeader"))
const HomeFooter = React.lazy(() => import("core/layouts/theme1/footers/HomeFooter"))

const HomeLayout: BlitzLayout<{
  title?: string
  type?: string
  rootClass?: string
  children?: React.ReactNode
}> = ({ title, type, rootClass, children }) => {
  let header, footer
  // TODO: only prints header
  switch (type) {
    case "home":
      header = (
        <HomeHeader title={title} type={type}>
          {/*{children}*/}
        </HomeHeader>
      )
      footer = (
        <HomeFooter title={title} type={type}>
          {/*{children}*/}
        </HomeFooter>
      )
      break
    case "profile":
      header = (
        <HomeHeader title={title} type={type}>
          {/*{children}*/}
        </HomeHeader>
      )
      footer = (
        <HomeFooter title={title} type={type}>
          {/*{children}*/}
        </HomeFooter>
      )
      break
    case "login":
      header = (
        <HomeHeader title={title} type={type}>
          {/*{children}*/}
        </HomeHeader>
      )
      footer = (
        <HomeFooter title={title} type={type}>
          {/*{children}*/}
        </HomeFooter>
      )
      break
    default:
      header = (
        <HomeHeader title={title} type={type}>
          {/*{children}*/}
        </HomeHeader>
      )
      footer = (
        <HomeFooter title={title} type={type}>
          {/*{children}*/}
        </HomeFooter>
      )
  }

  // maxWidth="xl"
  return (
    // <div className={rootClass}>
    <>
      <Head>
        <title>{title || "links"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container fixed>{header}</Container>
        <Container
          fixed
          maxWidth="xl"
          sx={{
            p: {
              xs: 0,
              sm: 1,
              md: 2,
              lg: 5
            }
          }}
        >
          {children}
        </Container>
        <Container fixed maxWidth="xl">{footer}</Container>
      </main>
    </>
  )
}

export default HomeLayout
