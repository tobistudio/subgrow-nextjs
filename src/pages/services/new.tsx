import { Routes } from "@blitzjs/next"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"
import AdminLayout from "core/layouts/AdminLayout"
import { CreateServiceSchema } from "services/schemas"
import createService from "services/mutations/createService"
import { ServiceForm, FORM_ERROR } from "services/components/ServiceForm"
import { Suspense } from "react"

const NewServicePage = () => {
  const router = useRouter()
  const [createServiceMutation] = useMutation(createService)

  return (
    <AdminLayout title={"Create New Service"}>
      <h1>Create New Service</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ServiceForm
          submitText="Create Service"
          schema={CreateServiceSchema}
          // initialValues={{}}
          onSubmit={async (values) => {
            try {
              const service = await createServiceMutation(values)
              await router.push(Routes.ShowServicePage({ serviceId: service.id }))
            } catch (error: any) {
              console.error(error)
              return {
                [FORM_ERROR]: error.toString(),
              }
            }
          }}
        />
      </Suspense>
      <p>
        <Link href={Routes.ServicesPage()}>Services</Link>
      </p>
    </AdminLayout>
  )
}

NewServicePage.authenticate = true

export default NewServicePage
