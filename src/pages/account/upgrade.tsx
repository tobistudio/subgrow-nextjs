// @ts-nocheck
import React, { Suspense } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from "account/CheckoutForm"
import AdminLayout from "../../core/layouts/AdminLayout"
import Head from "next/head"
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  Stack,
  Radio,
  RadioGroup,
  FormControl,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Button,
} from "@mui/material"

import { DashboardBox } from "../dashboard"

// TODO: add stripe subscriptions
// https://stripe.com/docs/billing/subscriptions/coupons

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.

// @ts-ignore
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const LoadingSvg = React.lazy(() => import("assets/svg/LoadingSvg"))

console.log(
  "process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY",
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
)
export default function App() {
  const [clientSecret, setClientSecret] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const product = {
    items: [
      {
        id: "xl-tshirt",
      },
    ],
  }

  React.useEffect(() => {
    setIsLoading(true)
    // Create PaymentIntent as soon as the page loads
    fetch("/api/account/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .then(() => setIsLoading(false))
  }, [])

  const appearance = {
    theme: "stripe",
  }
  const options = {
    clientSecret,
    appearance,
  }

  const upgradePlanName = "Gold Subscription"

  return (
    <AdminLayout>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Suspense fallback={<LoadingSvg />}>
        <Box>
          <Grid container spacing={{ xs: 2, md: 3, lg: 6 }}>
            <Grid item xs={8}>
              <Card variant="outlined">
                <CardHeader title="Payment" />

                <CardContent>
                  {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                      <CheckoutForm />
                    </Elements>
                  )}
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4} pl={5}>
              <Card variant="outlined">
                <CardHeader title={upgradePlanName} />

                <CardContent>
                  <Typography variant="h6">
                    Annual <span>Save 20%</span>
                  </Typography>

                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Billing Cycle</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="female" control={<Radio />} label="Monthly" />
                      <FormControlLabel value="male" control={<Radio />} label="Annual" />
                    </RadioGroup>
                  </FormControl>

                  <Typography variant="h6">asd</Typography>

                  <Stack direction="row" spacing={2}>
                    <Typography variant="body1">Monthly</Typography>

                    <Typography variant="body1">$10</Typography>

                    {isLoading ? (
                      <LoadingSvg />
                    ) : (
                      <Button
                        disabled={isLoading || !stripePromise}
                        id="submit"
                        variant={"contained"}
                      >
                        PAY NOW
                      </Button>
                    )}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Suspense>
    </AdminLayout>
  )
}
