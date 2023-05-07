import AdminLayout from "../../core/layouts/AdminLayout"
import Head from "next/head"
import Link from "next/link"
import { Routes } from "@blitzjs/next"
import React, { Suspense, useLayoutEffect, useState } from "react"
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
} from "@mui/material"

import Grid from "@mui/material/Unstable_Grid2"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileLinkButton from "../components/ProfileLinkButton";
import UserInfo from "../../components/user/UserInfo";
import SidePanelHeaderToggle from "../../components/template/SidePanel/SidePanelHeaderToggle";
// import { useMutation } from "@blitzjs/rpc";
// import updateLinkOrder from "../../sites/mutations/updateLinkOrder";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import { useSession } from "@blitzjs/auth";
import { useRouter } from "next/router";
// import ProfileButton from "../../components/user/ProfileButton";
// import { green, purple } from '@mui/material/colors';
import babyTheme from '../../../data/userthemes/babyblue.json'
import { Theme } from "@emotion/react"


import { deepmerge } from '@mui/utils';
// import { createTheme } from '@mui/material/styles';


// TODO: perhaps use CreateTheme from mui to create this theme instead of userthemes/modern.tsx

// export const LoginForm = (props: LoginFormProps) => {

const Modern = ({ user, profile, sites, themes }) => {

  const session = useSession()
  const theme = profile.theme // This is the user's theme

  // currentUser not linked to blitz session
  // const currentUser = useCurrentUser()
  const router = useRouter()
  const siteTheme = useTheme();
  const type = useSelector((state: RootStateOrAny) => state.theme);

  const [usedTheme, setUseTheme] = React.useState("");



  // TODO: dawn here there should be a merge of the site's theme, with the user's theme
  // const theme = createTheme(deepmerge(options1, options2));

  let myownpage
  if (session.userId) {
    myownpage = false
    if ("/" + session.username === router.asPath) {
      myownpage = true
    }
  }

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

  const userTheme = createTheme({
    palette: {
      primary: {
        main: "#ff0000",
      },
    },
  });



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

  // console.log("setting state modern userprofile", userprofile)
  // profile = React.getProfile()


  // TODO: needs to also be linked to state, for updates
  const linkMargin = 20
  // const linkMargin = userprofile.theme.linkSpacing ? userprofile.theme.linkSpacing : 20

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

  //

  return (
    <ThemeProvider theme={userTheme}>
      <div id="profile-main" style={{ minHeight: "100vh", backgroundColor: usedTheme === "mytheme" ? (theme.bgColor ? theme.bgColor : "#202A37") : babyTheme.bgColor }}>
        <header className="header-wrapper">
          <Grid container spacing={0} py={1}>
            <Grid spacing={{ xs: 12 }} display="flex" justifyContent="right" alignItems="center">
              <Suspense>
                <UserInfo />

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
              // justifyContent="center"
              // style={{ minHeight: "100vh" }}
            >

              <Button variant="modern1">
                testing button variants
              </Button>



              <Typography
                variant="h2"
                color="primary.main"
              >
                testing typography
              </Typography>



              <Typography
                variant="h1"
                color="primary.main"
              >
                why bigger on this page
              </Typography>

              <Box
                id="profile-card" // TODO: use mui?
                sx={{ minWidth: 380, padding: 2, borderRadius: 2 }} // , maxWidth: 420
              >

                <Typography
                  variant={theme.titleStyle}
                  alignItems={theme.linkAlign ? theme.linkAlign : "center"}
                  className="profile-text"
                  id="title"
                  // style={{ color: theme.titleColor ? theme.titleColor : "rgb(189,196,215)" }}
                >
                  {userprofile.title ? userprofile.title : userprofile.username}
                </Typography>

                {userprofile.description ? (
                  <Typography variant={theme.descriptionStyle} id="description" className="description"
                    // style={{ color: theme.descriptionColor ? theme.descriptionColor : "rgb(189,196,215)" }}
                  >
                    {userprofile.description}
                  </Typography>
                ) : (
                  ""
                )}

                <Box
                  display="flex"
                  alignItems={themes.linkAlign ? themes.linkAlign : "center"}
                  justifyContent={themes.linkAlign ? themes.linkAlign : "center"}
                >
                  <ul className="list-modern">
                    {sites.map((site) => (
                      <li key={site.id} style={{ marginTop: linkMargin }}>
                        {themes.links.style === "link" ? (
                          <Link href={site.url} target="_blank" className={themes.links.className}>
                            {site.title}
                          </Link>
                        ) : (
                          <Button
                            href={site.url}
                            style={{ width: themes.linkWidth ? themes.linkWidth : 200 }}
                            target="_blank"
                            // variant={theme.buttonStyle ? theme.buttonStyle : "outlined"}
                            variant={themes.links.variant ? themes.links.variant : "outlined"}
                            className={themes.links.className}
                            // startIcon={site.icon ? <FontAwesomeIcon icon={site.icon} size="lg" style={{ width: 17, height: 17 }} /> : ''}
                            startIcon={<ProfileLinkButton size={"xl"} icon={site.icon} />}
                          >
                            {site.title}
                          </Button>
                        )}
                      </li>
                    ))}
                  </ul>
                </Box>



                {/*<FacebookProvider appId="241448415049637">*/}
                {/*  /!*<EmbeddedPost href="https://www.facebook.com/amir.meshkin" width="500" />*!/*/}
                {/*  /!*width: 100px;*!/*/}
                {/*  /!*height: 100px;*!/*/}
                {/*  /!*background-color: #ff0000;*!/*/}
                {/*  <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />*/}

                {/*  <ShareButton href="http://www.facebook.com" />*/}
                {/*</FacebookProvider>*/}

              </Box>
            </Grid>


            {/*// TODO: dawn apps area is where we will show widgets, tik tok feed, etc*/}
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              App Area

              {/*// TODO: DECIDE. does show share buttons, other items come from theme or profile???*/}
              <Stack spacing={4}>
                {userprofile.theme.showShare &&
                  <Button
                    variant="contained"
                    onClick={() => {
                      shareFb()
                    }}
                    startIcon={<FontAwesomeIcon icon={faFacebook} style={{ width: 15, height: 15 }} />}
                  >
                    <span>share</span>
                  </Button>
                }
              </Stack>

            </Grid>

          </FacebookProvider>
        </main>
        {/*{ TODO: custom footer overrides }*/}
        <footer>
        <span>
          Sub Grow
        </span>

        </footer>
      </div>

    </ThemeProvider>
  )
}

export default Modern
