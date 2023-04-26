// TODO: not using this, using dashboard widget
import { Routes } from "@blitzjs/next"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"
// import { Card, Button, Grid } from 'components/ui'
import {
  Box,
  Typography,
  Container,
  Card,
  Button,
  Grid,
  CardHeader,
  CardContent,
  CardActions,
} from "@mui/material"
import AdminLayout from "core/layouts/AdminLayout"
import createSite from "sites/mutations/createSite"
import { SiteForm, FORM_ERROR } from "sites/components/SiteForm"

const NewSitePage = () => {
  const router = useRouter()
  const [createSiteMutation] = useMutation(createSite)

  return (
    <AdminLayout title={"Create New Site"}>
      <Card variant="outlined">
        <CardHeader title="Site" />
        <CardContent>
          <SiteForm
            submitText="Add Site"
            // TODO use a zod schema for form validation
            //  - Tip: extract mutation's schema into a shared `validations.ts` file and
            //         then import and use it here
            // schema={CreateSite}
            // initialValues={{}}
            onSubmit={async (values) => {
              try {
                const site = await createSiteMutation(values)
                await router.push(Routes.ShowSitePage({ siteId: site.id }))
              } catch (error: any) {
                console.error(error)
                return {
                  [FORM_ERROR]: error.toString(),
                }
              }
            }}
          />
        </CardContent>

        <CardActions>
          <Link href={Routes.SitesPage()}>View Sites</Link>
        </CardActions>
      </Card>
    </AdminLayout>
  )
}

NewSitePage.authenticate = true

export default NewSitePage
