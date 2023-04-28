import React from "react"
import {
  Button,
} from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons"
export default function ConnectedAppsAside({ ele }) {

  return (
    <>
      {ele && (
        <Button
          style={{ width: 200 }}
          // variant={ele.status === 'inactive' ? "outlined" : "contained"}
          variant="outlined"
          sx={{ mt: 2 }}
          startIcon={<FontAwesomeIcon icon={ele.icon} size="xl" />}
        >
          {ele.title}
        </Button>
      )}
    </>
  )
}
