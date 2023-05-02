import React, { Suspense } from "react"
import { useSession } from "@blitzjs/auth"
import Head from "next/head"
import Link from "next/link"
import { useQuery } from "@blitzjs/rpc"
import AdminLayout from "core/layouts/AdminLayout"
import AddLinkWidget from "components/dashboard/AddLinkWidget"
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Container,
  Button,
  Stack,
  Tooltip
} from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import getSiteForProfile from "../sites/queries/getSiteForProfile"
import getCurrentProfileUsername from "../profiles/queries/getCurrentProfileUsername"
import PreviewLinkButton from "../components/dashboard/PreviewLinkButton";
import { faGear } from "@fortawesome/pro-duotone-svg-icons";
import { fonts } from "../configs/colors/default";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
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
  const router = useRouter()
  const [sites] = useQuery(getSiteForProfile, { userId: session.userId })
  // const [profile] = useQuery(getCurrentProfileUsername, { username: session.username, current: 'yes' })

  const [linkList, setLinkList] = React.useState(sites);
  // // TODO: test, should not be needed. auth not being checked yet, so no session id causes error
  // if (!session.userId) {
  //   Routes.Home()
  //   return
  // }

  const handleProfileEdit = async (e) => {
    await router.push("/" + session.username)
  }
  return (
    <AdminLayout>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Suspense fallback={<LoadingSvg />}>
        {/* sx={{ flexGrow: 1 }}*/}
        <Grid sx={{ flexGrow: 1 }} xs={12} container spacing={{ xs: 2, md: 3, lg: 4 }} className={"dash-wrapper"}>

          <Grid direction="column" xs={12} sm={12} md={8} lg={8} xl={8} spacing={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }}>
            <Card variant="outlined">
              <CardHeader title="Links" />
              <CardContent>
                <DashboardBox sites={sites} setLinkList={setLinkList} />
              </CardContent>
            </Card>
          </Grid>
          <Grid direction="column" xs={12} sm={12} md={4} lg={4} xl={4} spacing={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
            <Card variant="outlined">
              <CardHeader
                title="Preview"
                //action={<Link href={Routes.EditProfilePage({profileId: profile.id})}><Tooltip title="Edit Profile"><FontAwesomeIcon icon={faGear} color="primary.light" style={{ color: fonts.gear }} /></Tooltip></Link>} // gear
                //action={<Link href="" onClick={handleProfileEdit}><Tooltip title="Edit Profile"><FontAwesomeIcon icon={faGear} color="primary.light" style={{ color: fonts.gear }} /></Tooltip></Link>} // gear
              />
              <CardContent>
                <Box
                  display="flex"
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Stack spacing={4}>
                    {
                      linkList.map((ele, id) => <PreviewLinkButton key={id} ele={ele} />)
                    }
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Grid>

        </Grid>

      </Suspense>
    </AdminLayout>
  )
}
Dashboard.authenticate = true
export default Dashboard
