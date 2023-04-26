// @ts-ignore
import { Routes } from "@blitzjs/next"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"
import { Card, CardHeader, CardContent, CardActions } from "@mui/material"
import AdminLayout from "core/layouts/AdminLayout"
import { useParam } from "@blitzjs/next"
import create__ModelName__ from "__modelNamesPath__/mutations/create__ModelName__"
import { __ModelName__Form, FORM_ERROR } from "__modelNamesPath__/components/__ModelName__Form"

const New__ModelName__Page = () => {
  const router = useRouter()
  if (process.env.parentModel) {
    const __parentModelId__ = useParam("__parentModelId__", "number")
  }
  const [create__ModelName__Mutation] = useMutation(create__ModelName__)

  return (
    <AdminLayout title={"Create New __ModelName__"}>
      <div>
        <Card variant="outlined">
          <CardHeader
            title="__ModelName__"
            //subheader="September 14, 2016"
          />

          <CardContent>
            <__ModelName__Form
              submitText="Create __ModelName__"
              // TODO use a zod schema for form validation
              //  - Tip: extract mutation's schema into a shared `validations.ts` file and
              //         then import and use it here
              // schema={Create__ModelName__}
              // initialValues={{}}
              onSubmit={async (values) => {
                try {
                  const __modelName__ = await create__ModelName__Mutation(
                    process.env.parentModel
                      ? { ...values, __parentModelId__: __parentModelId__! }
                      : values
                  )
                  await router.push(
                    process.env.parentModel
                      ? Routes.Show__ModelName__Page({
                          __parentModelId__: __parentModelId__!,
                          __modelId__: __modelName__.id,
                        })
                      : Routes.Show__ModelName__Page({ __modelId__: __modelName__.id })
                  )
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
            <if condition="parentModel">
              <Link href={Routes.__ModelNames__Page({ __parentModelId__: __parentModelId__! })}>
                __ModelNames__
              </Link>
              <else>
                <Link href={Routes.__ModelNames__Page()}>__ModelNames__</Link>
              </else>
            </if>
          </CardActions>
        </Card>
      </div>
    </AdminLayout>
  )
}

New__ModelName__Page.authenticate = true

export default New__ModelName__Page
