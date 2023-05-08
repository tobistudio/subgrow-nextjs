import React from "react";
import {
  Stack,
} from "@mui/material"
import Link from "next/link"

export default function ProfileLink({ sites, type, variant  }: any) {

  let out

  return (
    <Stack

      spacing={{ xs: 2, sm: 3, md: 4, lg: 5  }}
    >
      {sites.map((site) => (
          <Link key={site.id} href={site.url} target="_blank">{site.title}</Link>
      ))}
    </Stack>
  )

}

/*

 */
