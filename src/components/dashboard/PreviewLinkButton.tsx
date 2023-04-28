import React from "react"
import {
  Button,
} from "@mui/material"

export default function PreviewLinkButton({ ele }) {

  return (
    <>
      {ele && (
        <Button
          href={ele.url}
          style={{ width: 200 }}
          target="_blank"
          variant={ele.status === 'inactive' ? "outlined" : "contained"}
          sx={{ mt: 2 }}
        >
          {ele.title}
        </Button>
      )}
    </>
  )
}
