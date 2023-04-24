import React from "react"
import { useMutation } from "@blitzjs/rpc"
import logout from "../../auth/mutations/logout"
import { Button } from "@mui/material"
import { faSignOut, faUser } from "@fortawesome/pro-duotone-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { misc } from "../../configs/colors/default"

export const LogoutButton = () => {
  const [logoutMutation] = useMutation(logout)

  return (
    <Button
      onClick={async () => {
        await logoutMutation()
      }}
      variant="contained"
      aria-label="Log Out"
      startIcon={
        <FontAwesomeIcon icon={faSignOut} style={{ color: misc.fa_primary, paddingRight: 7 }} />
      }
    >
      <span>Log Out</span>
    </Button>
  )
}

export default LogoutButton
