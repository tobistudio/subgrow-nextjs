import { BlitzPage } from "@blitzjs/next"
import HomeLayout from "core/layouts/HomeLayout"
import { LoginForm } from "auth/components/LoginForm"
import { useRouter } from "next/router"
import Grid from "@mui/material/Unstable_Grid2"
import React from "react" // Grid version 2
//  rootClass="bg-login"
const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <HomeLayout title="Log In" type="login">
        <Grid
          container
          //spacing={2}
          // direction="column" // does opposite
          alignItems="center"
          justifyContent="center"
          // sx={{
          //   p: {
          //     xs: 3,
          //     md: 3
          //   },
          // }}
        >
          <Grid
            className={"firstgrid"}
            xs={12}
            alignContent="center"
            justifyContent="center"
            px={1}
          >
            <LoginForm
              onSuccess={(_user) => {
                console.log("onSuccess")
                const next = router.query.next
                  ? decodeURIComponent(router.query.next as string)
                  : "/dashboard"
                return router.push(next)
              }}
            />
          </Grid>
        </Grid>

    </HomeLayout>
  )
}

export default LoginPage
