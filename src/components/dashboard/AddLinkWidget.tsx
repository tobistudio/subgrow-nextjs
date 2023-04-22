import * as React from "react"
import { useState } from "react"
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
import Alert from "@mui/material/Alert"
import LinkListCard from "./LinkListCard"
// import LinkBox from "components/dashboard/LinkBox"
import AddLinkCard from "components/dashboard/AddLinkCard"

import pick from "@cahil/utils/accessors/pick"
import { getLinks, reorder } from "./drag"
import { DropResult } from "react-beautiful-dnd"
import updateLinkOrder from "../../sites/mutations/updateLinkOrder"

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
export default function AddLinkWidget({ sites }) {
  //const [setLinks] = links

  const [links, setLinks] = React.useState(sites)
  const [updateLinkMutation] = useMutation(updateLinkOrder)

  // TODO: finish and fix drag and dro, change order
  const onDragEnd = async ({ destination, source, id }: DropResult) => {
    // dropped outside the list
    //if (!destination) return
    // let result = helper.reorder(val.source,val.destination,taskList);
    // setTasks(result)
    // let result = drag.reorder(source,destination,taskList);

    // TODO: change order and also reload list
    console.log("destination", destination)
    console.log("id", id)
    console.log("source", source)
    console.log("links", links)

    const project = await updateLinkMutation(source, destination)

    const newLinks = reorder(links, source.index, destination.index)

    // TODO: change order in the database

    setLinks(newLinks)
  }
  // TODO: handle checks outside of loop with arrays
  //   const [checked, setChecked] = React.useState(true);
  // const handleActiveChange = (e: React.ChangeEvent<HTMLInputElement>,id) => {
  //   setSwitcherChecked(e.target.checked);
  //
  //   console.log("handleActiveChange id",id);
  //   console.log("handleActiveChange id",e);
  //
  //   // TODO: update db
  // };

  const theme = useSelector((state: RootStateOrAny) => state.theme)

  if (theme.mode === "dark") {
    //button = <LogoutButton onClick={this.handleLogoutClick} />;
  } else {
    //button = <LoginButton onClick={this.handleLoginClick} />;
  }

  //  style={{maxHeight: 300}}
  // color={mode === 'dark' ? "#ffffff" : "#000000"}

  const [components, setComponents] = useState(["Sample Component"])

  function addComponent() {
    setComponents([...components, "Sample Component"])
  }

  return (
    <Stack minWidth={600} maxWidth={800} spacing={4}>
      <Box textAlign="center">
        <Button variant="addlink" onClick={addComponent}>
          <FontAwesomeIcon icon={faPlus} style={{ color: "#e5e6f1", paddingRight: 7 }} />
          <span>Add Link</span>
        </Button>
      </Box>
      {components.map((link, i) => (
        <AddLinkCard key={i} link={link} />
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
                  // <Draggable draggableId={link.id} index={index}>
                  //   {(provided, snapshot) => (
                  //     <ListItem
                  //       ref={provided.innerRef}
                  //       {...provided.draggableProps}
                  //       {...provided.dragHandleProps}
                  //       className={snapshot.isDragging ? "dragging" : "not-dragging"}
                  //     >
                  //
                  //     </ListItem></Draggable>
                  //

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

      {/*{links && (*/}
      {/*  <DragDropContext onDragEnd={onDragEnd}>*/}
      {/*    <Droppable droppableId="link-list">*/}
      {/*      {(provided, snapshot) => (*/}
      {/*        <div ref={provided.innerRef} {...provided.droppableProps}>*/}
      {/*          {links.map((link, index) => (*/}
      {/*            <LinkListCard snapshot={snapshot} index={index} key={link.id} link={link} mode={theme.mode} />*/}
      {/*          ))}*/}
      {/*          {provided.placeholder}*/}
      {/*        </div>*/}
      {/*      )}*/}
      {/*    </Droppable>*/}
      {/*  </DragDropContext>*/}
      {/*)}*/}

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
