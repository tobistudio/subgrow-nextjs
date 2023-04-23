// @ts-ignore
import { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useQuery, useMutation } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"

import Layout from "core/layouts/Layout"
import { UpdateServiceSchema } from "services/schemas"
import getService from "services/queries/getService"
import updateService from "services/mutations/updateService"
import { ServiceForm, FORM_ERROR } from "services/components/ServiceForm"

export const EditService = () => {
  const router = useRouter()
  const serviceId = useParam("serviceId", "number")
  const [service, { setQueryData }] = useQuery(
    getService,
    { id: serviceId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateServiceMutation] = useMutation(updateService)

  return (
    <>
      <Head>
        <title>Edit Service {service.id}</title>
      </Head>

      <div>
        <h1>Edit Service {service.id}</h1>
        <pre>{JSON.stringify(service, null, 2)}</pre>
        <Suspense fallback={<div>Loading...</div>}>
          <ServiceForm
            submitText="Update Service"
            schema={UpdateServiceSchema}
            initialValues={service}
            onSubmit={async (values) => {
              try {
                const updated = await updateServiceMutation({
                  // id: service.id,
                  ...values,
                })
                await setQueryData(updated)
                await router.push(Routes.ShowServicePage({ serviceId: updated.id }))
              } catch (error: any) {
                console.error(error)
                return {
                  [FORM_ERROR]: error.toString(),
                }
              }
            }}
          />
        </Suspense>
      </div>
    </>
  )
}

const EditServicePage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditService />
      </Suspense>

      <p>
        <Link href={Routes.ServicesPage()}>Services</Link>
      </p>
    </div>
  )
}

EditServicePage.authenticate = true
EditServicePage.getLayout = (page) => <Layout>{page}</Layout>

export default EditServicePage
