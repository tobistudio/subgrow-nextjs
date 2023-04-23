import * as React from "react"
import Link from "next/link"
import { Routes } from "@blitzjs/next"
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  Switch,
  Tooltip,
  FormGroup,
  FormControlLabel,
  Paper,
  Dialog,
  DialogTitle,
} from "@mui/material"
import { Draggable } from "react-beautiful-dnd"
import { LinkType } from "./typings"
import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  ArrowForwardIosTwoTone,
} from "@mui/icons-material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faTrash } from "@fortawesome/pro-duotone-svg-icons"
import { faTrashCan } from "@fortawesome/sharp-solid-svg-icons"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import { DropResult } from "react-beautiful-dnd"

import pick from "@cahil/utils/accessors/pick"
// import { getItems, reorder } from './drag';
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"
import { blue } from "@mui/material/colors"
import PersonIcon from "@mui/icons-material/Person"
import ListItemText from "@mui/material/ListItemText"
import AddIcon from "@mui/icons-material/Add"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { OnDragEndResponder } from "react-beautiful-dnd"
const emails = ["username@gmail.com", "user02@gmail.com"]

export interface SimpleDialogProps {
  open: boolean
  selectedValue: string
  onClose: (value: string) => void
  onDragEnd: OnDragEndResponder
}
//
// export type DraggableListProps = {
//   links: links[];
//   onDragEnd: OnDragEndResponder;
// };

export type DraggableListItemProps = {
  link: LinkType
  index: number
  mode: string
  name: string
  description: string
  url: string
}

// TODO: draggable https://codesandbox.io/s/draggable-material-ui-oj3wz?file=/src/components/DraggableList.tsx:764-773
// need {} or else it's a object in object
// const LinkListCard = ({ link, index, mode }: DraggableListItemProps) => {
const LinkListCard = ({ link, index, mode, snapshot }) => {
  // const LinkListCard = React.memo(({ link, mode }: DraggableListProps) => {
  const router = useRouter()
  const emails = ["username@gmail.com", "user02@gmail.com"]
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState(emails[1])

  // TODO: handle switch update, turn on status switch in db
  let checked
  if (link.status === "active") {
    checked = true
  } else {
    checked = false
  }

  const handleEditDetailsClick = async (event: React.MouseEvent<HTMLElement>, id) => {
    await router.push(Routes.EditSitePage({ siteId: id }))
  }

  // TODO: need to get status switch working
  return (
    <Card key={link.id} className="card" style={{ margin: 30 }}>
      <CardHeader
        title={link.title}
        // TODO: show icon for this link/site
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        // action={<FontAwesomeIcon icon={faFacebook} color={"#3f50b5"} />}
        action={
          <Switch
            // checked={!!link.status}
            // checked={link.status === 'active'}
            checked={checked}
            //onChange={handleActiveChange(link.id)} // TODO: handle properly outside of loop
            inputProps={{ "aria-label": "controlled" }}
          />
        }
      />

      <CardContent sx={{ py: 0 }}>
        <Typography variant="body1" color={mode === "dark" ? "text.light" : "text.dark"}>
          <Link href={link.url} target="_blank">
            {link.url}
          </Link>
        </Typography>

        {link.description && (
          <Typography variant="body2" color={mode === "dark" ? "text.light" : "text.dark"}>
            {link.description}
          </Typography>
        )}
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Delete">
          <IconButton
            size="medium"
            aria-label="delete"
            //onClick={(e) => handleDeleteClick(e, link.id)} // TODO: fiver delete button
          >
            <FontAwesomeIcon icon={faTrashCan} size="sm" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Details">
          <IconButton
            aria-label="details"
            style={{ marginLeft: "auto" }}
            onClick={(e) => handleEditDetailsClick(e, link.id)}
          >
            {/*<ArrowForwardIosTwoTone color="icon" />*/}
            <ArrowForwardIosTwoTone />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  )
}

// https://linktr.ee/admin
// TODO: replace with fontawesome
// TODO: delete button
// TODO: add details
// TODO: add tooltips
// TODO: add draggable and ordering

export default LinkListCard
