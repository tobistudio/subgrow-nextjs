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
import { faRightToBracket, faUser, faSignOut } from "@fortawesome/pro-duotone-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { misc } from "configs/colors/default"

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const router = useRouter()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <Grid
        container
        // justify="flex-end"
        // alignItems="center"
        justifyContent="flex-end"
        spacing={2}
        my={2}
        mr={3}
      >
        <Stack direction="row" spacing={2} my={2} mr={3}>
          <Button
            onClick={async () => {
              // await router.push(Routes.SignupPage())
              await router.push("/" + currentUser.username)
            }}
            variant="outlined"
            aria-label="Profile"
            //edge="start"
          >
            {/*<FontAwesomeIcon icon={faUser} style={{ color: "#0014ee", paddingRight: 7 }} />*/}
            <FontAwesomeIcon icon={faUser} style={{ color: "#0014ee", paddingRight: 7 }} />
            <span>Profile</span>
          </Button>

          <Button
            onClick={async () => {
              await logoutMutation()
            }}
            variant="contained"
            aria-label="Logout"
          >
            <FontAwesomeIcon icon={faSignOut} style={{ color: "#e5e6f1", paddingRight: 7 }} />
            <span>Logout</span>
          </Button>
        </Stack>
      </Grid>
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
          <FontAwesomeIcon icon={faUser} style={{ color: misc.ff_secondary, paddingRight: 7 }} />
          <span>Sign Up</span>
        </Button>

        <Button
          variant="outlined"
          onClick={async () => {
            await router.push(Routes.LoginPage())
          }}
        >
          <FontAwesomeIcon
            icon={faRightToBracket}
            style={{ color: misc.ff_primary, paddingRight: 7 }}
          />
          <span>Login</span>
        </Button>
      </Stack>
    )
  }
}

export default UserInfo

// TODO: after upgrade
// TODO: Error: No resolver for path: /src/users/queries/getUser
