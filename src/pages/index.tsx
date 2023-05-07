import React, { Suspense } from "react"
import Link from "next/link"
import { Routes, BlitzPage } from "@blitzjs/next"
import { Box, Typography, Grid } from "@mui/material"
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
      <main>
        {/*<Hero />*/}

        <ul>

          <li>
            <Link href="/dashboard">dashboard</Link>
          </li>


          <li>
            <Link href="/apps">apps</Link>
          </li>

          <li>
            <Link href="/apps/facebook">Add Facebook App</Link>
          </li>

          <li>
            <Link href="/tester">profile</Link>
          </li>

          <li>
            <Link href="/account/upgrade">upgrade</Link>
          </li>


          <p>unfinished</p>


          <li>
            <Link href="/pricing">upgrade</Link>
          </li>


          <li>
            <Link href="/account/settings">settings</Link>
          </li>


        </ul>
        {/*<PricingTables />*/}


        <Grid container>
          <Grid xs={6}>
            <Typography variant="h1">h1</Typography>

            <Typography variant="h2">h2</Typography>

            <Typography variant="h3">h3</Typography>

            <Typography variant="h4">h4</Typography>

            <Typography variant="h5">h5</Typography>

            <Typography variant="h6">h6</Typography>





          </Grid>

          <Grid xs={6}>
a
          </Grid>
        </Grid>


      </main>
    </HomeLayout>
  )
}

export default Home
