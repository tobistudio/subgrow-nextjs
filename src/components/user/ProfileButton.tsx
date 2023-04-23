import { useCurrentUser } from "../../users/hooks/useCurrentUser"
import { useMutation } from "@blitzjs/rpc"
import logout from "../../auth/mutations/logout"
import React from "react"
import { Button } from "@mui/material"
import { faRightToBracket, faUser, faSignOut } from "@fortawesome/pro-duotone-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BlitzLayout } from "@blitzjs/next"
import { useRouter } from "next/router"

interface ProfileButtonProps {
  username: unknown
}
export const ProfileButton = (username) => {
  // const ProfileButton = React.forwardRef((username, ref) => {

  // const ProfileButton: BlitzLayout<{ title?: string; username?: string }> = ({ title, username }) => {

  //const username = props.username
  const router = useRouter()

  return (
    <Button
      onClick={async () => {
        // await router.push(Routes.SignupPage())
        await router.push("/" + username)
      }}
      variant="outlined"
      aria-label="Profile"
      //edge="start"
    >
      {/*<FontAwesomeIcon icon={faUser} style={{ color: "#0014ee", paddingRight: 7 }} />*/}
      <FontAwesomeIcon icon={faUser} style={{ color: "#0014ee", paddingRight: 7 }} />
      <span>Profile</span>
    </Button>
  )
}

ProfileButton.displayName = "ProfileButton"
export default ProfileButton
