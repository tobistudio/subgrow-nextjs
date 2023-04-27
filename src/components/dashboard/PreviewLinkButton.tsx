import React from "react"

import {
  Box,
  Button,
  Stack
} from "@mui/material"


export default function PreviewLinkButton({ ele }) {



  return (

    <Box
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack spacing={4}>
        {ele && (

          <Button
            href={ele.url}
            style={{ width: 200 }}
            target="_blank"
            variant={"outlined"}
            sx={{ mt: 2 }}
          >
            {ele.title}
          </Button>

        )}
      </Stack>
    </Box>
  )
}
