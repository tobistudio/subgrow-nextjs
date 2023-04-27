import React, { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useQuery, useMutation } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"
import AdminLayout from "core/layouts/AdminLayout"
import getSite from "sites/queries/getSite"
import deleteSite from "sites/mutations/deleteSite"
import { Button } from "@mui/material"

export const Site = () => {
  const router = useRouter()
  const siteId = useParam("siteId", "string")
  const [deleteSiteMutation] = useMutation(deleteSite)
  const [site] = useQuery(getSite, { id: siteId })

  return (
    <>
      <Head>
        <title>Site {site.id}</title>
      </Head>

      <div>
        <h1>Site {site.id}</h1>
        <pre>{JSON.stringify(site, null, 2)}</pre>

        <Link href={Routes.EditSitePage({ siteId: site.id })}>Edit</Link>

        <Button
          variant="outlined"
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteSiteMutation({ id: site.id })
              await router.push(Routes.SitesPage())
            }
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          Delete
        </Button>
      </div>
    </>
  )
}

const ShowSitePage = () => {
  return (
    <div>
      <p>
        <Link href={Routes.SitesPage()}>Sites</Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Site />
      </Suspense>
    </div>
  )
}

ShowSitePage.authenticate = true
ShowSitePage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>

export default ShowSitePage
