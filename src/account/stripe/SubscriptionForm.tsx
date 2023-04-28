// @ts-nocheck
import React from "react"
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js"
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  Button,
  InputAdornment
} from "@mui/material"
import { TextField } from "mui-rff"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/pro-duotone-svg-icons"
import { misc } from "../../configs/colors/default"

const LoadingSvg = React.lazy(() => import("assets/svg/LoadingSvg"))

export default function SubscriptionForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const upgradePlanName = "Gold Subscription"
  const upgradePlanId = "gold"

  // React.useEffect(() => {
  //   if (!stripe) {
  //     return
  //   }
  //
  //   const clientSecret = new URLSearchParams(window.location.search).get(
  //     "payment_intent_client_secret"
  //   )
  //
  //   if (!clientSecret) {
  //     return
  //   }
  //
  //   stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
  //     switch (paymentIntent.status) {
  //       case "succeeded":
  //         setMessage("Payment succeeded!")
  //         break
  //       case "processing":
  //         setMessage("Your payment is processing.")
  //         break
  //       case "requires_payment_method":
  //         setMessage("Your payment was not successful, please try again.")
  //         break
  //       default:
  //         setMessage("Something went wrong.")
  //         break
  //     }
  //   })
  // }, [stripe])

  const createSubscription = async (e) => {
    // create a payment method

    console.log("e", e.target.value)

    // :1 Uncaught (in promise) IntegrationError: Invalid value for createPaymentMethod: card should be an object or element. You specified: null.
    //

    let product = {
      name: "blah",
      email: "amir.meshkin@gmail.com",
      priceId: "gold",
    }

    const paymentMethod = await stripe?.createPaymentMethod({
      type: "card",
      card: elements?.getElement(CardElement)!,
      billing_details: {
        name: product.name,
        product: product.email,
      },
    })

    // call the backend to create subscription
    const response = await fetch("http://localhost:3000/api/account/create-subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }).then((res) => res.json())

    // confirm the payment by the user
    const confirmPayment = await stripe?.confirmCardPayment(response.clientSecret)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    setIsLoading(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000",
      },
    })

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message)
    } else {
      setMessage("An unexpected error occurred.")
    }

    setIsLoading(false)
  }

  const handleChange = async (e) => {
    if (!stripe || !elements || !e.value.email) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    if (e.value.email.length > 5) {
      console.log("e.target", e.value.email)
      setEmail(e.value.email)
    }
  }

  const paymentElementOptions = {
    layout: "tabs",
  }

  // connect to state, pricing tables
  const payNowAmount = 10

  return (
    <Box>
      <Grid container spacing={{ xs: 2, md: 3, lg: 6 }}>
        <Grid item xs={8}>
          <Card variant="outlined">
            <CardHeader title="Payment" />

            <CardContent>
              <form id="payment-form" onSubmit={createSubscription}>
                <LinkAuthenticationElement
                  id="link-authentication-element"
                  onChange={handleChange}
                />
                <PaymentElement id="payment-element" options={paymentElementOptions} />

                <Stack direction="row" spacing={2} mt={5}>
                  <Button id="back" variant={"outlined"}>
                    GO BACK
                  </Button>
                  {isLoading ? (
                    <LoadingSvg />
                  ) : (
                    <Button
                      disabled={isLoading || !stripe || !elements}
                      id="submit"
                      variant={"contained"}
                    >
                      PAY NOW
                    </Button>
                  )}
                </Stack>

                {message && <div id="payment-message">{message}</div>}
              </form>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4} pl={5}>
          <Card variant="outlined">
            <CardHeader title={upgradePlanName} />

            <CardContent>
              <Box spacing={4}>
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
              </Box>
              {/*<Typography variant="h6">asd</Typography>*/}
              <Box spacing={4} mt={5}>
                <Stack direction="row" spacing={2}>
                  <Typography variant="body1">{upgradePlanName}</Typography>

                  <Typography variant="body1">$10</Typography>
                </Stack>
              </Box>


              <Box spacing={4} mt={5}>
                <Stack direction="row" spacing={2}>
                  <TextField
                    label="Coupon Code"
                    name="email"
                    style={{ maxWidth: 380 }}
                    // required={true}
                    InputProps={{
                      placeholder: "Coupon Code",
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon
                            icon={faUser}
                            color={misc.fa_primary}
                            style={{ width: 15, height: 15 }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Stack>
              </Box>

              <Box spacing={4} mt={5}>
                {isLoading ? (
                  <LoadingSvg />
                ) : (
                  <Button
                    disabled={isLoading || !stripe}
                    id="submit"
                    variant={"contained"}
                    onClick={createSubscription}
                    startIcon={
                      <FontAwesomeIcon
                        icon={faUser}
                        color={misc.fa_primary}
                        style={{ width: 15, height: 15 }}
                      />
                    }
                    // onClick={createSubscription(stripe)}
                  >
                    PAY ${payNowAmount} USD now
                  </Button>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}


// raw js for subscription
// <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
// <stripe-pricing-table pricing-table-id="prctbl_0N1HmByzdM33ylfr5m1mUILu"
// publishable-key="pk_test_lz5iYPwFOnNgCrx6llCU2oq0">
// </stripe-pricing-table>
