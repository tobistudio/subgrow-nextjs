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
import { faTrashCan } from "@fortawesome/sharp-solid-svg-icons"
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

const LinkListCard = ({ link, index, mode, snapshot, setLinks }: any) => {
  const router = useRouter()
  const emails = ["username@gmail.com", "user02@gmail.com"]
  const [open, setOpen] = React.useState(false)
  const [deleteLinkMutation] = useMutation(deleteSite)
  const [updateStatusMutation] = useMutation(updateStatus)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event, id) => {
    setChecked(event.target.checked);
    console.log(checked);
    updateStatusMutation({ id: id, status: event.target.checked ? "active" : "inactive" })
    setLinks((prev) => prev.map((ele) => ele.id === id ? { ...ele, status: event.target.checked ? "active" : "inactive" } : ele));
  };

  const handleEditDetailsClick = async (event: React.MouseEvent<HTMLElement>, id) => {
    await router.push(Routes.EditSitePage({ siteId: id }))
  }

  const handleDeleteClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
    deleteLinkMutation({ id: id })
    setLinks((prev) => prev.filter((ele) => ele.id !== id))
  }

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
            checked={link.status === "active" ? true : false}
            onChange={(e) => handleChange(e, link.id)}
            inputProps={{ 'aria-label': 'controlled' }}
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
            onClick={() => handleOpen()}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete this link?
          </Typography>

          {/*// direction="row"*/}
          <Stack direction="row" mt={2}>
            <Button
              variant="outlined"
              aria-label="cancel"
              // style={{ marginLeft: "auto" }}
              onClick={() => handleClose()}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              aria-label="yes"
              style={{ marginLeft: "auto" }}
              // style={{ marginLeft: "auto", marginRight: "10px" }}
              onClick={(e) => handleDeleteClick(e, link.id)}
            >
              YES
            </Button>

          </Stack>
        </Box>
      </Modal>
    </Card>
  )
}

// https://linktr.ee/admin
// TODO: add details
// TODO: add tooltips
// TODO: add draggable and ordering

export default LinkListCard
