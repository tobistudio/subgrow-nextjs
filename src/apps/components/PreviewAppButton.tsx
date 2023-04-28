import React from "react"
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
  faFloppyDisk,
  faFaceAnguished,
  faGear,
  faUnlock,
  faUser,
  faUserPlus,
} from "@fortawesome/pro-duotone-svg-icons"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

import { TextField } from "mui-rff"
import InputAdornment from "@mui/material/InputAdornment"
import { Field, Form as FinalForm } from "react-final-form"
import Alert from "@mui/material/Alert"
import BadWords from "../../../data/badwords.json"
import UserList from "../../../data/users.json"
import { faXmarkLarge } from "@fortawesome/pro-regular-svg-icons"
import { FORM_ERROR } from "final-form"
import { useMutation } from "@blitzjs/rpc"
import createSiteWidget from "../../sites/mutations/createSiteWidget"
import updateLinkOrder from "../../sites/mutations/updateLinkOrder"
// import { red } from '@mui/material/colors';
import { fonts, misc } from "../../configs/colors/default"

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
export default function LinkListCard({ link, setLinks }: any) {
  const router = useRouter()
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  const [createSiteMutation] = useMutation(createSiteWidget)
  const [updateLinkMutation] = useMutation(updateLinkOrder)

  /**
   * Regex works best for domains without https or http
   * @param str
   */
  function isValidUrlReg(str) {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
      "i"
    ) // fragment locator

    if (!pattern.test(str)) {
      return false
    }

    // if it already has https, then return
    if (str.slice(0, 8) === "https://") {
      return str
    } else if (str.slice(0, 7) === "http://") {
      return str.replace("http://", "https://")
    }

    // test.com may get here at this point
    let url
    try {
      url = new URL("https://" + str)
    } catch (e) {
      return false
    }
    return url.origin
  }

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
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    // No lookups unless 4 characters or more
    if (value.length < 4) {
      return ""
    }
    await sleep(100)
    // TODO: need to check value to see if bad word shows up "badbad" should flag, if "bad" is in badwords.json
    if (~BadWords.indexOf(value && value.toLowerCase())) {
      console.log("BadWords")
      //return "bad"
      return <FontAwesomeIcon icon={faFaceAnguished} size="xl" style={{ color: "#c90000" }} />
    }
    return ""
  })
  const onSubmit = async (values) => {
    await sleep(300)
    const result = isValidUrlReg(values.url)
    console.log("submit result", result)
    if (!result) {
      return { url: "Please enter a valid domain name" }
    }

    values.url = result

    try {
      const site = await createSiteMutation(values)
      console.log("on submit site", site)
      setLinks(prev => {
        return [site, ...prev.map((ele, id) => {
          updateLinkMutation({ id: ele.id, order: id + 1 });
          return ({ ...ele, order: id + 1 })
        })]
      })
      // TODO: remove the edit box, and refresh list of sites!
    } catch (error: any) {
      console.error(error)
      return {
        [FORM_ERROR]: error.toString(),
      }
    }
  }
  const handleEditDetailsClick = async (event: React.MouseEvent<HTMLElement>, id: string) => {
    //console.log(event.target)
    console.log("handleEditDetailsClick", id)
    await router.push(Routes.ShowSitePage({ siteId: id }))
    // event.preventDefault()
  }

  return (
    <Card className="card">
      <CardHeader
        // action={
        //   <Switch
        //     checked={activeChecked}
        //     onChange={handleActiveChange}
        //     inputProps={{ "aria-label": "controlled" }}
        //   />
        // }
        title="Add New Link"
      />

      <CardContent sx={{ py: 0 }}>
        <FinalForm
          onSubmit={onSubmit}
          validate={(values) => {
            // https://stackoverflow.com/questions/48539216/error-ts2339-property-email-does-not-exist-on-type-object
            const errors: any = {}

            if (!values.title) {
              errors.title = "A Link Name is required"
            }

            if (!values.url) {
              errors.url = "URL is required"
            }
            return errors
          }}
          render={({ handleSubmit, form, submitting, submitError, pristine, values }) => (
            <form onSubmit={handleSubmit} className={`banner ${submitError ? "error" : ""}`}>
              {submitError && (
                <Alert severity="error" className="mt-4 mb-4">
                  {submitError}
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
                              {meta.error !== "bad" && meta.error && meta.touched && (
                                <FontAwesomeIcon icon={faXmarkLarge} color={fonts["alert"]} />
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
                  label="Link Title"
                  name="title"
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
                    startIcon={
                      <FontAwesomeIcon icon={faFloppyDisk} style={{ color: misc.fa_primary }} />
                    }
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
        <Tooltip title="Details">
          <IconButton
            aria-label="details"
            style={{ marginLeft: "auto" }}
            onClick={(e) => handleEditDetailsClick(e, link.id)}
          >
            <ArrowForwardIosTwoTone />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  )
}

// TODO: add draggable and ordering
// TODO: refresh the list of links after an add or delete
