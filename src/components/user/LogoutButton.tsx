import React from "react"
import { useMutation } from "@blitzjs/rpc"
import logout from "../../auth/mutations/logout"
import { Button } from "@mui/material"
import { faSignOut } from "@fortawesome/pro-duotone-svg-icons"
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
      <FontAwesomeIcon icon={faSignOut} style={{ color: "#e5e6f1", paddingRight: 7 }} size="sm" />
      <span>Log Out</span>
    </Button>
  )
}

export default LogoutButton
