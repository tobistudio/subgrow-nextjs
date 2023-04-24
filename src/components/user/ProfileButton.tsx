import React from "react"
import { Button } from "@mui/material"
import { faRightToBracket, faUser, faSignOut } from "@fortawesome/pro-duotone-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { useRouter } from "next/router"

export const ProfileButton = (username) => {
  const router = useRouter()
  return (
    <Button
      onClick={async () => {
        // await router.push(Routes.SignupPage())
        await router.push("/" + username.username)
      }}
      variant="outlined"
      aria-label="Profile"
      startIcon={
        <FontAwesomeIcon icon={faUser} size="sm" style={{ color: "#0014ee", paddingRight: 7 }} />
      }
    >
      <span>Profile</span>
    </Button>
  )
}

ProfileButton.displayName = "ProfileButton"
export default ProfileButton
