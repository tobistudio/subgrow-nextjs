import { useCurrentUser } from "../../users/hooks/useCurrentUser"

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
import LoginButton from "./LoginButton"
import SignupButton from "./SignupButton"
import LogoutButton from "./LogoutButton"
import ProfileButton from "./ProfileButton"
import ProfileDesignPanel from "components/template/SidePanel/ProfileDesignPanel"

// const ProfileDesignPanel = React.lazy(
//   () => import("components/template/SidePanel/ProfileDesignPanel")
// )

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const router = useRouter()
  //const username = useParam("username", "string")

  console.log("router", router)

  if (currentUser) {
    let myownpage = false

    if ("/" + currentUser.username === router.asPath) {
      myownpage = true
    }

    return (
      <Stack direction="row" spacing={2} my={2} mr={3}>
        {/*{ TODO: show edit button if on your own profile page   }*/}

        {myownpage ? <ProfileDesignPanel /> : <ProfileButton username={currentUser.username} />}

        <LogoutButton />
      </Stack>
    )
  } else {
    return (
      <Stack direction="row" spacing={2} my={2} mr={3}>
        <SignupButton />
        <LoginButton title="login" />
      </Stack>
    )
  }
}

export default UserInfo
