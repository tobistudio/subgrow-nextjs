import { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useQuery, useMutation } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"
import AdminLayout from "core/layouts/AdminLayout"
import getSite from "sites/queries/getSite"
import updateSite from "sites/mutations/updateSite"
import { SiteForm, FORM_ERROR } from "sites/components/SiteForm"

export const EditSite = () => {
  const router = useRouter()
  const siteId = useParam("siteId", "string")
  const [site, { setQueryData }] = useQuery(
    getSite,
    { id: siteId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateSiteMutation] = useMutation(updateSite)

  return (
    <>
      <Head>
        <title>Edit Site {site.id}</title>
      </Head>

      <AdminLayout>
        <h1>Edit Site {site.id}</h1>
        <pre>{JSON.stringify(site, null, 2)}</pre>

        <SiteForm
          submitText="Update Site"
          // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
          // schema={UpdateSite}
          initialValues={site}
          onSubmit={async (values) => {
            try {
              const updated = await updateSiteMutation({
                id: site.id,
                ...values,
              })
              await setQueryData(updated)
              await router.push(Routes.ShowSitePage({ siteId: updated.id }))
            } catch (error: any) {
              console.error(error)
              return {
                [FORM_ERROR]: error.toString(),
              }
            }
          }}
        />
      </AdminLayout>
    </>
  )
}

const EditSitePage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditSite />
      </Suspense>

      <p>
        <Link href={Routes.SitesPage()}>Sites</Link>
      </p>
    </div>
  )
}

EditSitePage.authenticate = true
EditSitePage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>

export default EditSitePage
