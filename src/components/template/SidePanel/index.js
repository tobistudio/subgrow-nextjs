import React from "react"
import classNames from "classnames"
import { Drawer } from "components/ui"
import { HiOutlineCog } from "react-icons/hi"
import SidePanelContent from "./SidePanelContent"
import withHeaderItem from "utils/hoc/withHeaderItem"
import { setPanelExpand } from "store/theme/themeSlice"
import { useSelector, useDispatch } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faPalette} from "@fortawesome/pro-duotone-svg-icons";
import { fonts } from "../../../configs/colors/default";
import { faPalette } from "@fortawesome/pro-light-svg-icons";
import { useTheme } from '@mui/material/styles';

export const SidePanel = (props) => {
  const dispatch = useDispatch()
  const theme = useTheme();

  const { className, ...rest } = props

  const panelExpand = useSelector((state) => state.theme.panelExpand)

  const direction = useSelector((state) => state.theme.direction)

  const openPanel = () => {
    dispatch(setPanelExpand(true))
  }

  const closePanel = () => {
    dispatch(setPanelExpand(false))
    const bodyClassList = document.body.classList
    if (bodyClassList.contains("drawer-lock-scroll")) {
      bodyClassList.remove("drawer-lock-scroll", "drawer-open")
    }
  }


  let size
  if (theme.breakpoints.up('md')) {

  }

  React.useEffect(() => console.log("************", panelExpand), [panelExpand])

  console.log("md", theme.breakpoints.up('md'));

  return (
    <>
      <Drawer
        title="Profile Design index DO NOT USE"
        isOpen={panelExpand}
        onClose={closePanel}
        onRequestClose={closePanel}
        placement={direction === "rtl" ? "left" : "right"}
        //width={375} // TODO: based on size
        width={"50%"} // TODO: based on size
      //width={theme.breakpoints.between('sm', 'md')}

      >
        <SidePanelContent callBackClose={closePanel} />
      </Drawer>
    </>
  )
}

export default withHeaderItem(SidePanel)
