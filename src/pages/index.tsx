import React, { Suspense } from "react"
import Link from "next/link"
import { Routes, BlitzPage } from "@blitzjs/next"
import {Button, Typography, Stack, Chip} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2";

import { RootStateOrAny, useSelector } from "react-redux"
import HomeLayout from "core/layouts/HomeLayout"
import Hero from "components/home/Hero"
import PricingTables from "components/lists/PricingTables"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 *
 *       <div>
      <Heroarea />
      <Feature />
      <FeatureOne />
      <FeatureTwo />
      <Services />
      <Howitworks />
      <Screenshots />
      <Preface />
      <Pricing />
      <Testimonials />
      <Blog />
      <Contact />
      </div>
 */

const Home: BlitzPage = () => {
  // const theme = useSelector((state: RootStateOrAny) => state.theme)
  return (
    <HomeLayout title="Home" type="home">
      <main className="home-wrapper">
        {/*<Hero />*/}
        dashboard
        <ul>

          <li>
            <Link href="/dashboard">dashboard</Link>
          </li>

          <li>
            <Link href="/tester">profile</Link>
          </li>


          <li>
            <Link href="/apps">apps</Link>
          </li>

          <li>
            <Link href="/apps/facebook">Add Facebook App</Link>
          </li>

          <li>
            <Link href="/apps/tiktok">Add Tiktok App</Link>
          </li>



          <li>
            <Link href="/account/upgrade">upgrade</Link>
          </li>


          <p>unfinished</p>


          <li>
            <Link href="/themes">themes or templates</Link>
          </li>

          <li>
            <Link href="/pricing">pricing</Link>
          </li>


          <li>
            <Link href="/account/settings">settings</Link>
          </li>


        </ul>
        {/*<PricingTables />*/}


        <Grid container>
          <Grid xs={12} sm={12} md={6}>
            <Typography variant="h1">h1</Typography>

            <Typography variant="h2">h2</Typography>

            <Typography variant="h3">h3</Typography>

            <Typography variant="h4">h4</Typography>

            <Typography variant="h5">h5</Typography>

            <Typography variant="h6">h6</Typography>


            <Typography variant="body1">body1</Typography>

            <Typography variant="body2">body2</Typography>


          </Grid>

          <Grid xs={12} sm={12} md={6}>

            <Typography variant="h1">
              Site Buttons
            </Typography>
            <Stack spacing={4}>
              <Button variant="babyblue">babyblue</Button>

              <Button variant="addlink">addlink</Button>
              <Button variant="modern1">modern1</Button>
              <Button variant="classic1">classic1</Button>
              <Button variant="tornpaper1">tornpaper1</Button>
              <Button variant="classic1">classic1</Button>
            </Stack>

            <Typography variant="h1">
              User Buttons
            </Typography>
            <Stack spacing={4}>
              <Button variant="userhoney">userhoney</Button>
              <Button variant="userbabyblue">userbabyblue</Button>
              <Button variant="usernavyblue">usernavyblue</Button>
              <Button variant="useroranges">useroranges</Button>
              <Button variant="userseethrough">userseethrough</Button>
              <Button variant="userjungle">userjungle</Button>
              <Button variant="userjungle">userjungle</Button>
              <Button variant="userwu">userwu</Button>

            </Stack>



          </Grid>
        </Grid>



        <Grid container>
          <Grid xs={12} sm={12} md={6}>
            <Typography variant="h1">
              Chips
            </Typography>

            <Chip label="Save 20%" />

          </Grid>

          <Grid xs={12} sm={12} md={6}>

            <Typography variant="h1">
              Card
            </Typography>

            <Chip label="Save 20%" />



          </Grid>


        </Grid>





      </main>
    </HomeLayout>
  )
}

export default Home
