import React from "react"
import Link from "next/link"
import { Routes } from "@blitzjs/next"
import {
  Card,
  CardHeader,
  Stack,
  CardContent,
  CardActions,
  Typography,
  Box,
  Switch,
  Tooltip,
  Modal,
  Button,
} from "@mui/material"
import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import { useQuery, useMutation } from "@blitzjs/rpc"
import {
  ArrowForwardIosTwoTone,
} from "@mui/icons-material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faTrash } from "@fortawesome/pro-duotone-svg-icons"
import { faTrashCan, faGripVertical } from "@fortawesome/sharp-solid-svg-icons"
import { useRouter } from "next/router"

import { DropResult } from "react-beautiful-dnd"

import pick from "@cahil/utils/accessors/pick"
// import { getItems, reorder } from './drag';
// import List from "@mui/material/List"
// import ListItem from "@mui/material/ListItem"
// import ListItemButton from "@mui/material/ListItemButton"
// import ListItemAvatar from "@mui/material/ListItemAvatar"
// import Avatar from "@mui/material/Avatar"
// import { blue } from "@mui/material/colors"
// import PersonIcon from "@mui/icons-material/Person"
// import ListItemText from "@mui/material/ListItemText"
// import AddIcon from "@mui/icons-material/Add"
// import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import deleteSite from "../../sites/mutations/deleteSite"
import updateStatus from "../../sites/mutations/updateStatus"
import { OnDragEndResponder } from "react-beautiful-dnd"
const emails = ["username@gmail.com", "user02@gmail.com"]

export interface SimpleDialogProps {
  open: boolean
  selectedValue: string
  onClose: (value: string) => void
  onDragEnd: OnDragEndResponder
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
}

const CardFooterIcon = ({  title, size, label, onClick, icon}: any) => {

  return (
    <Tooltip title="Delete">
      <IconButton
        size="medium"
        aria-label="delete"
        onClick={() => onClick()}
      >
        <FontAwesomeIcon icon={faGripVertical} size="sm" />
      </IconButton>
    </Tooltip>
  )
}


export default CardFooterIcon
