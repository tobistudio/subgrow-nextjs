import { useCurrentUser } from "../../users/hooks/useCurrentUser"
import { useMutation } from "@blitzjs/rpc"
import logout from "../../auth/mutations/logout"
import { useRouter } from "next/router"
import Link from "next/link"
import { Routes } from "@blitzjs/next"
import React from "react"
import { Box, Typography, Container, Button, Stack, IconButton } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2" // Grid version 2
// import { Dropdown } from "components/ui"
// import LanguageSelector from "components/template/LanguageSelector"
// import Notification from "components/template/Notification"
// import SideNavToggle from "components/template/SideNavToggle"

import UserDropdown from "components/template/UserDropdown"
import { faRightToBracket, faUserPlus } from "@fortawesome/pro-duotone-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const router = useRouter()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <>
        {/*<LanguageSelector />*/}
        {/*<Notification />*/}
        {/*<SidePanel />*/}
        <Grid
          container
          // justify="flex-end"
          alignItems="center"
          justifyContent="flex-end"
          spacing={2}
          my={2}
          mr={3}
        >
          <Grid xs={8} alignContent="right">
            <UserDropdown hoverable={false} />
          </Grid>
          <Grid xs={4} pr={6}>
            <Button
              onClick={async () => {
                await logoutMutation()
              }}
              variant="contained"
              // aria-label="Logout"
              // edge="start"
            >
              <strong>Logout</strong>
            </Button>
          </Grid>
        </Grid>
      </>
    )
  } else {
    return (
      <Stack direction="row" spacing={2} my={2} mr={3}>
        <Button
          onClick={async () => {
            await router.push(Routes.SignupPage())
          }}
          variant="contained"
          aria-label="Sign Up"
          //edge="start"
        >
          <FontAwesomeIcon icon={faUserPlus} style={{ color: "#e5e6f1", paddingRight: 7 }} />
          <span>Sign Up</span>
        </Button>

        <Button
          variant="outlined"
          // color="inherit"
          //aria-label={t('login')}
          //edge="start"
          onClick={async () => {
            await router.push(Routes.LoginPage())
          }}
        >
          <FontAwesomeIcon icon={faRightToBracket} style={{ color: "#3647af", paddingRight: 7 }} />
          <span>Login</span>
        </Button>
      </Stack>
    )
  }
}

export default UserInfo

// TODO: after upgrade
// TODO: Error: No resolver for path: /src/users/queries/getUser
