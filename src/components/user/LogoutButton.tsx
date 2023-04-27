import React from "react"
import { useMutation } from "@blitzjs/rpc"
import logout from "../../auth/mutations/logout"
import { Button, Icon } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignOut } from "@fortawesome/pro-duotone-svg-icons"
import { misc } from "../../configs/colors/default"
import classNames from "classnames"
import {Routes} from "@blitzjs/next";

export const LogoutButton = () => {
  const [logoutMutation] = useMutation(logout)

  return (
    <Button
      onClick={async () => {

        await logoutMutation()
        Routes.Home()
      }}
      variant="contained"
      aria-label="Log Out"
      startIcon={
        <FontAwesomeIcon
          icon={faSignOut}
          style={{ color: misc.fa_primary, width: 15, height: 15 }}
        />
      }
    >
      <span>Log Out</span>
    </Button>
  )
}

export default LogoutButton
