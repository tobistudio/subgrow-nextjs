import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from "@blitzjs/rpc"
import db from "../../../db";

import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  Button,
  TextField,
  InputAdornment
} from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { plansConfig } from '../../configs/plans.config';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/pro-duotone-svg-icons"
import { misc } from "../../configs/colors/default"
import { useSession } from "@blitzjs/auth";
import PlanModal from './PlanModal';
import getCurrentUser from "../../users/queries/getCurrentUser";
import { ErrorMessage } from 'mui-rff';
import updateUser from 'users/mutations/updateUser';
import updateSession from 'users/mutations/updateSession';
import createCustomers from 'users/mutations/createCustomers';
import { log } from 'console';
import { DashboardBox } from "../../pages/dashboard";

const LoadingSvg = React.lazy(() => import("assets/svg/LoadingSvg"))

export default function Form(paymentIntent: { paymentIntent: string, plan: string, setPlan: Function }) {
  const session = useSession()
  const stripe = useStripe();
  const elements = useElements();
  const [updateUserMutation] = useMutation(updateUser);
  const [updateSessionMutation] = useMutation(updateSession);
  const [createCustomerMutation] = useMutation(createCustomers);
  const [paymentResult, setPaymentResult] = React.useState({});
  const [email, setEmail] = useState('');
  const [locAmount, setLocAmount] = useState(0);
  const [message, setMessage] = useState('');
  const [errorMessage, seterrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [payNowAmount, setPayNowAmount] = React.useState(10);
  const [open, setOpen] = React.useState(false)
  const [price_id, setPriceId] = React.useState("");
  const [term, setTerm] = React.useState("Monthly")
  const [coupon, setCoupon] = React.useState("");

  const upgradePlanId = "gold"
  const upgradePlanName = "Gold Subscription"

  const handleOpen = () => setOpen(true)

  console.log("session", session);

  // TODO: connect this to pricing tables, allow user to change on this page
  useEffect(() => {
    setPayNowAmount(plansConfig[paymentIntent.plan].price.usd);
  }, [paymentIntent.plan])

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  }

  useEffect(() => {
    if (!stripe) {
      return;
    }

    //Grab the client secret from url params
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }: any) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe]);

  const createSubscription = async (e) => {

    // if (!payNowAmount) {
    //   alert("Amount is required");
    //   return;
    // }
    if (email.length <= 5) {
      alert("Email length must be more than 5");
      return;
    }
    if (!email) {
      alert("Email is required");
      return;
    }
    e.preventDefault();

    let result = await fetch('/api/account/create-subscription', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: payNowAmount,
        currency: 'usd', // TODO: usd breaks
        plan: paymentIntent.plan, // TODO: comes from url, and can be changed on this page
        payment_intent_id: paymentIntent.paymentIntent,
        automatic_payment_methods: { enabled: true },
      }),
    });

    result.json().then(res => setPaymentResult(res));
    console.log(paymentResult);

    if (!stripe || !elements) {
      console.log('not loaded');
      // Stripe.js has not yet loaded.
      return;
    }

    await updateUserMutation({ id: session.userId, role: paymentIntent.plan });
    await updateSessionMutation({ id: session.userId, publicData: paymentIntent.plan });
    await createCustomerMutation({ userId: session.userId, email: email, term: term, stripe_results: paymentResult, salutation: '', firstname: '', lastname: '', level: paymentIntent.plan, user: session.userId });

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: '/',
        receipt_email: email,
        payment_method_data: {
          billing_details: {
            // name: session.email,
            // email: session.email, // TODO: from
            phone: paymentIntent.plan, // TODO
          },
        },
      },
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      error!.message && setMessage(error.message);
    } else {
      setMessage('An unexpected error occured.');
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

  const handleAmount = async (e) => {
    setPayNowAmount(e.target.value);
  }

  // TODO: comes from planConfig
  const CustomChip = () => {


    // annual_discount
    //


    return (<Chip label={`Save ${plansConfig[paymentIntent.plan].annual_discount} %`} />)
  }

  const sendCoupon = async () => {

    // await fetch('/api/account/create-customer', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     email: "admir.hard@gmail.com",
    //     userId: session.userId
    //   })
    // });

    // TODO: dialogue boxes
    if (!coupon) { alert("Coupon is required"); return };
    let data = await fetch('/api/account/couponManage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        couponCode: coupon
      })
    });
    data.json().then(res => res.err ? seterrorMessage(res.err) : seterrorMessage("success"))
    // console.log(err.response);
  }

  const handleCoupon = (e) => {
    setCoupon(e.target.value);
  }

  return (

    <Grid xs={12} container spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
      <Grid direction="column" xs={12} sm={12} md={8} lg={8} xl={8}>
        <Card variant="outlined">
          <CardHeader title="Payment" />
          <CardContent >
            <form id="payment-form" onSubmit={createSubscription}>
              {/* <Typography variant="body1">Amount</Typography>
                <input type="number" value={payNowAmount} onChange={handleAmount} className='AmountInput' /> */}
              <LinkAuthenticationElement
                id="link-authentication-element"
                onChange={handleChange}
              />
              <PaymentElement id="payment-element" options={{
                layout: "tabs",
              }} />
              {/* <CardElement id="payment-elements" options={paymentElementOptions} /> */}

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
      <Grid direction="column" xs={12} sm={12} md={4} lg={4} xl={4}>
        <Card variant="outlined">
          <CardHeader title={upgradePlanName + " - " + paymentIntent.plan} />

          <CardContent>
            <Box >
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Billing Cycle</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={term}
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
                  <CustomChip />
                  {/*TODO: perhaps a modal that allows comparison and selection of plan*/}
                  <Typography variant="body1" margin={2}></Typography>
                  <Typography variant="h4">Compare Plans</Typography>
                  <Button onClick={handleOpen}>Select Plan</Button>
                  <PlanModal setPlan={paymentIntent.setPlan} open={open} setOpen={setOpen} />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box mt={5}>
              <Stack direction="row" spacing={2}>
                <Typography variant="body1">{upgradePlanName}</Typography>

                <Typography variant="body1">${payNowAmount}</Typography>
              </Stack>
            </Box>

            <Box mt={5}>
              <Stack direction="row" spacing={2}>
                <TextField
                  label="Coupon Code"
                  name="coupon"
                  style={{ maxWidth: 300 }}
                  required={true}
                  onChange={handleCoupon}
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
                <Button onClick={sendCoupon} variant="outlined">Add Coupon</Button>
              </Stack>
            </Box>
            {errorMessage && errorMessage}

            <Box mt={5}>
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

  )
}

/*
    <Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3, lg: 6 }}
      >
        <Grid spacing={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} style={{ width: '60%' }}>

        </Grid>

        <Grid spacing={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>

        </Grid>
      </Grid>
    </Box>
 */

// TODO: make sure name of plan, level1, 2, and 3 are passed in via URL

// TODO: use stripe's built in subscription management page
//  https://stripe.com/docs/customer-management
// TODO: make sure you show current subscribers CURRENT plan
// TODO: do not allow same subscriber to make duplicate subscription
// TODO: level 1 sub, can only upgrade to level 2 sub
// TODO: upgrading gets one week free perhaps, no prorating, no complex financial calculations
// TODO: add cash app, remove some options

// TODO: link subscription info pricing table, enable ability to change on this page


// TODO: is it creating subscription plans???

// TODO: coupon code

