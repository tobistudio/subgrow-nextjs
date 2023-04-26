import React from "react"
import { RootStateOrAny, useSelector } from "react-redux"
import { Container, Grid, Stack } from "@mui/material"

export default function PricingTables() {
  const theme = useSelector((state: RootStateOrAny) => state.theme)
  //<Box sx={{ flexGrow: 1 }}>
  return (
    <section className="package_sec pricing-tables">
      <Container
        fixed
        // maxWidthXs={1200} // gives error, api wrong
        maxWidth="xl"
      >
        <Grid display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
          {/*<div>*/}
          {/*  <Typography variant="h1" color={theme.mode === "dark" ? "text.light" : "text.dark"}>*/}
          {/*    Go Premium*/}
          {/*  </Typography>*/}
          {/*</div>*/}

          <Stack direction="row" spacing={2}>
            <div className="item first">
              <div className="package_block">
                <h3>Silver</h3>
                <div className="price">
                  $125 <small>/month</small>
                </div>
                <ul className="package_list">
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>10GB Storage
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>40GB Bandwidth
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>1 SQL Database
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>5 Email<span> Account</span>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>Free Domain
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>24/7 Support
                  </li>
                </ul>
                <div className="btn-block text-center">
                  <a href="#" className="buy_btn radial-out">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div className="item center active">
              <div className="package_block">
                <h3>Gold</h3>

                <div className="price">
                  $150 <small>/month</small>
                </div>

                <ul className="package_list">
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>10GB Storage
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>40GB <span>Bandwidth</span>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>1 SQL Database
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>5 Email Account
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>Free Domain
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>24/7 Support
                  </li>
                </ul>
                <div className="btn-block text-center">
                  <a href="#" className="buy_btn radial-out">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="package_block">
                <h3>Platinium</h3>

                <div className="price">
                  $175<small>/month</small>
                </div>

                <ul className="package_list">
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>100GB Storage
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>400GB Bandwidth
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>5 SQL <span>Database</span>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>10 Email Account
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>5 Free Domain
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>24/7 Support
                  </li>
                </ul>
                <div className="btn-block text-center">
                  <a href="#" className="buy_btn radial-out">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </Stack>
        </Grid>
      </Container>
    </section>
  )
}
