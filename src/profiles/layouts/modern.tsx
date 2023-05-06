import AdminLayout from "../../core/layouts/AdminLayout"
import Head from "next/head"
import Link from "next/link"
import { Routes } from "@blitzjs/next"
import React, { Suspense, useLayoutEffect, useState } from "react"
//import { ProfilesList } from "../../pages/profiles"
import { FacebookProvider } from "react-facebook"
import { createTheme } from '@mui/material';
import { Provider, RootStateOrAny, useSelector } from "react-redux"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import {
  Box,
  Typography,
  Container,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  CardHeader,
} from "@mui/material"

import { ThemeProvider, styled } from '@mui/material/styles';

import Grid from "@mui/material/Unstable_Grid2"
import { PromiseReturnType } from "blitz"
import login from "../../auth/mutations/login"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/pro-duotone-svg-icons";
import { misc } from "../../configs/colors/default";
import ProfileLinkButton from "../components/ProfileLinkButton";
import UserInfo from "../../components/user/UserInfo";
import classNames from "classnames";
import { faPalette } from "@fortawesome/pro-light-svg-icons";
import SidePanelHeaderToggle from "../../components/template/SidePanel/SidePanelHeaderToggle";
import { useMutation } from "@blitzjs/rpc";
import updateLinkOrder from "../../sites/mutations/updateLinkOrder";
import { useTheme } from "@mui/material/styles";
import { useSession } from "@blitzjs/auth";
import { useRouter } from "next/router";
import ProfileButton from "../../components/user/ProfileButton";
import { green, purple } from '@mui/material/colors';

// TODO: perhaps use CreateTheme from mui to create this theme instead of userthemes/modern.tsx

// export const LoginForm = (props: LoginFormProps) => {

const Modern = ({ user, profile, sites }) => {
  const session = useSession()
  const theme = profile.theme // This is the user's theme


  // currentUser not linked to blitz session
  // const currentUser = useCurrentUser()
  const router = useRouter()
  let myownpage
  if (session.userId) {
    myownpage = false
    if ("/" + session.username === router.asPath) {
      myownpage = true
    }
  }

  const siteTheme = useTheme();

  console.log("siteTheme", siteTheme)
  console.log("user profile theme", theme)


  // TODO: dawn mui override system
  // Override mui theme with user theme values!
  // const userTheme = createTheme(siteTheme, {
  //   palette: {
  //     mode: 'light',
  //     primary: {
  //       // main: theme.palette.secondary.main,
  //       main: "#d1c9c9",
  //     },
  //     secondary: {
  //       main: green[500],
  //     },
  //   },
  // });

  const type = useSelector((state) => state?.theme.mode)


  const userTheme = createTheme({
    palette: {
      mode: type,
      primary: {
        main: '#2678dd',
      },
      secondary: {
        main: '#BF616A',
      },
    },
  });

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

  const linkMargin = userprofile.theme.linkSpacing ? userprofile.theme.linkSpacing : 20

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

  // userTheme

  return (
    <ThemeProvider theme={userTheme}>
      <div id="profile-main" style={{ minHeight: "100vh", backgroundColor: theme.bgColor ? theme.bgColor : "#202A37" }}>
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

              <Button variant="babyblue">
                testing button variants
              </Button>



              <Typography
                variant="h1"
                color="primary.main"
              >
                testing typography
              </Typography>



              <Typography
                variant="h1"
                color="primary.main"
              >
                dynamic
              </Typography>

              <Box
                id="profile-card" // TODO: use mui?
                sx={{ minWidth: 380, maxWidth: 420 }} // TODO: user settings may be a bit much
              // style={{backgroundColor: theme.bgCardColor ? theme.bgCardColor : "rgba(206,199,199,0.8)"}}
              //style={{ backgroundColor: theme.bgCardColor ? theme.bgCardColor : "rgb(189,196,215)" }}
              >
                <div>
                  <Typography
                    variant={theme.titleStyle}
                    alignItems={theme.linkAlign ? theme.linkAlign : "center"}
                    className="profile-text"
                    id="title"
                    style={{ color: theme.titleColor ? theme.titleColor : "rgb(189,196,215)" }}
                  >
                    {userprofile.title ? userprofile.title : userprofile.username}
                  </Typography>

                  {userprofile.description ? (
                    <Typography variant={theme.descriptionStyle} id="description" className="profile-text description" style={{ color: theme.descriptionColor ? theme.descriptionColor : "rgb(189,196,215)" }}>
                      {userprofile.description}
                    </Typography>
                  ) : (
                    ""
                  )}

                  <Box
                    display="flex"
                    alignItems={theme.linkAlign ? theme.linkAlign : "center"}
                    justifyContent={theme.linkAlign ? theme.linkAlign : "center"}
                  >
                    <ul className="list-modern">
                      {sites.map((site) => (
                        <li key={site.id} style={{ marginTop: linkMargin }}>
                          {theme.linkType === "link" ? (
                            <Link href={site.url} target="_blank" className={theme.linkStyle}>
                              {site.title}
                            </Link>
                          ) : (
                            <Button
                              href={site.url}
                              style={{ width: theme.linkWidth ? theme.linkWidth : 200 }}
                              target="_blank"
                              variant={theme.buttonStyle ? theme.buttonStyle : "outlined"}
                              className={theme.linkStyle ? theme.linkStyle : "outlined"}
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
                </div>
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
