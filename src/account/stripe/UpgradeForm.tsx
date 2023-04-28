import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { CardElement, Elements, useStripe, useElements } from "@stripe/react-stripe-js"
import AdminLayout from "core/layouts/AdminLayout"
import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Stack,
} from "@mui/material"
import { Routes } from "@blitzjs/next"
import Link from "next/link"
import { Form as FinalForm } from "react-final-form"
import { UpgradeFormSchema } from "./schemas"
import { TextField } from "mui-rff"
import { FORM_ERROR } from "final-form"

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  return (
    <Card variant="outlined">
      <CardHeader title="Site" />
      <CardContent>
        <FinalForm
          submitText="Update Site"
          schema={UpgradeFormSchema}
          // initialValues={{}}
          onSubmit={async (values) => {
            if (elements == null) {
              return
            }

            // @ts-ignore
            const { error, paymentMethod } = await stripe.createPaymentMethod({
              type: "card",
              card: elements.getElement(CardElement),
            })

            console.log("error", error)
            console.log("paymentMethod", paymentMethod)

            try {
            } catch (error: any) {
              console.error(error)
              return {
                [FORM_ERROR]: error.toString(),
              }
            }

            // try {
            //   const service = await createServiceMutation(values)
            //   await router.push(Routes.ShowServicePage({ appId: service.id }))
            // } catch (error: any) {
            //   console.error(error)
            //   return {
            //     [FORM_ERROR]: error.toString(),
            //   }
            // }
          }}
          render={({ handleSubmit, form, submitting, submitError, pristine, values }) => (
            // <form onSubmit={handleSubmit}>
            //   <CardElement />
            //   <button type="submit" disabled={!stripe || !elements}>
            //     Pay
            //   </button>
            // </form>
            <form onSubmit={handleSubmit} className={`banner ${submitError ? "error" : ""}`}>
              {submitError && (
                <Alert severity="error" className="mt-4 mb-4">
                  {submitError}
                </Alert>
              )}

              <Stack spacing={4}>
                <CardElement />
                <Box textAlign="center">
                  <Button
                    variant="contained"
                    type="submit"
                    // disabled={submitting}
                    sx={{ width: 200 }}
                    disabled={!stripe || !elements}
                  >
                    Pay
                  </Button>
                </Box>
              </Stack>
            </form>
          )}
        />
      </CardContent>

      <CardActions>
        <Link href={Routes.SitesPage()}>Back to Pricing Page</Link>
      </CardActions>
    </Card>
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
