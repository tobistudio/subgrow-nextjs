import { deepmerge } from '@mui/utils';
import Link from "next/link"
import dynamic from 'next/dynamic';

import { Routes } from "@blitzjs/next"
import React, { lazy, Suspense, useLayoutEffect, useState } from "react"
//import { ProfilesList } from "../../pages/profiles"
import { FacebookProvider } from "react-facebook"
import { createTheme } from '@mui/material';
import { RootStateOrAny, useSelector } from "react-redux"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import {
  Box,
  Typography,

  Button,
  Stack,
  Avatar
} from "@mui/material"

import Grid from "@mui/material/Unstable_Grid2"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileButton from "../components/ProfileButton";
import ProfileLink from "../components/ProfileLink";
// import UserInfo from "../../components/user/UserInfo";
import SidePanelHeaderToggle from "../../components/template/SidePanel/SidePanelHeaderToggle";
// import { useMutation } from "@blitzjs/rpc";
// import updateLinkOrder from "../../sites/mutations/updateLinkOrder";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import { useSession } from "@blitzjs/auth";
import { useRouter } from "next/router";

// import { green, purple } from '@mui/material/colors';
// import babyTheme from '../../../data/userthemes/babyblue.json'
// import { Theme } from "@emotion/react"
// import {profileTheme} from "../../../data/userthemes/babybluenew";

// TODO: lazy load theme
// const babyBlue = lazy(() => import("../../../data/userthemes/babybluenew"))


import { babyBlue } from "../../../data/userthemes/babybluenew";

import { modern1 } from "../../../data/userthemes/modern1";

//const LoadingSvg = React.lazy(() => import("assets/svg/LoadingSvg"))

// import { createTheme } from '@mui/material/styles';


// TODO: perhaps use CreateTheme from mui to create this theme instead of userthemes/modern.tsx

// export const LoginForm = (props: LoginFormProps) => {

