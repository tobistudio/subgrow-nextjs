// @ts-nocheck
import React from "react"
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js"
import { Stack } from "@mui/material"
import { Button } from "@mui/material"
const LoadingSvg = React.lazy(() => import("assets/svg/LoadingSvg"))

export default function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    if (!stripe) {
      return
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    )

    if (!clientSecret) {
      return
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!")
          break
        case "processing":
          setMessage("Your payment is processing.")
          break
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.")
          break
        default:
          setMessage("Something went wrong.")
          break
      }
    })
  }, [stripe])

  const createSubscription = async () => {
    // create a payment method
    const paymentMethod = await stripe?.createPaymentMethod({
      type: "card",
      card: elements?.getElement(CardElement)!,
      billing_details: {
        name,
        email,
      },
    })

    // call the backend to create subscription
    const response = await fetch("http://localhost:3000/api/account/create-subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paymentMethod: paymentMethod?.paymentMethod?.id,
        name,
        email,
        priceId,
      }),
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

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement id="link-authentication-element" onChange={handleChange} />
      <PaymentElement id="payment-element" options={paymentElementOptions} />

      <Stack direction="row" spacing={2} mt={5}>
        <Button id="back" variant={"outlined"}>
          GO BACK
        </Button>
        {isLoading ? (
          <LoadingSvg />
        ) : (
          <Button disabled={isLoading || !stripe || !elements} id="submit" variant={"contained"}>
            PAY NOW
          </Button>
        )}
      </Stack>

      {message && <div id="payment-message">{message}</div>}
    </form>
  )
}


