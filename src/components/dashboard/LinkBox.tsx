import * as React from "react"
import Link from "next/link"
import { useSelector, RootStateOrAny } from "react-redux"
import { Routes } from "@blitzjs/next"
import { styled } from "@mui/material/styles"
// https://mui.com/material-ui/guides/minimizing-bundle-size/#option-two-use-a-babel-plugin
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Switch,
  // CardMedia,
  // Typography,
  // Box,
  // Stack,
  // Button,
  // Grid,
} from "@mui/material"

import IconButton, { IconButtonProps } from "@mui/material/IconButton"
// import {
//   Favorite as FavoriteIcon,
//   Share as ShareIcon,
//   ArrowForwardIosTwoTone,
// } from "@mui/icons-material"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faPlus } from "@fortawesome/pro-duotone-svg-icons"
// import Alert from "@mui/material/Alert"
// import LinkListCard from "../lists/LinkListCard"

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
export default function AddLinkWidget({ link }) {
  const [expanded, setExpanded] = React.useState(false)
  const theme = useSelector((state: RootStateOrAny) => state.theme)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handleFavoriteClick = (event: React.MouseEvent<HTMLElement>, id: number) => {
    console.log("handleFavoriteClick", id)

    event.preventDefault()
  }

  const handleShareClick = (event: React.MouseEvent<HTMLElement>, id: number) => {
    console.log("handlehandleShareClickFavoriteClick", id)

    event.preventDefault()
  }

  const activeChecked = true

  const handleActiveChange = () => {
    setExpanded(!expanded)
  }

  return (
    <div>
      <Card className="card">
        <CardHeader
          title={link.name}
          action={
            <Switch
              checked={activeChecked}
              onChange={handleActiveChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
        />
        <CardContent
          // sx={{ p:0, '&:last-child': { pb: 0 }}}
          sx={{ py: 0 }}
        >
          sad
        </CardContent>

        <CardActions>sadfas</CardActions>
      </Card>
    </div>
  )
}
