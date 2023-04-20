import React, { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { usePaginatedQuery } from "@blitzjs/rpc"
import { useRouter } from "next/router"

import AdminLayout from "core/layouts/AdminLayout"
import getSites from "sites/queries/getSites"
import { experimentalStyled as styled } from "@mui/material/styles"
import { Box, Paper, Grid, Button } from "@mui/material"

const ITEMS_PER_PAGE = 100

export const SitesList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ sites, hasMore }] = usePaginatedQuery(getSites, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <ul>
        {sites.map((site) => (
          <li key={site.id}>
            <Link href={Routes.ShowSitePage({ siteId: site.id })}>{site.name}</Link>
          </li>
        ))}
      </ul>

      <Button variant="outlined" type="button" disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </Button>

      <Button variant="outlined" type="button" disabled={!hasMore} onClick={goToNextPage}>
        Next
      </Button>
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
