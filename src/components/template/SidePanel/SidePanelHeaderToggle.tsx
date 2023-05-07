import classNames from "classnames"
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// export const LoginForm = (props: LoginFormProps) => {
import { faPalette, faPencil } from "@fortawesome/pro-light-svg-icons";
import SidePanelContent from "./SidePanelContent"
import withHeaderItem from "utils/hoc/withHeaderItem"
import { setPanelExpand } from "store/theme/themeSlice"
import { Button } from "@mui/material";
import { misc } from "../../../configs/colors/default";

const SidePanelHeaderToggle = (props) => {
  const dispatch = useDispatch()
  const theme = useTheme();

  const { type, className, usersession, ...rest } = props

  // console.log("usersession",usersession);
  // // @ts-ignore
  // const panelExpand = useSelector((state) => state.theme.panelExpand)
  //
  // // @ts-ignore
  // const direction = useSelector((state) => state.theme.direction)

  const openPanel = () => {
    console.log("openPanel");
    dispatch(setPanelExpand(true))
  }

  const closePanel = () => {
    dispatch(setPanelExpand(false))
    const bodyClassList = document.body.classList
    if (bodyClassList.contains("drawer-lock-scroll")) {
      bodyClassList.remove("drawer-lock-scroll", "drawer-open")
    }
  }

  let output
  if (type === 'button') {
    output = <Button
      onClick={openPanel}
      variant="outlined"
      aria-label="profileadsfasdf"
      startIcon={
        <FontAwesomeIcon
          icon={faPencil}
          color={misc.fa_secondary}
          style={{ width: 15, height: 15 }}
        />
      }
    >
      <span>Edit</span>
    </Button>

  } else {
    output = <div className={classNames("side-panel-top", className)} onClick={openPanel} {...rest}>
      <FontAwesomeIcon icon={faPalette} color={theme.palette.primary.main} size="xl" />
    </div>
  }


  return (
    output
  )
}

export default SidePanelHeaderToggle
