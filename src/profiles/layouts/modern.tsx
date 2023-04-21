import AdminLayout from "../../core/layouts/AdminLayout"
import Head from "next/head"
import Link from "next/link"
import { Routes } from "@blitzjs/next"
import React, { Suspense, useLayoutEffect } from "react"
//import { ProfilesList } from "../../pages/profiles"
import { FacebookProvider } from "react-facebook"
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
import Grid from "@mui/material/Unstable_Grid2"
import { PromiseReturnType } from "blitz"
import login from "../../auth/mutations/login"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type LoginFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof login>) => void
}

// export const LoginForm = (props: LoginFormProps) => {

const Modern = ({ user, profile, sites }) => {
  const theme = profile.theme
  console.log("theme", theme)
  const linkMargin = theme.linkSpacing ? theme.linkSpacing : 20

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

  // useLayoutEffect(() => {
  //   // no provider without init
  //   window.FB.init({
  //     appId            : '241448415049637',
  //     autoLogAppEvents : true,
  //     xfbml            : true,
  //     version          : 'v16.0'
  //   });
  //   window.FB.api(
  //     "/{user-id}/posts",
  //     function (response) {
  //       if (response && !response.error) {
  //         console.log("posts response", response)
  //       }
  //     }
  //   );
  // }, []);

  // useEffect(() => {
  //   window.fbAsyncInit = () => {
  //     window.FB.init({
  //       appId            : '241448415049637',
  //       autoLogAppEvents : true,
  //       xfbml            : true,
  //       version          : 'v16.0'
  //     });
  //
  //     // https://stackoverflow.com/questions/13944940/facebook-javascript-sdk-uncaught-typeerror-cannot-read-property-userid-of-und
  //
  //
  //     // will only work with https
  //     // window.FB.getLoginStatus(function(response) {
  //     //   const uid = response.authResponse && response.authResponse.userID;
  //     //   console.log("uid",uid);
  //     // });
  //
  //   };
  //
  //
  {
    /*  // (function (d, s, id) {*/
  }
  //   //   var js, fjs = d.getElementsByTagName(s)[0];
  //   //   if (d.getElementById(id)) { return; }
  //   //   js = d.createElement(s); js.id = id;
  //   //   js.src = "https://connect.facebook.net/en_US/sdk.js";
  //   //   fjs.parentNode.insertBefore(js, fjs);
  //   // }(document, 'script', 'facebook-jssdk'));
  //
  //
  //
  // }, []);

  return (
    <main style={{ backgroundColor: theme.bgColor ? theme.bgColor : "#202A37" }}>
      <FacebookProvider appId="241448415049637">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Card
            sx={{ minWidth: 380, maxWidth: 420 }}
            // style={{backgroundColor: theme.bgCardColor ? theme.bgCardColor : "rgba(206,199,199,0.8)"}}
            style={{ backgroundColor: theme.bgCardColor ? theme.bgCardColor : "rgb(189,196,215)" }}
          >
            {/*<CardHeader*/}
            {/*  title={profile.title ? profile.username : profile.username}*/}
            {/*  variant={theme.titleStyle}*/}
            {/*/>*/}
            <CardContent>
              <Typography
                variant={theme.titleStyle}
                alignItems={theme.linkAlign ? theme.linkAlign : "center"}
              >
                {profile.title ? profile.title : profile.username}
              </Typography>

              {/*{profile.description*/}
              {/*  ? profile.description*/}
              {/*  : ''*/}
              {/*}*/}

              {profile.description ? (
                <Typography variant={theme.descriptionStyle}>{profile.description}</Typography>
              ) : (
                ""
              )}

              <Box
                display="flex"
                // width={500} height={80}
                //bgcolor="lightgreen"
                alignItems={theme.linkAlign ? theme.linkAlign : "center"}
                justifyContent={theme.linkAlign ? theme.linkAlign : "center"}
              >
                <ul className="list-modern">
                  {sites.map((site) => (
                    <li key={site.id} style={{ marginTop: linkMargin }}>
                      {theme.linkType === "link" ? (
                        <Link href={site.url} target="_blank" className={theme.linkStyle}>
                          {site.name}
                        </Link>
                      ) : (
                        <Button
                          href={site.url}
                          style={{ width: theme.linkWidth ? theme.linkWidth : 200 }}
                          target="_blank"
                          variant={theme.buttonStyle ? theme.buttonStyle : "outlined"}
                          className={theme.linkStyle ? theme.linkStyle : "outlined"}
                        >
                          {site.name}
                        </Button>
                      )}
                    </li>
                  ))}
                </ul>
              </Box>

              {/*<ShareButton href="https://www.facebook.com" className="my-classname">*/}
              {/*  Share*/}
              {/*</ShareButton>*/}

              <br />
              <br />
              <Button
                variant="contained"
                onClick={() => {
                  shareFb()
                }}
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="pr-2"
                  style={{ width: 20, height: 20 }}
                />
                <span>share</span>
              </Button>

              {/*<FacebookProvider appId="241448415049637">*/}
              {/*  /!*<EmbeddedPost href="https://www.facebook.com/amir.meshkin" width="500" />*!/*/}
              {/*  /!*width: 100px;*!/*/}
              {/*  /!*height: 100px;*!/*/}
              {/*  /!*background-color: #ff0000;*!/*/}
              {/*  <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />*/}

              {/*  <ShareButton href="http://www.facebook.com" />*/}
              {/*</FacebookProvider>*/}
            </CardContent>
          </Card>
        </Grid>
      </FacebookProvider>
    </main>
  )
}

export default Modern
