//                  <FontAwesomeIcon
//                         icon={faUnlock}
//                         color={misc.fa_primary}
//                         style={{ width: 15, height: 15 }}
//                       />

// import * as React from "react"
import React, { useState } from "react"
import Link from "next/link"
import { useSelector, RootStateOrAny } from "react-redux"
import { useQuery, useMutation } from "@blitzjs/rpc"
import { Routes } from "@blitzjs/next"
import { styled } from "@mui/material/styles"
import { Draggable } from "react-beautiful-dnd"
// https://mui.com/material-ui/guides/minimizing-bundle-size/#option-two-use-a-babel-plugin
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  Stack,
  Button,
  Grid,
  Paper,
  Dialog,
  DialogTitle,
} from "@mui/material"
import { DragDropContext, Droppable, OnDragEndResponder } from "react-beautiful-dnd"
import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  ArrowForwardIosTwoTone,
} from "@mui/icons-material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/pro-duotone-svg-icons"
import { faGripVertical } from "@fortawesome/pro-thin-svg-icons"
import Alert from "@mui/material/Alert"
import LinkListCard, { SimpleDialogProps } from "./LinkListCard"
// import LinkBox from "components/dashboard/LinkBox"
import AddLinkCard from "components/dashboard/AddLinkCard"
import pick from "@cahil/utils/accessors/pick"
import { getLinks, reorder } from "./drag"
import { DropResult } from "react-beautiful-dnd"
import updateLinkOrder from "../../sites/mutations/updateLinkOrder"
import { misc } from "configs/colors/default"

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
export default function AddLinkWidgetBottom({ sites }) {
  const [links, setLinks] = React.useState(sites)
  const [updateLinkMutation] = useMutation(updateLinkOrder)

  const onDragEnd = async ({ destination, source, id }: DropResult) => {

    const newLinks: Array<any> = reorder(links, source.index, destination.index)

    for (var i = 0; i < newLinks.length; i++) {
      updateLinkMutation({ id: newLinks[i].id, order: i + 1 })
    }

    setLinks(newLinks)
  }


  const theme = useSelector((state: RootStateOrAny) => state.theme)

  const [components, setComponents] = useState(["Sample Component"])

  function addComponent() {
    setComponents([...components, "Sample Component"])
  }

  return (
    <Stack minWidth={600} maxWidth={800} spacing={4}>
      <Box textAlign="center">
        {/*<DeleteDialog />*/}
        <Button
          variant="addlink"
          onClick={addComponent}
          startIcon={<FontAwesomeIcon icon={faPlus} style={{ color: misc.fa_primary }} />}
        >
          <span>Add Link</span>
        </Button>
      </Box>
      {components.map((link, i) => (
        <AddLinkCard key={i} link={link} setLinks={setLinks} />
      ))}

      {!links && (
        <Alert severity="error" className="mt-4 mb-4">
          No Links
        </Alert>
      )}

      {links && (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="link-list">
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {links.map((link, index) => (
                  <Draggable key={link.id} draggableId={link.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <LinkListCard
                          snapshot={snapshot}
                          index={index}
                          key={link.id}
                          link={link}
                          mode={theme.mode}
                          setLinks={setLinks}
                        />
                      </div>
                    )}
                  </Draggable>

                  //
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
      <pre>
        {JSON.stringify(
          links.map((item) => pick(item, "id", "title", "order")),
          null,
          2
        )}
      </pre>
    </Stack>
  )
}
