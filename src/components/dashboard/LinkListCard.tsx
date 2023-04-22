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
import { makeStyles } from "@mui/styles"
import { DragDropContext, Droppable, OnDragEndResponder } from "react-beautiful-dnd"
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

const emails = ["username@gmail.com", "user02@gmail.com"]

export interface SimpleDialogProps {
  open: boolean
  selectedValue: string
  onClose: (value: string) => void
}
function DeleteDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props

  const handleClose = () => {
    onClose(selectedValue)
  }

  const handleListItemClick = (value: string) => {
    onClose(value)
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email, index) => (
          <ListItem key={index} disableGutters>
            <ListItemButton onClick={() => handleListItemClick(email)} key={email}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton autoFocus onClick={() => handleListItemClick("addAccount")}>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  )
}

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
const LinkListCard = ({ link, index, mode }) => {
  // const LinkListCard = React.memo(({ link, mode }: DraggableListProps) => {
  const router = useRouter()

  // TODO: set checkboxes OUTSIDE of this loop

  let checked
  if (link.status === "active") {
    checked = true
  } else {
    checked = false
  }

  const handleEditDetailsClick = async (event: React.MouseEvent<HTMLElement>, id) => {
    await router.push(Routes.EditSitePage({ siteId: id }))
  }

  // Opens a modal for edits  // TODO: add edit modal
  const handleDeleteClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
    // console.log(event.target)
    console.log("handleDeleteClick", id)
    // DeleteDialog.tsx

    //event.preventDefault()
  }
  const emails = ["username@gmail.com", "user02@gmail.com"]
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState(emails[1])
  // delete dialog
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = (value: string) => {
    setOpen(false)
    setSelectedValue(value)
  }

  // TODO: need to get status switch working
  return (
    <Draggable draggableId={link.id} index={index}>
      {(provided, snapshot) => (
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={snapshot.isDragging ? "dragging" : "not-dragging"}
        >
          <Card key={link.id} className="card">
            <CardHeader
              title={link.name}
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

            <CardContent
              // sx={{ p:0, '&:last-child': { pb: 0 }}}
              sx={{ py: 0 }}
            >
              <ListItemAvatar>
                <Avatar>
                  {/*<InboxIcon />*/}
                  avatar
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={link.name} secondary={link.url} />
              {/*<DeleteDialog*/}
              {/*  //selectedValue={selectedValue}*/}
              {/*  open={open}*/}
              {/*  onClose={handleClose}*/}
              {/*/>*/}
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
                  onClick={(e) => handleDeleteClick(e, link.id)}
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
        </ListItem>
      )}
    </Draggable>
  )
}

// https://linktr.ee/admin
// TODO: replace with fontawesome

// TODO: add details
// TODO: add tooltips
// TODO: add draggable and ordering

export default LinkListCard
