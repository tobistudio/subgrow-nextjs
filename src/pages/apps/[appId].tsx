import { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useQuery, useMutation } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"
import Layout from "core/layouts/Layout"
import getService from "apps/queries/getService"
import deleteService from "apps/mutations/deleteService"

export const Service = () => {
  const router = useRouter()
  const appId = useParam("appId", "number")
  const [deleteServiceMutation] = useMutation(deleteService)
  const [service] = useQuery(getService, { id: appId })

  return (
    <>
      <Head>
        <title>Service {service.id}</title>
      </Head>

      <div>
        <h1>Service {service.id}</h1>
        <pre>{JSON.stringify(service, null, 2)}</pre>

        <Link href={Routes.EditServicePage({ appId: service.id })}>Edit</Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteServiceMutation({ id: service.id })
              await router.push(Routes.ServicesPage())
            }
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          Delete
        </button>
      </div>
    </>
  )
}

const ShowServicePage = () => {
  return (
    <div>
      <p>
        <Link href={Routes.ServicesPage()}>Services</Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Service />
      </Suspense>
    </div>
  )
}

ShowServicePage.authenticate = true
ShowServicePage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowServicePage
