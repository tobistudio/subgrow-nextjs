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
import { plansConfig } from '../../configs/plans.config';


export default function UpgradePage() {
  const [clientSecret, setClientSecret] = React.useState("")
  const [paymentIntent, setPaymentIntent] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false)
  const [currency, setCurrency] = React.useState('eur');
  const [plan, setPlan] = React.useState("level1")

  // TODO: hooked to state or price box

  React.useEffect(() => {
    setIsLoading(true)
    // Create PaymentIntent as soon as the page loads
    fetch("/api/account/create-subscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        currency: currency,
        // amount: plansConfig.level1.price * 100,
        amount: plansConfig.level1.price[currency] * 100,
        payment_intent_id: ''
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.client_secret);
        setClientSecret(data.client_secret)
        setPaymentIntent(data.id)
      })
      .then(() => setIsLoading(false))
  }, [])

  const appearance = {
    theme: 'night',
    labels: 'floating'
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
            <SubscriptionForm paymentIntent={paymentIntent} plan={plan} setPlan={setPlan} />
          </Elements>
        )}
      </Suspense>
    </HomeLayout>
  )
}
