import Head from "next/head"
import { ErrorComponent } from "@blitzjs/next"
//
// ------------------------------------------------------
// This page is rendered if a route match is not found
// ------------------------------------------------------
export default function Page404() {
  const statusCode = 404
  const title = "This page could not be found"
  return (
    <>
      <Head>
        <title>
          {statusCode}: {title}
        </title>
      </Head>
      <ErrorComponent statusCode={statusCode} title={title} />
    </>
  )
}

// TODO: redirect didn't work, build a better 404 page
// import { useEffect } from "react"
// import { useRouter } from "next/router"

// export default function Page404() {
//   const router = useRouter()
//
//   useEffect(() => {
//     router.replace("/")
//   }, [])
//   return null
// }
