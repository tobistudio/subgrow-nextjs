import { useRouter } from "next/router"
import { Routes } from "@blitzjs/next"
import React from "react"
import { Button } from "@mui/material"
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
      startIcon={
        <FontAwesomeIcon
          icon={faRightToBracket}
          style={{ color: misc.fa_primary, width: 15, height: 15 }}
        />
      }
    >
      <span>{title}</span>
    </Button>
  )
}

export default LoginButton
