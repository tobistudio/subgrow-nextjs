import { useRouter } from "next/router"
import { Routes } from "@blitzjs/next"
import React from "react"
import { Button } from "@mui/material"

import { faUser } from "@fortawesome/pro-duotone-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { misc } from "configs/colors/default"

export const SignupButton = () => {
  const router = useRouter()

  return (
    <Button
      onClick={async () => {
        await router.push(Routes.SignupPage())
      }}
      variant="contained"
      aria-label="Sign Up"
      startIcon={
        <FontAwesomeIcon icon={faUser} style={{ color: misc.fa_primary, width: 15, height: 15 }} />
      }
    >
      <span>Sign Up</span>
    </Button>
  )
}

export default SignupButton
