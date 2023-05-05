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
            <Link href="http://localhost:3000/dashboard">dashboard</Link>
          </li>


          <li>
            <Link href="http://localhost:3000/apps">apps</Link>
          </li>

          <li>
            <Link href="http://localhost:3000/apps/facebook">Add Facebook App</Link>
          </li>

          <li>
            <Link href="http://localhost:3000/tester">profile</Link>
          </li>
        </ul>
        {/*<PricingTables />*/}
      </main>
    </HomeLayout>
  )
}

export default Home
