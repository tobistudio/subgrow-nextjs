import React from "react"
import ReactDOM from "react-dom"
import { loadStripe } from "@stripe/stripe-js"
import { CardElement, Elements, useStripe, useElements } from "@stripe/react-stripe-js"
import AdminLayout from "../../core/layouts/AdminLayout"
import UpgradeForm from "account/UpgradeForm"
// import {Card, CardActions, CardContent, CardHeader} from "@mui/material";
// import {FORM_ERROR, SiteForm} from "../../sites/components/SiteForm";
// import {Routes} from "@blitzjs/next";
// import Link from "next/link";
// import NewSitePage from "../sites/new";

// $10 gold
// https://buy.stripe.com/test_bIY9Cjgxv7Um9y0cMM
const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (elements == null) {
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    })
  }

  return (
    <AdminLayout title={"Create New Site"}>
      <UpgradeForm />
    </AdminLayout>
  )
}

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh")

const UpgradePage = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
)

UpgradePage.authenticate = true
export default UpgradePage
