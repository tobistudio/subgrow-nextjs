import * as React from "react"
import Link from "next/link"
import { useSelector, RootStateOrAny } from "react-redux"
import { Routes } from "@blitzjs/next"
import { styled } from "@mui/material/styles"
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  Switch,
} from "@mui/material"

import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  ArrowForwardIosTwoTone,
} from "@mui/icons-material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserPlus } from "@fortawesome/pro-duotone-svg-icons"
import { useEffect, useState } from "react"

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}))

// need {} or else it's a object in object
export default function LinkListCard({ link }) {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handleFavoriteClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
    console.log(event.target)
    console.log("handleFavoriteClick", id)
    event.preventDefault()
  }

  // Opens a modal for edits  // TODO: add edit modal
  const handleEditClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
    console.log(event.target)

    console.log("handleEditClick", id)
    event.preventDefault()
  }

  const handleEditDetailsClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
    console.log(event.target)
    console.log("handleEditDetailsClick", id)
    event.preventDefault()
  }

  const theme = useSelector((state: RootStateOrAny) => state.theme)

  if (theme.mode === "dark") {
    //button = <LogoutButton onClick={this.handleLogoutClick} />;
  } else {
    //button = <LoginButton onClick={this.handleLoginClick} />;
  }

  let checked
  if (link.status === "active") {
    checked = true
  } else {
    checked = false
  }

  const defaultChecked = true

  const [switcherChecked, setSwitcherChecked] = useState(defaultChecked || checked)

  useEffect(() => {
    console.log("useEffect checked", checked)
    if (typeof checked !== "undefined") {
      setSwitcherChecked(checked)
    }
  }, [checked])

  const getControlProps = () => {
    let checkedValue = switcherChecked

    let checked = { value: checkedValue }

    //
    console.log("getControlProps checked", checked)
    // console.log("checkedValue",checkedValue);
    // console.log("checked",checked);

    // if (field) {
    //   checkedValue = typeof field.value === "boolean" ? field.value : defaultChecked
    //   checked = { value: checkedValue, checked: checkedValue }
    // }

    checked = { value: checkedValue, checked: checkedValue }

    // if (defaultChecked) {
    //   checked.defaultChecked = defaultChecked
    // }
    return checked
  }

  const controlProps = getControlProps()

  const handleActiveChange = (link) => {
    // link.id
    const nextChecked = !switcherChecked
    console.log("handleActiveChange nextChecked", nextChecked)
    // if (disabled || readOnly || isLoading) {
    //   return
    // }

    if (typeof checked === "undefined") {
      console.log("handleActiveChange undefined")
      setSwitcherChecked(nextChecked)
    } else {
      console.log("handleActiveChange else")
    }
  }
  console.log("link.status", link.status)
  //  style={{maxHeight: 300}}
  // color={mode === 'dark' ? "#ffffff" : "#000000"}
  return (
    <Card key={link.id} className="card">
      <CardHeader
        title={link.name}
        action={
          <Switch
            // checked={!!link.status}
            // checked={link.status === 'active'}
            checked={checked}
            onChange={handleActiveChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        // subheader={`Last updated on ${link.updatedAt.toDateString()}`}
      />
      <CardContent
        // sx={{ p:0, '&:last-child': { pb: 0 }}}
        sx={{ py: 0 }}
      >
        <Typography variant="body2" color={theme.mode === "dark" ? "text.light" : "text.dark"}>
          {link.name}
        </Typography>

        {link.description && (
          <Typography variant="body2" color={theme.mode === "dark" ? "text.light" : "text.dark"}>
            {link.description}
          </Typography>
        )}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={(e) => handleFavoriteClick(e, link.id)}>
          <FontAwesomeIcon icon={faUserPlus} style={{ color: "#e5e6f1", paddingRight: 7 }} />
          <FavoriteIcon
          // color={theme.mode === "dark" ? 'icon' : 'secondary'}
          />
        </IconButton>
        <IconButton aria-label="share" onClick={(e) => handleEditClick(e, link.id)}>
          <ShareIcon />
        </IconButton>

        <IconButton
          aria-label="details"
          style={{ marginLeft: "auto" }}
          onClick={(e) => handleEditDetailsClick(e, link.id)}
        >
          {/*<ArrowForwardIosTwoTone color="icon" />*/}
          <ArrowForwardIosTwoTone />
        </IconButton>
      </CardActions>
    </Card>
  )
}

// https://linktr.ee/admin
// TODO: replace with fontawesome

// TODO: add details
// TODO: add tooltips
// TODO: add draggable and ordering
