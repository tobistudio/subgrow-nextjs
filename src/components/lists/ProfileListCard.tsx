import * as React from "react"
import Link from "next/link"
import { useSelector, RootStateOrAny } from "react-redux"
import { Routes } from "@blitzjs/next"
import { styled } from "@mui/material/styles"
// https://mui.com/material-ui/guides/minimizing-bundle-size/#option-two-use-a-babel-plugin
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
} from "@mui/material"

import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  ArrowForwardIosTwoTone,
} from "@mui/icons-material"

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
export default function PlanListCard({ plan }) {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handleFavoriteClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
    console.log(event.target)

    event.preventDefault()
  }

  const handleShareClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
    console.log(event.target)

    event.preventDefault()
  }

  const theme = useSelector((state: RootStateOrAny) => state.theme)

  if (theme.mode === "dark") {
    //button = <LogoutButton onClick={this.handleLogoutClick} />;
  } else {
    //button = <LoginButton onClick={this.handleLoginClick} />;
  }

  //  style={{maxHeight: 300}}
  // color={mode === 'dark' ? "#ffffff" : "#000000"}
  return (
    <Card className="card">
      <Link href="/">
        <CardHeader
          title={plan.name}
          subheader={`Last updated on ${plan.updatedAt.toDateString()}`}
        />
        <CardContent
          // sx={{ p:0, '&:last-child': { pb: 0 }}}
          sx={{ py: 0 }}
        >
          {plan.description && (
            <Typography variant="body2" color={theme.mode === "dark" ? "text.light" : "text.dark"}>
              {plan.description}
            </Typography>
          )}

          <Typography variant="body2" color={theme.mode === "dark" ? "text.light" : "text.dark"}>
            {plan.name}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={(e) => handleFavoriteClick(e, "clicked")}
          >
            <FavoriteIcon
            // color={theme.mode === "dark" ? 'icon' : 'secondary'}
            />
          </IconButton>
          <IconButton aria-label="share" onClick={(e) => handleShareClick(e, "clicked")}>
            <ShareIcon />
          </IconButton>

          <IconButton aria-label="details" style={{ marginLeft: "auto" }}>
            {/*<ArrowForwardIosTwoTone color="icon" />*/}
            <ArrowForwardIosTwoTone />
          </IconButton>
        </CardActions>
      </Link>
    </Card>
  )
}

// TODO: replace with fontawesome
