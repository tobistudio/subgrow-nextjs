import { useCurrentUser } from "../../users/hooks/useCurrentUser"
import { useRouter } from "next/router"
import React from "react"
import { Stack } from "@mui/material"
import ProfileDesignPanel from "components/template/SidePanel/ProfileDesignPanel"
import { useSession } from "@blitzjs/auth"

const UserInfo = () => {
  const currentUser = useSession()

  // currentUser not linked to blitz session
  // const currentUser = useCurrentUser()
  const router = useRouter()

  if (currentUser.userId) {
    let myownpage = false

    if ("/" + currentUser.username === router.asPath) {
      myownpage = true
    }

    return (
      <Stack direction="row" spacing={2}>
        {myownpage && <ProfileDesignPanel />}
      </Stack>
    )
  } else {
    return (
      <></>)
  }
}

export default UserInfo
