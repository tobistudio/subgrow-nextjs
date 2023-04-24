import React from "react"
import { Drawer } from "components/ui"
import SidePanelContent from "./SidePanelContent"
import withHeaderItem from "utils/hoc/withHeaderItem"
import { setPanelExpand } from "store/theme/themeSlice"
import { useSelector, useDispatch } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignOut, faUser } from "@fortawesome/pro-duotone-svg-icons"
import { Button, Stack } from "@mui/material"
import { misc } from "../../../configs/colors/default"

export const ProfileDesignPanel = (props) => {
  const dispatch = useDispatch()

  const { className, ...rest } = props

  const panelExpand = useSelector((state) => state.theme.panelExpand)

  const direction = useSelector((state) => state.theme.direction)

  const openPanel = () => {
    dispatch(setPanelExpand(true))
  }

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
      <Button
        onClick={openPanel}
        variant="contained"
        aria-label="profile"
        startIcon={<FontAwesomeIcon icon={faUser} color={misc.fa_primary} />}
      >
        <span>Edit</span>
      </Button>

      <Drawer
        title="Profile Designaa CCC"
        isOpen={panelExpand}
        onClose={closePanel}
        onRequestClose={closePanel}
        placement={direction === "rtl" ? "left" : "right"}
        width={375}
      >
        <SidePanelContent callBackClose={closePanel} />
      </Drawer>
    </>
  )
}

export default withHeaderItem(ProfileDesignPanel)
