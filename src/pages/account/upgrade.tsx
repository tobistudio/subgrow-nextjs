// @ts-nocheck
import React, { Suspense } from "react"
import SubscriptionForm from "account/stripe/SubscriptionForm"
import HomeLayout from "../../core/layouts/HomeLayout"
import Head from "next/head"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
const LoadingSvg = React.lazy(() => import("assets/svg/LoadingSvg"))
const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function UpgradePage() {
  const [clientSecret, setClientSecret] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  // TODO: hooked to state or price box
  const product = {
    items: [
      {
        id: "gold",
        term: "annual",
      },
    ],
  }

  // /api/account/create-payment-intent
  React.useEffect(() => {
    setIsLoading(true)
    // Create PaymentIntent as soon as the page loads
    fetch("/api/account/create-subscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .then(() => setIsLoading(false))
  }, [product])

  // for subscriptions
  // React.useEffect(() => {
  //   if (!stripe) {
  //     return
  //   }
  //   setIsLoading(true)
  //
  //
  //   // is this seccure, wtf
  //   const clientSecret = new URLSearchParams(window.location.search).get(
  //     "payment_intent_client_secret"
  //   )
  //
  //   setClientSecret(clientSecret)
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

  const appearance = {
    theme: "night",
  }
  const options = {
    clientSecret,
    appearance,
  }

  return (
    <HomeLayout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Suspense fallback={<LoadingSvg />}>
        {clientSecret && (
          <Elements options={options} stripe={stripe}>
            <SubscriptionForm />
          </Elements>
        )}
      </Suspense>
    </HomeLayout>
  )
}
