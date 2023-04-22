import React, { Suspense } from "react"
import { useSession } from "@blitzjs/auth"
import Head from "next/head"
import Link from "next/link"
import { usePaginatedQuery, useQuery } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import AdminLayout from "core/layouts/AdminLayout"
import getProfile from "profiles/queries/getProfile"
import getSites from "sites/queries/getSites"
import AddLinkWidget from "components/dashboard/AddLinkWidget"
import {
  Box,
  Paper,
  Grid,
  Button,
  Card,
  CardHeader,
  CardContent,
  Container,
  Typography,
  Stack,
} from "@mui/material"
import getSiteForProfile from "../sites/queries/getSiteForProfile"

const LoadingSvg = React.lazy(() => import("assets/svg/LoadingSvg"))

export const DashboardBox = () => {
  const session = useSession()

  // const [sites] = useQuery(getSiteForProfile, { userId: user.id })
  const [sites] = useQuery(getSiteForProfile, { userId: session.userId })

  // minHeight="100vh"
  return (
    <Container
      fixed
      // maxWidthXs={1200} // gives error, api wrong
      maxWidth="xl"
    >
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Grid
          container
          // spacing={{ xs: 2, md: 3, lg: 6 }}
          minWidth={600}
          maxWidth={1200}
          justifyContent="center"
          alignItems="center"
        >
          <AddLinkWidget sites={sites} />
        </Grid>
      </Grid>
    </Container>
  )
}

const Dashboard = () => {
  return (
    <AdminLayout>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Suspense fallback={<LoadingSvg />}>
        <Box>
          <Grid container spacing={{ xs: 2, md: 3, lg: 6 }}>
            <Grid item xs={8}>
              <Card variant="outlined">
                <CardHeader title="Links" />

                <CardContent>
                  <DashboardBox />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4} pl={5}>
              <Card variant="outlined">
                <CardHeader title="Design" />

                <CardContent>Select box with Template And theme</CardContent>
              </Card>

              {/*<FacebookProvider appId="123456789">*/}
              {/*  <Comments href="https://www.facebook.com/amir.meshkin" />*/}
              {/*</FacebookProvider>*/}
              {/*Page is creating errors*/}
              {/*<FacebookProvider appId="123456789">*/}
              {/*  <Page href="https://www.facebook.com" tabs="timeline" />*/}
              {/*</FacebookProvider>*/}
            </Grid>
          </Grid>
        </Box>
      </Suspense>
    </AdminLayout>
  )
}

export default Dashboard
