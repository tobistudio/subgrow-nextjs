import React, { useState } from "react"
import { useSelector, RootStateOrAny } from "react-redux"
import { useMutation } from "@blitzjs/rpc"
import { Draggable } from "react-beautiful-dnd"
import {
  Stack,
  Alert
} from "@mui/material"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import LinkListCard from "./LinkListCard"
import AddLinkCard from "components/dashboard/AddLinkCard"
import pick from "@cahil/utils/accessors/pick"
import { reorder } from "./drag"
import { DropResult } from "react-beautiful-dnd"
import updateLinkOrder from "../../sites/mutations/updateLinkOrder"

export default function AddLinkWidget({ sites, setLinkList }) {
  const [links, setLinks] = React.useState(sites)
  const [updateLinkMutation] = useMutation(updateLinkOrder)
  const onDragEnd = async ({ destination, source, id }: DropResult) => {
    if(!destination) {
      return
    }
    const newLinks: Array<any> = reorder(links, source.index, destination.index)
    for (var i = 0; i < newLinks.length; i++) {
      updateLinkMutation({ id: newLinks[i].id, order: i + 1 })
    }
    setLinks(newLinks)
  }

  React.useEffect(() => setLinkList(links), [links]);
  const theme = useSelector((state: RootStateOrAny) => state.theme)
  const [components, setComponents] = useState(["Sample Component"])

  function addComponent() {
    setComponents([...components, "Sample Component"])
  }

  return (
    <Stack minWidth={600} maxWidth={800} spacing={4}>
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
                  <Draggable key={link.id} draggableId={link.id} index={index} isDragDisabled={false}>
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
