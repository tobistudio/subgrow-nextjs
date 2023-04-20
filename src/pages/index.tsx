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
        <Hero />
        {/*<Grid className="display">*/}
        {/*  <Cell small={2} large={4}></Cell>*/}
        {/*  <Cell small={4} large={4}></Cell>*/}
        {/*  <Cell small={6} large={4}>*/}
        {/*    4 columns*/}
        {/*  </Cell>*/}
        {/*</Grid>*/}

        <PricingTables />
      </main>
    </HomeLayout>
  )
}

export default Home
