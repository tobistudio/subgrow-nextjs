import { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { useQuery } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import AdminLayout from "core/layouts/AdminLayout"
import getServices from "services/queries/getServices"
import getSiteForProfile from "../../sites/queries/getSiteForProfile"
import { useSession } from "@blitzjs/auth"

export const ServicesList = () => {
  // const router = useRouter();
  // const session = useSession()
  // const [services] = useQuery(getServices,{ userId: session.userId });

  return (
    <div>
      {/*<ul>*/}
      {/*  {services.map((service) => (*/}
      {/*    <li key={service.id}>*/}
      {/*      <Link href={Routes.ShowServicePage({ serviceId: service.id })}>*/}
      {/*        {service.name}*/}
      {/*      </Link>*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
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
