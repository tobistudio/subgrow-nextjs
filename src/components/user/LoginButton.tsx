import { useCurrentUser } from "../../users/hooks/useCurrentUser"
import { useMutation } from "@blitzjs/rpc"
import logout from "../../auth/mutations/logout"
import { useRouter } from "next/router"
import Link from "next/link"
import { BlitzLayout, Routes } from "@blitzjs/next"
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

const LoginButton = ({ title }) => {
  const router = useRouter()

  return (
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
      <span>{title}</span>
    </Button>
  )
}

export default LoginButton
