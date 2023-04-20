import React, { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import {usePaginatedQuery, useQuery} from "@blitzjs/rpc"
import { useRouter } from "next/router"
import AdminLayout from "core/layouts/AdminLayout"
import getProfiles from "profiles/queries/getProfiles"
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
import getSite from "../sites/queries/getSite";
import getProfile from "../profiles/queries/getProfile";
// import ShowProfileIndexAdminPage from "./[profileId]"
// import { FORM_ERROR, ProfileForm } from "../profiles/components/ProfileForm"
// import ProfileListCard from "components/lists/ProfileListCard"
// import SiteListCard from "../components/lists/SiteListCard";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faPlus, faTrash} from "@fortawesome/pro-duotone-svg-icons";
// import Alert from "@mui/material/Alert";
const LoadingSvg = React.lazy(() => import("assets/svg/LoadingSvg"))

const ITEMS_PER_PAGE = 100

export const DashboardBox = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  // const [{ profiles }] = usePaginatedQuery(getProfiles, {
  //   orderBy: { id: "asc" },
  //   skip: ITEMS_PER_PAGE * page,
  //   take: ITEMS_PER_PAGE,
  // })

  // just one
  // const [{ profiles }] = usePaginatedQuery(getProfiles, {
  //   orderBy: { id: "asc" },
  //   skip: ITEMS_PER_PAGE * page,
  //   take: ITEMS_PER_PAGE,
  // })

  // const [profile]: any = useQuery(getProfile, { userId: user.id, current: "yes" })

  // in widget, sites will be simplified as links with basic data
  const [{ sites }] = usePaginatedQuery(getSites, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  console.log("links", sites)
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
          <AddLinkWidget links={sites} />
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
