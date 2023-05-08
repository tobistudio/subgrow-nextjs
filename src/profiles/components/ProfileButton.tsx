import React from "react";
import {
  Button,
  Stack,
} from "@mui/material"
import Link from "next/link"
//  className={profileTheme.options.links.className}
export default function ProfileButton({ sites, variant  }: any) {

  let out
  // if(type === 'link') {
  //   out = <Link href={site.url} target="_blank">{site.title}</Link>
  // }

  // style={{"width": "100%"}}
  // TODO: problem is, the href makes these buttons into a links
  // no way around setting widths
  return (
    <Stack
      // spacing={5}
      // direction={{ xs: 'column', sm: 'row' }}
      // direction=
      spacing={{ xs: 2, sm: 3, md: 4, lg: 5  }}
      width={300}
    >
      {sites.map((site) => (

          <Button
            key={site.id}
            href={site.url}
            target="_blank"
            variant={variant}
            // sx={{ // no choice
            //   xs: {
            //     minWidth: "100%",
            //   },
            //   sm: {
            //     minWidth: "35999",
            //   }
            //
            // }}
          >
            {site.title}
          </Button>

      ))}
    </Stack>
  )

}

/*

 */
