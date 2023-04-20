import { useState } from "react"
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
  Stack,
  Button,
  Grid,
} from "@mui/material"

import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  ArrowForwardIosTwoTone,
} from "@mui/icons-material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/pro-duotone-svg-icons"
import Alert from "@mui/material/Alert"
import LinkListCard from "../lists/LinkListCard"
// import LinkBox from "components/dashboard/LinkBox"
import AddLinkCard from "components/dashboard/AddLinkCard"

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
export default function AddLinkWidget({ links }) {
  const [expanded, setExpanded] = useState(false)

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
  console.log("theme.mode", theme.mode)
  //  style={{maxHeight: 300}}
  // color={mode === 'dark' ? "#ffffff" : "#000000"}

  const [components, setComponents] = useState(["Sample Component"])

  function addComponent() {
    setComponents([...components, "Sample Component"])
  }

  return (
    <Stack minWidth={600} maxWidth={800} spacing={4}>
      <Box
        textAlign="center"
        sx={
          {
            //width: 300,
            // backgroundColor: 'primary.dark',
            // '&:hover': {
            //   backgroundColor: 'primary.main',
            //   opacity: [0.9, 0.8, 0.7],
            // },
          }
        }
      >
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
        <>
          {/*<Typography variant="body1" pt={2}>*/}
          {/*  <Link href={Routes.NewSitePage()}>Your Links</Link>*/}
          {/*</Typography>*/}
          {links.map((link) => (
            <LinkListCard key={link.id} link={link} />
          ))}
        </>
      )}
    </Stack>
  )
}
