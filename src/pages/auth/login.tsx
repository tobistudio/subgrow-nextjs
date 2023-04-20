import { BlitzPage, Routes } from "@blitzjs/next"
import AdminLayout from "core/layouts/AdminLayout"
import HomeLayout from "core/layouts/HomeLayout"
import { LoginForm } from "auth/components/LoginForm"
import { useRouter } from "next/router"
import {
  Box,
  Typography,
  Container,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import Link from "next/link"
import React from "react" // Grid version 2

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <HomeLayout title="Log In" type="login" rootClass="bg-login">
      <main>
        <Grid
          container
          spacing={2}
          // direction="column" // does opposite
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid xs={8} alignContent="center" justifyContent="center" px={10}>
            <LoginForm
              onSuccess={(_user) => {
                console.log("onSuccess")
                const next = router.query.next
                  ? decodeURIComponent(router.query.next as string)
                  : "/dashboard"
                return router.push(next)
              }}
            />
            {/*<Stack direction="row" spacing={2} mt={2}>*/}
            {/*  <Typography variant="body1">*/}
            {/*    <Link href={Routes.ForgotPasswordPage()}>Forgot your password?</Link>*/}
            {/*  </Typography>*/}
            {/*  <Typography variant="body1">*/}
            {/*    Don&rsquo;t have an account yet? <Link href={Routes.SignupPage()}>Sign Up</Link>*/}
            {/*  </Typography>*/}

            {/*</Stack>*/}
          </Grid>
        </Grid>
      </main>
    </HomeLayout>
  )
}

export default LoginPage
