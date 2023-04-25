// @ts-nocheck
import React, { Suspense } from "react"
import { Routes } from "@blitzjs/next"
if (process.env.parentModel) {
  import Head from "next/head"
  import Link from "next/link"
} else {
  import Head from "next/head"
  import Link from "next/link"
}
import { usePaginatedQuery } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"
import { useRouter } from "next/router"

import AdminLayout from "core/layouts/AdminLayout"
import get__ModelNames__ from "__modelNamesPath__/queries/get__ModelNames__"
import { experimentalStyled as styled } from "@mui/material/styles"
import { Box, Paper, Grid, Button } from "@mui/material"

const ITEMS_PER_PAGE = 100

export const __ModelNames__List = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  if (process.env.parentModel) {
    const __parentModelId__ = useParam("__parentModelId__", "number")
    const [{ __modelNames__, hasMore }] = usePaginatedQuery(get__ModelNames__, {
      where: { __parentModel__: { id: __parentModelId__! } },
      orderBy: { id: "asc" },
      skip: ITEMS_PER_PAGE * page,
      take: ITEMS_PER_PAGE,
    })

    const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
    const goToNextPage = () => router.push({ query: { page: page + 1 } })

    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 6 }}
          justifyContent="center"
          alignItems="center"
        >
          {__modelNames__.map((__modelName__) => (
            <Grid item xs={12} sm={6} lg={4} xl={3} key={plan.id}>
              <Box key={__modelName__.id} plan={__modelName__.name} />
            </Grid>
          ))}

          <Button
            variant="outlined"
            className={`button previous`}
            type="submit"
            Previous
            disabled={page === 0}
            onClick={goToPreviousPage}
          >
            Previous
          </Button>

          <Button
            variant="outlined"
            className={`button ag-icon-next`}
            type="submit"
            Previous
            disabled={!hasMore}
            onClick={goToNextPage}
          >
            Next
          </Button>
        </Grid>
      </Box>
      // <div>
      //   <ul>
      //     {__modelNames__.map((__modelName__) => (
      //       <li key={__modelName__.id}>
      //         <Link href={Routes.Show__ModelName__Page({ __modelId__: __modelName__.id })}>
      //           {__modelName__.name}
      //         </Link>
      //       </li>
      //     ))}
      //   </ul>
      //
      //   <button disabled={page === 0} onClick={goToPreviousPage}>
      //     Previous
      //   </button>
      //   <button disabled={!hasMore} onClick={goToNextPage}>
      //     Next
      //   </button>
      // </div>
    )
  } else {
    const [{ __modelNames__, hasMore }] = usePaginatedQuery(get__ModelNames__, {
      orderBy: { id: "asc" },
      skip: ITEMS_PER_PAGE * page,
      take: ITEMS_PER_PAGE,
    })

    const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
    const goToNextPage = () => router.push({ query: { page: page + 1 } })

    return (
      <div>
        <ul>
          {__modelNames__.map((__modelName__) => (
            <li key={__modelName__.id}>
              <if condition="parentModel">
                <Link
                  href={Routes.Show__ModelName__Page({
                    __parentModelId__: __parentModelId__!,
                    __modelId__: __modelName__.id,
                  })}
                >
                  {__modelName__.name}
                </Link>
                <else>
                  <Link href={Routes.Show__ModelName__Page({ __modelId__: __modelName__.id })}>
                    {__modelName__.name}
                  </Link>
                </else>
              </if>
            </li>
          ))}
        </ul>

        <Button variant="outlined" type="button" disabled={page === 0} onClick={goToPreviousPage}>
          Previous
        </Button>

        <Button variant="outlined" type="button" disabled={!hasMore} onClick={goToNextPage}>
          Next
        </Button>
      </div>
    )
  }
}

const __ModelNames__Page = () => {
  if (process.env.parentModel) {
    const __parentModelId__ = useParam("__parentModelId__", "number")
  }

  return (
    <AdminLayout>
      <Head>
        <title>__ModelNames__</title>
      </Head>

      <div>
        <p>
          <if condition="parentModel">
            <Link href={Routes.New__ModelName__Page({ __parentModelId__: __parentModelId__! })}>
              Create __ModelName__
            </Link>
            <else>
              <Link href={Routes.New__ModelName__Page()}>Create __ModelName__</Link>
            </else>
          </if>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <__ModelNames__List />
        </Suspense>
      </div>
    </AdminLayout>
  )
}

export default __ModelNames__Page
