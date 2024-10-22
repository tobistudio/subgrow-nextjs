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
  Stack,
  Tooltip
} from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import getSiteForProfile from "../sites/queries/getSiteForProfile"
// import getCurrentProfileUsername from "../profiles/queries/getCurrentProfileUsername"
import PreviewLinkButton from "../components/dashboard/PreviewLinkButton";
import { faGear } from "@fortawesome/pro-duotone-svg-icons";
import { fonts } from "../configs/colors/default";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
// import { Link } from "../../db/generated/prisma-client-js" dawn ??
const LoadingSvg = React.lazy(() => import("assets/svg/LoadingSvg"))

export const DashboardBox = ({ sites, setLinkList }) => {

  return (<AddLinkWidget sites={sites} setLinkList={setLinkList} />)
  // return (
  //   <Container
  //     className="dash-cont"
  //     fixed
  //     // maxWidthXs={1200} // gives error, api wrong
  //     maxWidth="xl"
  //
  //   >
  //     <Grid
  //       display="flex"
  //       justifyContent="center"
  //       alignItems="center"
  //       spacing={{ xs: 0, md: 0, lg: 0 }}
  //     >
  //       <Grid
  //         container
  //         // spacing={{ xs: 2, md: 3, lg: 6 }}
  //         // minWidth={600}
  //         // maxWidth={1200}
  //         justifyContent="center"
  //         alignItems="center"
  //       >
  //         <AddLinkWidget sites={sites} setLinkList={setLinkList} />
  //       </Grid>
  //     </Grid>
  //   </Container>
  // )
}

const Dashboard = () => {

  const session = useSession()
  const router = useRouter()
  const [sites] = useQuery(getSiteForProfile, { userId: session.userId }, {
    enabled: !!session.userId, // The query will only run if `session.userId` exists.
  });

  const [linkList, setLinkList] = React.useState(sites);
  const [current, setCurrent] = React.useState(false);

  React.useEffect(() => {
    if (!session.userId) {
      router.push('/login');
    }
  }, [])

  const handleProfileEdit = async (e) => {
    await router.push("/" + session.username)
  }

  return (
    <AdminLayout>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Suspense fallback={<LoadingSvg />}>
        <Grid container spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
          <Grid direction="column" xs={12} sm={12} md={8} lg={8} xl={8}>
            {linkList && <DashboardBox sites={linkList} setLinkList={setLinkList} />}
          </Grid>
          <Grid direction="column" xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card variant="outlined">
              <CardHeader
                title="Preview"
                //action={<Link href={Routes.EditProfilePage({profileId: profile.id})}><Tooltip title="Edit Profile"><FontAwesomeIcon icon={faGear} color="primary.light" style={{ color: fonts.gear }} /></Tooltip></Link>} // gear
                action={<Link href="" onClick={handleProfileEdit}><Tooltip title="Edit Profile Design"><FontAwesomeIcon icon={faGear} color="primary.light" style={{ color: fonts.gear }} /></Tooltip></Link>} // gear
              />
              <CardContent>
                <Box
                  display="flex"
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Stack spacing={4}>
                    {
                      linkList && linkList.map((ele, id) => <PreviewLinkButton key={id} ele={ele} />)
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