const Modern = ({ profile, sites }) => {

  const session = useSession()

  // TODO: profile should come from store/ state
  // If there is a custom template, use it
  console.log("profile.template", profile);
  console.log("profile.template", profile.template);
  let profileTheme
  switch (profile.template) {
    case 'custom':
      profileTheme = profile.theme // This is the user's theme
      break;
    case 'modern1':
      profileTheme = modern1 // This is the user's theme
      break;
    case 'babybluenew':
      // user theme is a will comes from

      // profileTheme = lazy(() => import("../../../data/userthemes/babybluenew"))


      profileTheme = babyBlue




      //profileTheme = lazy(() => import("../../../data/userthemes/babybluenew"))
      // /Users/amirmeshkin/_code/_business/subgrow.com/data/userthemes/babybluenew.tsx

      // profileTheme = dynamic(() => import('../../../data/userthemes/babybluenew'), {
      //   loading: () => <p>Loading...</p>,
      // });



      break;
    default:
    // code block
  }



  // currentUser not linked to blitz session
  // const currentUser = useCurrentUser()
  const router = useRouter()
  const siteTheme = useTheme();
  //const type = useSelector((state: RootStateOrAny) => state.theme);

  const [usedTheme, setUseTheme] = React.useState("");



  // TODO: dawn here there should be a merge of the site's theme, with the user's theme
  // const theme = createTheme(deepmerge(options1, options2));

  let myownpage = false
  if (session.userId) {
    if ("/" + session.username === router.asPath) {
      myownpage = true
    }
  }

  // TODO: entire theme put into state, or background color profileTheme.muiTheme.palette.background.default

  // console.log("siteTheme", siteTheme)
  // console.log("user profile theme", theme)
  // console.log("sites", sites);

  // React.useEffect(() => {
  //   if (type.layout.type === "modern") {
  //     setUseTheme('modern')
  //   } else if (type.layout.type === "mytheme") {
  //     setUseTheme('mytheme')
  //   } else if (type.layout.type === "babyblue") {
  //     setUseTheme('babyblue')
  //   }
  // }, [type])

  // TODO: here is where we get the user's theme
  // const userTheme = createTheme(siteTheme, {
  //   palette: {
  //     primary: {
  //       main: "#2edc00",
  //     },
  //   },
  // });

  // TODO: once we have user's custom theme, or selected template, we put ONLY userTheme into state

  // const combinedTheme = deepmerge(siteTheme, userTheme);
  const combinedTheme = deepmerge(siteTheme, profileTheme.muiTheme);
  // const combinedTheme = createTheme(deepmerge(siteTheme, userTheme));



  /*
        neutral: {
          main: '#64748B',
          contrastText: '#fff',
        },
   */
  // TODO: dawn not sure what happened after merge
  // TODO: dawn this needs to merge with theme
  // const userTheme =

  /*

  1 of 2 unhandled errors

  Unhandled Runtime Error
  Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
   */
  // set profile data in state
  const [userprofile, setUserprofile] = React.useState(profile)

  console.log("setting state modern userprofile", userprofile)
  // profile = React.getProfile()


  // TODO: needs to also be linked to state, for updates
  const linkMargin = 20
  // const linkMargin = userprofile.profileTheme.linkSpacing ? userprofile.profileTheme.linkSpacing : 20

  const shareFb = () => {
    // provider does init
    // window.FB.init({
    //   appId            : '241448415049637',
    //   autoLogAppEvents : true,
    //   xfbml            : true,
    //   version          : 'v16.0'
    // });

    window.FB.ui(
      {
        method: "share",
        href: "https://developers.facebook.com/docs/",
      },
      function (response) {
        console.log("response", response)
      }
    )
  }


  console.log("profileTheme", profileTheme)
  console.log("profileTheme.options", profileTheme.options)

  // if template set to custom, use whatever


  // (profileTheme.bgColor ? profileTheme.bgColor : "#202A37")
  // TODO: mui background default not working, so manually adjust
  // <Grid direction="column" xs={12} sm={12} md={8} lg={8} xl={8}>
  return (
    <ThemeProvider theme={combinedTheme}>
      <div id="profile-main" style={{ minHeight: "100vh", backgroundColor: profile.template === "custom" ? profileTheme.muiTheme.palette.background.default : profileTheme.muiTheme.palette.background.default }}>
        {/*<div id="profile-main" style={{ minHeight: "100vh", backgroundColor: profile.template === "custom" ?  profileTheme.bgColor : ""}}>*/}

        {/*<div id="profile-main" style={{ minHeight: "100vh", backgroundColor: usedTheme === "mytheme" ? (profileTheme.bgColor ? profileTheme.bgColor : "#202A37") : "#000000"}}>*/}
        <header className="header-wrapper">
          <Grid container spacing={0} py={1}>
            <Grid spacing={{ xs: 12 }} display="flex" justifyContent="right" alignItems="center">
              <Suspense>
                {/*<UserInfo />*/}

                {/*// TODO: show this only if the user that is logged in owns profile*/}

                {myownpage ? <SidePanelHeaderToggle usersession={session} type="icon" /> : null}

              </Suspense>
            </Grid>
          </Grid>
        </header>
        <main>
          <FacebookProvider appId="241448415049637">
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              sx={{
                py: {
                  xs: 7,
                  sm: 7,
                  md: 10,
                  lg: 11,
                  xl: 12
                }
              }}
            // justifyContent="center"
            // style={{ minHeight: "100vh" }}
            >

              {/*<Button variant="modern1">*/}
              {/*  testing button variants*/}
              {/*</Button>*/}



              {/*<Typography*/}
              {/*  variant="h2"*/}
              {/*  color="primary.main"*/}
              {/*>*/}
              {/*  testing typography*/}
              {/*</Typography>*/}



              {/*<Typography*/}
              {/*  variant="h1"*/}
              {/*  color="primary.main"*/}
              {/*>*/}
              {/*  why bigger on this page*/}
              {/*</Typography>*/}

              {/*// TODO: user should select which image to show, from FB, Twitter, Etc*/}
              {/*// we do not want to allow image uploads. Only links to images on the net*/}


              <Avatar
                alt={profile.username}
                src="https://placehold.co/100x100/EEE/31343C"
                sx={{
                  width: 100,
                  height: 100,
                  mb: {
                    xs: 4,
                    sm: 3
                  }
                }}
              />

              {/*// TODO: show handle, make it an option  */}
              <Typography
                variant={profileTheme.options.titleStyle}
                alignItems={profileTheme.options.linkAlign ? profileTheme.options.linkAlign : "center"}
                py={2}
                //spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
                className="profile-text"
                id="title"
              // style={{ color: profileTheme.titleColor ? profileTheme.titleColor : "rgb(189,196,215)" }}
              >
                {/*{userprofile.title ? userprofile.title : userprofile.username}*/}
                {profile.title ? profile.title : profile.username}

              </Typography>

              {userprofile.description ? (
                <Typography variant={profileTheme.options.descriptionStyle} id="description" className="description"
                // style={{ color: profileTheme.descriptionColor ? profileTheme.descriptionColor : "rgb(189,196,215)" }}
                >
                  {userprofile.description}
                </Typography>
              ) : (
                ""
              )}




              {/*// TODO: dawn apps area is where we will show widgets, tik tok feed, etc*/}
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
              >

                {/*style={{ marginTop: linkMargin }}*/}


                {profileTheme.options.links.type === 'button'
                  ? <ProfileButton sites={sites} variant={profileTheme.options.links.variant} />
                  : <ProfileLink sites={sites} variant={profileTheme.options.links.variant} />}


                {/*<Stack spacing={5}>*/}


                {/*  <Button*/}
                {/*    variant="userhoney"*/}
                {/*  >*/}
                {/*    <span>userhoney</span>*/}
                {/*  </Button>*/}


                {/*  <Button variant="userbabyblue">userbabyblue</Button>*/}
                {/*  <Button variant="usernavyblue">usernavyblue</Button>*/}
                {/*  <Button variant="useroranges">useroranges</Button>*/}
                {/*  <Button variant="userseethrough">userseethrough</Button>*/}
                {/*  <Button variant="userjungle">userjungle</Button>*/}
                {/*  <Button variant="userjungle">userjungle</Button>*/}
                {/*  <Button variant="userwu">userwu</Button>*/}
                {/*  <Button variant="usermustard">usermustard</Button>*/}
                {/*  <Button variant="usertronline">usertronline</Button>*/}

                {/*</Stack>*/}

                {/*// TODO: showing share buttons, etc should probably come from Apps table    */}
                {/*<Stack spacing={4}>*/}
                {/*  {userprofile.profileTheme.showShare &&*/}
                {/*    <Button*/}
                {/*      variant="contained"*/}
                {/*      onClick={() => {*/}
                {/*        shareFb()*/}
                {/*      }}*/}
                {/*      startIcon={<FontAwesomeIcon icon={faFacebook} style={{ width: 15, height: 15 }} />}*/}
                {/*    >*/}
                {/*      <span>share</span>*/}
                {/*    </Button>*/}
                {/*  }*/}
                {/*</Stack>*/}

              </Grid>

            </Grid>

          </FacebookProvider>
        </main>
        <footer>
          {/*<span>*/}
          {/*  Sub Grow*/}
          {/*</span>*/}

        </footer >
      </div >

    </ThemeProvider >
  )
}

export default Modern

// TODO: custom footer overrides
// TODO: user's google analytics
