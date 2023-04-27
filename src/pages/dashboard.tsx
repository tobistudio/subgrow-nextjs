import React, { Suspense } from "react"
import { useSession } from "@blitzjs/auth"
import Head from "next/head"
import { useQuery } from "@blitzjs/rpc"
import AdminLayout from "core/layouts/AdminLayout"
import AddLinkWidget from "components/dashboard/AddLinkWidget"
import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Container,
} from "@mui/material"
import getSiteForProfile from "../sites/queries/getSiteForProfile"
import { Routes } from "@blitzjs/next";

const LoadingSvg = React.lazy(() => import("assets/svg/LoadingSvg"))


export const DashboardBox = ({ sites, setLinkList }) => {

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
          <AddLinkWidget sites={sites} setLinkList={setLinkList} />
        </Grid>
      </Grid>
    </Container>
  )
}

const Dashboard = () => {


  const session = useSession()
  console.log("session dashboard", session)

  const [sites] = useQuery(getSiteForProfile, { userId: session.userId })
  const [linkList, setLinkList] = React.useState(sites);

  // auth not being checked yet, so no session id causes error
  if (!session.userId) {

    console.log("session.userId", session.userId);
    Routes.Home()
    return
  }



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
                  <DashboardBox sites={sites} setLinkList={setLinkList} />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4} pl={5}>
              <Card variant="outlined">
                <CardHeader title="Your Links" />
                {
                  linkList.map((ele, id) => <p key={id}>{ele.url}</p>)
                }
                <CardContent></CardContent>
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
Dashboard.authenticate = true
export default Dashboard
