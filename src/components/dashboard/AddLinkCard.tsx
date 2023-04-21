import * as React from "react"
import Link from "next/link"
import { useSession } from "@blitzjs/auth"
// import { useSelector, RootStateOrAny } from "react-redux"
import { Provider, RootStateOrAny, useSelector } from "react-redux"
import { useRouter } from "next/router"
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
  Switch,
  Tooltip,
} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  ArrowForwardIosTwoTone,
} from "@mui/icons-material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faFaceAnguished,
  faGear,
  faUnlock,
  faUser,
  faUserPlus,
} from "@fortawesome/pro-duotone-svg-icons"
import { TextField } from "mui-rff"
import InputAdornment from "@mui/material/InputAdornment"
import { Field, Form as FinalForm } from "react-final-form"
import Alert from "@mui/material/Alert"
import BadWords from "../../../data/badwords.json"
import UserList from "../../../data/users.json"
import { faXmarkLarge } from "@fortawesome/pro-regular-svg-icons"
import { FORM_ERROR } from "final-form"
import { useMutation } from "@blitzjs/rpc"
import createSite from "../../sites/mutations/createSite"
// import { red } from '@mui/material/colors';
import { fonts } from "../../configs/colors/default"

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
export default function LinkListCard({ link }) {
  const [expanded, setExpanded] = React.useState(false)
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  const [createSiteMutation] = useMutation(createSite)

  const simpleMemoize = (fn) => {
    let lastArg
    let lastResult
    return (arg) => {
      if (arg !== lastArg) {
        lastArg = arg
        lastResult = fn(arg)
      }
      return lastResult
    }
  }
  const validateUrl = simpleMemoize(async (value) => {
    // No lookups unless 4 characters or more
    if (value.length < 4) {
      return ""
    }
    await sleep(100)
    // TODO: need to check value to see if bad word shows up "badbad" should flag, if "bad" is in badwords.json
    if (~BadWords.indexOf(value && value.toLowerCase())) {
      console.log("BadWords")

      return "bad"
      //return <FontAwesomeIcon icon={faFaceAnguished} size="xl" style={{ color: "#c90000" }} />
    }

    return ""

    // return true;    // wont work
  })

  /**
   * Regex works best for domains without https or http
   * @param str
   */
  function isValidUrlReg(str) {
    const pattern = new RegExp(
      "^([a-zA-Z]+:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$", // fragment locator
      "i"
    )

    console.log("pattern.test(str)", pattern.test(str))

    if (!pattern.test(str)) {
      return false
    }

    // add https
    if (str.slice(0, 8) === "https://") {
      console.log("https://  -- ", str)
      return str
    } else if (str.slice(0, 7) === "http://") {
      console.log("http://  -- ", str.replace("http://", "https://"))
      return str.replace("http://", "https://")
    }

    return str
  }

  const onSubmit = async (values) => {
    await sleep(300)

    //let isValid = isValidUrlReg(values.url)
    console.log("submit values", values)
    const result = isValidUrlReg(values.url)
    console.log("submit result", result)
    if (!result) {
      return { url: "Please enter a valid domain name" }
    }

    values.url = result

    try {
      const site = await createSiteMutation(values)
      //await router.push(Routes.ShowSitePage({ siteId: site.id }))

      console.log("on submit site", site)
      // TODO: remove the edit box, and refresh list of sites!
    } catch (error: any) {
      console.error(error)
      return {
        [FORM_ERROR]: error.toString(),
      }
    }
  }

  const handleFavoriteClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
    console.log(event.target)
    console.log("handleFavoriteClick", id)
    event.preventDefault()
  }

  // Opens a modal for edits  // TODO: add edit modal
  const handleEditClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
    console.log(event.target)

    console.log("handleEditClick", id)
    event.preventDefault()
  }

  const handleEditDetailsClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
    console.log(event.target)
    console.log("handleEditDetailsClick", id)
    event.preventDefault()
  }

  const theme = useSelector((state: RootStateOrAny) => state.theme)

  if (theme.mode === "dark") {
    //button = <LogoutButton onClick={this.handleLogoutClick} />;
  } else {
    //button = <LoginButton onClick={this.handleLoginClick} />;
  }

  const activeChecked = true

  const handleActiveChange = () => {
    setExpanded(!expanded)
  }

  //  style={{maxHeight: 300}}
  // color={mode === 'dark' ? "#ffffff" : "#000000"}

  // TODO: link this to state???

  return (
    <Card className="card">
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        // action={<FontAwesomeIcon icon={faGear} spin color={"#3f50b5"} /> }
        action={
          <Switch
            checked={activeChecked}
            onChange={handleActiveChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        title="Add New Link"
        //subheader="September 14, 2016"
      />

      <CardContent
        // sx={{ p:0, '&:last-child': { pb: 0 }}}
        sx={{ py: 0 }}
      >
        <FinalForm
          onSubmit={onSubmit}
          validate={(values) => {
            // const errors = {}
            // Fixes build error
            // https://stackoverflow.com/questions/48539216/error-ts2339-property-email-does-not-exist-on-type-object
            const errors: any = {}

            if (!values.name) {
              errors.name = "A Link Name is required"
            }

            if (!values.url) {
              errors.url = "URL is required"
            }

            // set state for button

            return errors
          }}
          render={({ handleSubmit, form, submitting, submitError, pristine, values }) => (
            <form onSubmit={handleSubmit} className={`banner ${submitError ? "error" : ""}`}>
              {submitError && (
                <Alert severity="error" className="mt-4 mb-4">
                  There was a problem with your submission.
                </Alert>
              )}

              <Stack spacing={4}>
                <Field name="url" validate={validateUrl}>
                  {({ input, meta }) => (
                    <Stack direction="row" spacing={2}>
                      <TextField
                        label="URL"
                        name="url"
                        type="text"
                        style={{ maxWidth: 380 }}
                        className="input input-md"
                        size="small"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              {/*<FontAwesomeIcon icon={theme.mode} spin color={"#3f50b5"} />*/}

                              {meta.error !== "bad" && meta.error && meta.touched && (
                                <FontAwesomeIcon icon={faXmarkLarge} color={fonts["alert"]} />
                                // <FontAwesomeIcon icon={faXmarkLarge} color={"#e10000"} />
                              )}

                              {meta.error === "bad" && meta.error && meta.touched && (
                                <FontAwesomeIcon icon={faFaceAnguished} color={fonts["alert"]} />
                                // <FontAwesomeIcon icon={faXmarkLarge} color={"#e10000"} />
                              )}

                              {submitting && (
                                <FontAwesomeIcon icon={faGear} spin color={fonts["gear"]} />
                              )}
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Stack>
                  )}
                </Field>
                <TextField
                  label="Link Name"
                  name="name"
                  style={{ maxWidth: 380 }}
                  size="small"
                  // TODO: could add bad word check, leave off for now
                  // InputProps={{
                  //   //placeholder: "Email Address",
                  //   startAdornment: (
                  //     <InputAdornment position="start">
                  //       <FontAwesomeIcon icon={faEnvelope} color={"#a0a0ce"} />
                  //     </InputAdornment>
                  //   ),
                  // }}
                />
                <Box textAlign="center">
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={submitting}
                    sx={{ width: 200 }}
                  >
                    Save Link
                  </Button>
                </Box>
              </Stack>
            </form>
          )}
        />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={(e) => handleFavoriteClick(e, link.id)}>
          <FontAwesomeIcon icon={faUserPlus} style={{ color: "#e5e6f1", paddingRight: 7 }} />
        </IconButton>
        <IconButton aria-label="share" onClick={(e) => handleEditClick(e, link.id)}>
          <FontAwesomeIcon icon={faUserPlus} style={{ color: "#e5e6f1", paddingRight: 7 }} />
        </IconButton>

        <IconButton
          aria-label="details"
          style={{ marginLeft: "auto" }}
          onClick={(e) => handleEditDetailsClick(e, link.id)}
        >
          {/*<ArrowForwardIosTwoTone color="icon" />*/}
          <ArrowForwardIosTwoTone />
        </IconButton>
      </CardActions>
    </Card>
  )
}

// https://linktr.ee/admin
// TODO: replace with fontawesome
// TODO: add tooltips
// TODO: add details
// TODO: add tooltips
// TODO: add draggable and ordering

// <Typography variant="body2" color={theme.mode === "dark" ? "text.light" : "text.dark"}>
//   name {link.name}
// </Typography>
