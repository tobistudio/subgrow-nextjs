// @ts-nocheck
import React, { Suspense } from "react"
import SubscriptionForm from "account/stripe/SubscriptionForm"
import HomeLayout from "../../core/layouts/HomeLayout"
import Head from "next/head"
import { loadStripe } from "@stripe/stripe-js"
import { Elements, CardElement } from "@stripe/react-stripe-js"
import CheckoutForm from "../../account/stripe/CheckoutForm"
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
