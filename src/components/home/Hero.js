import React, { Component } from "react"
import { Box, Typography, Container, Button, Stack } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2" // Grid version 2
import Image from "next/image"
import homedata from "../../../data/homedata.json"

class Hero extends Component {
  render() {
    return (
      <section className="hero-area circle-wrap full-height">
        <div className="circle x1"></div>
        <div className="circle x2"></div>
        <div className="circle x3"></div>
        <div className="circle x4"></div>
        <div className="circle x5"></div>
        <div className="circle x6"></div>
        <div className="circle x7"></div>
        <div className="circle x8"></div>
        <div className="circle x9"></div>
        <div className="circle x10"></div>

        <Grid
          container
          spacing={2}
          // direction="column" // does opposite
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid xs={3}>
            <Typography variant="h2" className="text-capitalize m-25px-b">
              {homedata.heroarea.title}
            </Typography>
            <Typography variant="caption" className="m-25px-b">
              {homedata.heroarea.content}
            </Typography>

            <Stack direction="row" spacing={2} my={2} mr={3}>
              <Button variant="contained" type="submit" mr={3}>
                {homedata.heroarea.btn1label}
              </Button>

              <Button variant="contained" type="submit">
                {homedata.heroarea.btn2label}
              </Button>
            </Stack>
          </Grid>
          <Grid xs={3}>
            <Image
              width={100}
              height={100}
              className="hero-mock"
              src={homedata.heroarea.imgurl1}
              alt="Hero mockup"
            />
          </Grid>
        </Grid>
      </section>
    )
  }
}

export default Hero
