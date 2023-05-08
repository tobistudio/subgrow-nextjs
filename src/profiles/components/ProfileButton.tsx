import React from "react";
import {
  Button,
  Stack,
} from "@mui/material"
import Link from "next/link"
//  className={profileTheme.options.links.className}
export default function ProfileButton({ sites, variant  }: any) {

  // TODO: depending on options, show social media icons
  return (
    <Stack
      // spacing={5}
      // direction={{ xs: 'column', sm: 'row' }}
      // direction=
      spacing={{ xs: 2, sm: 3, md: 4, lg: 5  }}
      width={400}
      sx={{
       width: {
         xs: 300,
         sm: 400,
         md: 400,
         lg: 600,
         xl: 600,

       }
      }}
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
