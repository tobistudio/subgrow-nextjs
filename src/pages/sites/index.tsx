import React, { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import AdminLayout from "core/layouts/AdminLayout"

export const SitesList = () => {
  const router = useRouter()

  return (
    <div>
      <ul>
        {/*{sites.map((site) => (*/}
        {/*  <li key={site.id}>*/}
        {/*    <Link href={Routes.ShowSitePage({ siteId: site.id })}>{site.name}</Link>*/}
        {/*  </li>*/}
        {/*))}*/}
      </ul>

      {/*<Button variant="outlined" type="button" disabled={page === 0} onClick={goToPreviousPage}>*/}
      {/*  Previous*/}
      {/*</Button>*/}

      {/*<Button variant="outlined" type="button" disabled={!hasMore} onClick={goToNextPage}>*/}
      {/*  Next*/}
      {/*</Button>*/}
    </div>
  )
}

const SitesPage = () => {
  return (
    <AdminLayout>
      <Head>
        <title>Sites</title>
      </Head>

      <div>
        <p>
          <Link href={Routes.NewSitePage()}>Create Site</Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <SitesList />
        </Suspense>
      </div>
    </AdminLayout>
  )
}

export default SitesPage
