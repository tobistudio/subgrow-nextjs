import { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { useQuery } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import AdminLayout from "core/layouts/AdminLayout"
import getServices from "apps/queries/getServices"
// import getSiteForProfile from "../../sites/queries/getSiteForProfile"
import { useSession } from "@blitzjs/auth"

export const ServicesList = () => {
  // const router = useRouter();
  const session = useSession()
  const [apps] = useQuery(getServices,{ userId: session.userId });

  return (
    <div>
      <ul>
        {apps.map((app) => (
          <li key={app.id}>
            <Link href={Routes.ShowServicePage({ appId: app.id })}>
              {app.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const ServicesPage = () => {
  return (
    <AdminLayout>
      <Head>
        <title>Services</title>
      </Head>

      <div>
        <p>
          <Link href={Routes.NewServicePage()}>Create Service</Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <ServicesList />
        </Suspense>
      </div>
    </AdminLayout>
  )
}

export default ServicesPage
