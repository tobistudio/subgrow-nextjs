import { useCurrentUser } from "../../users/hooks/useCurrentUser"
import { useMutation } from "@blitzjs/rpc"
import logout from "../../auth/mutations/logout"
import React from "react"
import { Button } from "@mui/material"
import { faRightToBracket, faUser, faSignOut } from "@fortawesome/pro-duotone-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const LogoutButton = () => {
  const [logoutMutation] = useMutation(logout)

  return (
    <Button
      onClick={async () => {
        await logoutMutation()
      }}
      variant="contained"
      aria-label="Log Out"
    >
      <FontAwesomeIcon icon={faSignOut} style={{ color: "#e5e6f1", paddingRight: 7 }} />
      <span>Log Out</span>
    </Button>
  )
}

export default LogoutButton
