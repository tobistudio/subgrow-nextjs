// @ts-nocheck
import React, { Suspense } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from "account/stripe/CheckoutForm"
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
  Chip,
  RadioGroup,
  FormControl,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Button,
} from "@mui/material"

// TODO: add stripe subscriptions
// https://stripe.com/docs/billing/subscriptions/coupons

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const LoadingSvg = React.lazy(() => import("assets/svg/LoadingSvg"))

console.log(
  "process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY",
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
)
export default function PaymentPage() {
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
                <CardHeader title="Your Subscription" />

                <CardContent>
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Billing Cycle</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={
                          <>
                            <Radio />
                            <Typography variant="radiolabel">Monthly</Typography>
                          </>
                        }
                        label=""
                      />
                      <FormControlLabel
                        value="male"
                        control={
                          <>
                            <Radio />
                            <Typography variant="radiolabel" pr={1}>
                              Annual
                            </Typography>
                            <Chip label="Save 20%" />
                          </>
                        }
                        label=""
                      />
                    </RadioGroup>
                  </FormControl>

                  {/*<Typography variant="h6">asd</Typography>*/}

                  <Stack direction="row" spacing={2}>
                    <Typography variant="body1">{upgradePlanName}</Typography>

                    <Typography variant="body1">$10</Typography>
                  </Stack>

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
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Suspense>
    </AdminLayout>
  )
}
