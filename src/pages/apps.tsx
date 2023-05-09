import React, { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { useQuery } from "@blitzjs/rpc"
import HomeLayout from "core/layouts/HomeLayout"
import getService from "apps/queries/getService"
import { useSession } from "@blitzjs/auth"
import getSiteForProfile from "../sites/queries/getSiteForProfile";
import {
  Typography,
} from "@mui/material";

import Grid from '@mui/material/Unstable_Grid2';
import { useRouter } from "next/router";
import apps from "../../data/apps";
import AppListBox from "../apps/components/AppListBox";
const LoadingSvg = React.lazy(() => import("assets/svg/LoadingSvg"))


// TODO: show checkbox or different style if user has already added app

// TODO: isotope filter search box

export const AppsList = () => {
  const router = useRouter()
  const session = useSession()



  // TODO: dawn if user owns apps, must put a check mark on box. if not, plus sign
  const [Avaliable_app] = useQuery(getService, { userId: session.userId });

  // const getAvatarBgColor = ({ category }) => ({
  //   work: yellow[700],
  //   money: green[500],
  //   todos: pink[500],
  // }[category] || blue[500]);

  //  if owned, action should be checkmark

  // getThisUsersApps


  const handleAddAppClick = async (event: React.MouseEvent<HTMLElement>, site_name) => {
    // await router.push(Routes.EditSitePage({ siteId: id }))
    await router.push("/apps/" + site_name)
  }

  return (
    <Grid container spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
      <Grid xs={12}>
        <Typography sx={{ width: "100%", flexGrow: 1 }} variant="h1center" align="center">Available Apps</Typography>
      </Grid>

      <Grid xs={12} container spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
        {apps.map((app) => (
          <AppListBox key={app.id} app={app} handleAddAppClick={handleAddAppClick} avaliable={app.site_name === Avaliable_app.site_name ? 1 : 0} />
        ))}
      </Grid>
    </Grid>
  )
}

const AppsPage = () => {
  const session = useSession()
  const [sites] = useQuery(getSiteForProfile, { userId: session.userId })
  // const [profile] = useQuery(getCurrentProfileUsername, { username: session.username, current: 'yes' })
  const [linkList, setLinkList] = React.useState(sites);


  return (
    <HomeLayout>
      <Head>
        <title>Apps</title>
      </Head>

      <Suspense fallback={<LoadingSvg />}>

        <AppsList />

      </Suspense>

    </HomeLayout>
  )
}

export default AppsPage

{/*<CardActionArea>*/ }
{/*  <Link href={Routes.SitesPage()}>View Sites</Link>*/ }
{/*</CardActionArea>*/ }

{/*<CardActions>*/ }
{/*  <Tooltip title={"Add " +  app.name}>*/ }
{/*    <IconButton*/ }
{/*      aria-label={"Add " +  app.name}*/ }
{/*      style={{ marginLeft: "auto", float: "right" }}*/ }
{/*      onClick={(e) => handleAddAppClick(e, app.id)}*/ }
{/*    >*/ }
{/*      /!*<ArrowForwardIosTwoTone color="icon" />*!/*/ }
{/*      <ArrowForwardIosTwoTone />*/ }
{/*    </IconButton>*/ }
{/*  </Tooltip>*/ }
{/*</CardActions>*/ }
