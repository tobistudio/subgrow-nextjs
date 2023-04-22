import React, { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { usePaginatedQuery } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import AdminLayout from "core/layouts/AdminLayout"
import getProfile from "profiles/queries/getProfile"
import { Box, Paper, Grid, Button } from "@mui/material"

const ITEMS_PER_PAGE = 100

export const ProfilesList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  // const [{ profiles, hasMore }] = usePaginatedQuery(getProfiles, {
  //   orderBy: { id: "asc" },
  //   skip: ITEMS_PER_PAGE * page,
  //   take: ITEMS_PER_PAGE,
  // })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <ul>
        {/*{profiles.map((profile) => (*/}
        {/*  <li key={profile.id}>*/}
        {/*    <Link href={`/${profile.username}`}>{profile.title}</Link>*/}
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

const ProfilesPage = () => {
  return (
    <AdminLayout>
      <Head>
        <title>Your Profiles</title>
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        <ProfilesList />
      </Suspense>
    </AdminLayout>
  )
}

export default ProfilesPage
