import React from "react"
import { Button } from "@mui/material"
import { faUser } from "@fortawesome/pro-duotone-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { misc } from "configs/colors/default"
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
        <FontAwesomeIcon
          icon={faUser}
          size="sm"
          style={{ color: misc.fa_secondary, width: 15, height: 15 }}
        />
      }
    >
      <span>Profile</span>
    </Button>
  )
}

ProfileButton.displayName = "ProfileButton"
export default ProfileButton
