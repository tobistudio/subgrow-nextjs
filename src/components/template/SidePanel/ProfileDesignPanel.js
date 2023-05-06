import React from "react"
import { Drawer } from "components/ui"
import SidePanelContent from "./SidePanelContent"
import withHeaderItem from "utils/hoc/withHeaderItem"
import { setPanelExpand } from "store/theme/themeSlice"
import { useSelector, useDispatch } from "react-redux"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faPalette, faPencil } from "@fortawesome/pro-light-svg-icons"
// import { Button } from "@mui/material"
// import { misc } from "../../../configs/colors/default"

export const ProfileDesignPanel = (props) => {
  const dispatch = useDispatch()

  const { className, ...rest } = props
  const panelExpand = useSelector((state) => state.theme.panelExpand)
  const direction = useSelector((state) => state.theme.direction)


  // TODO: Fixme state here, issue with state and buttons
  const closePanel = () => {
    dispatch(setPanelExpand(false))
    const bodyClassList = document.body.classList
    if (bodyClassList.contains("drawer-lock-scroll")) {
      bodyClassList.remove("drawer-lock-scroll", "drawer-open")
    }
  }

  // TODO: unknown bug with buttons
  return (
    <>
      <Drawer
        bodyClass={"body-class"}
        title="Customize Profile"
        isOpen={panelExpand}
        onClose={closePanel}
        onRequestClose={closePanel}
        placement={direction === "rtl" ? "left" : "right"}
        // width={"30%"} // TODO: percent does crazy things, this needs to depend on current device size
        width={400}
      >
        <SidePanelContent callBackClose={closePanel} />
      </Drawer>
    </>
  )
}

export default withHeaderItem(ProfileDesignPanel)
