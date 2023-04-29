// @ts-nocheck
import React, { useEffect } from "react"
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
import { plansConfig } from '../../configs/plans.config';
import { TextField } from "mui-rff"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/pro-duotone-svg-icons"
import { misc } from "../../configs/colors/default"

const LoadingSvg = React.lazy(() => import("assets/svg/LoadingSvg"))

export default function SubscriptionForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [email, setEmail] = React.useState("")
  const [name, setName] = React.useState("gold")
  const [message, setMessage] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const upgradePlanName = "Gold Subscription"
  const [payNowAmount, setPayNowAmount] = React.useState(10);
  const upgradePlanId = "gold"

  useEffect(() => {
    setPayNowAmount(plansConfig.level1.price);
  })

  const createSubscription = async () => {
    try {
      if (email.length <= 5) {
        alert("Email length must be more than 5");
        return;
      }
      if (!email) {
        alert("Email required");
        return;
      }

      console.log(elements?.getElement(CardElement)!);

      // create a payment method
      const paymentMethod = await stripe?.createPaymentMethod({
        type: "card",
        card: elements?.getElement(CardElement)!,
        billing_details: {
          name,
          email,
        },
      });

      setIsLoading(true)

      // call the backend to create subscription
      const response = await fetch("http://localhost:3000/api/account/create-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethod: paymentMethod?.paymentMethod?.id,
          name, email
        }),
      }).then((res) => res.json());

      const confirmPayment = await stripe?.confirmCardPayment(
        response.clientSecret
      );


      if (confirmPayment?.error) {
        alert(confirmPayment.error.message);
      } else {
        alert("Success! Check your email for the invoice.\n" + JSON.stringify(confirmPayment!.paymentIntent)
        );
        // setMessage(JSON.stringify(confirmPayment!.paymentIntent));
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleChange = async (e) => {
    if (!stripe || !elements || !e.value.email) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }
    setEmail(e.value.email)
  }

  const paymentElementOptions = {
    layout: "tabs",
  }

  // connect to state, pricing tables

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
                {/* <PaymentElement id="payment-element" options={paymentElementOptions} /> */}
                <CardElement id="payment-elements" options={paymentElementOptions} />

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
                      onClick={createSubscription}
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
                    defaultValue="Monthly"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Monthly"
                      control={
                        <Radio />
                      }
                      label="Monthly"
                    />
                    <FormControlLabel
                      value="Annual"
                      control={
                        <Radio />
                      }
                      label="Annual"
                    />
                    <Chip label="Save 20%" style={{ color: "white" }} />
                  </RadioGroup>
                </FormControl>
              </Box>
              {/*<Typography variant="h6">asd</Typography>*/}
              <Box spacing={4} mt={5}>
                <Stack direction="row" spacing={2}>
                  <Typography variant="body1">{upgradePlanName}</Typography>

                  <Typography variant="body1">${payNowAmount}</Typography>
                </Stack>
              </Box>


              {/* <Box spacing={4} mt={5}>
                <Stack direction="row" spacing={2}>
                  <TextField
                    label="Coupon Code"
                    name="email"
                    style={{ maxWidth: 380 }}
                    required={true}
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
              </Box> */}

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
