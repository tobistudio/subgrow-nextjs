import React from "react"
import ModeSwitcher from "./ModeSwitcher"
import LayoutSwitcher from "./LayoutSwitcher"
import ThemeSwitcher from "./ThemeSwitcher"
import DirectionSwitcher from "./DirectionSwitcher"
import NavModeSwitcher from "./NavModeSwitcher"
// import CopyButton from "./CopyButton"
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts"
import { Stack, Button, ToggleButton, Box } from "@mui/material"
import { CopyBlock, dracula } from "react-code-blocks"
import CheckIcon from "@mui/icons-material/Check"
import { MuiColorInput } from "mui-color-input"
import { TextField } from "mui-rff"
import { Field, Form as FinalForm } from "react-final-form"
import Alert from "@mui/material/Alert"
import InputAdornment from "@mui/material/InputAdornment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmarkLarge } from "@fortawesome/pro-regular-svg-icons"
import { fonts, misc } from "../../../configs/colors/default"
import { faFaceAnguished, faFloppyDisk, faGear } from "@fortawesome/pro-duotone-svg-icons"
import { FORM_ERROR } from "final-form"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"

const ThemeConfigurator = ({ callBackClose }) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  const [selected, setSelected] = React.useState(false)

  const [colorTitle, setColorTitle] = React.useState("#ffffff")

  // const [colorBg, setcolorBg] = React.useState("#ffffff")
  const [colorBg, setColorBg] = React.useState("#ffffff")

  const handleTitleColorChange = (color) => {
    document.querySelectorAll(".profile-text").forEach((userItem) => {
      // @ts-ignore
      userItem.style.color = color // works fine
    })
    //setColorTitle(color)
  }

  const handleBgColorChange = (color) => {
    // @ts-ignore
    document.getElementById("profile-main").style.backgroundColor = color
    //setColorBg(color)
  }

  //   let age = 9

  const [age, setAge] = React.useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }

  const onSubmit = async (values) => {
    await sleep(300)

    console.log("on submit values", values)

    //  TODO: update profile, and this design, on the fly
    // try {
    //   const site = await createSiteMutation(values)
    //   console.log("on submit site", site)
    //   //
    // } catch (error) {
    //   console.error(error)
    //   return {
    //     [FORM_ERROR]: error.toString(),
    //   }
    // }
  }

  const checked = true

  let code = `<div>test</div>`

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col gap-y-10 mb-6">
        {/*<div className="flex items-center justify-between">*/}
        {/*  <div>*/}
        {/*    <h6>Dark Mode</h6>*/}
        {/*    <span>Switch theme to dark mode</span>*/}
        {/*  </div>*/}
        {/*  <ModeSwitcher />*/}
        {/*</div>*/}

        <Box sx={{ m: 2 }}>
          {/*
          TODO: everything on edit page, should go here
          // TODO: link to state, or update db, figure out how to get live updates to page



           */}
          {/*http://localhost:3002/profiles/clgsj3mz400019ko0kqmdd2qn/edit*/}

          {/*profile-main*/}
          <FinalForm
            onSubmit={onSubmit}
            validate={(values) => {
              console.log("valuessa dfasdfsadfsadf", values)
              const errors: any = {}
              // Fixes build error
              // https://stackoverflow.com/questions/48539216/error-ts2339-property-email-does-not-exist-on-type-object
              // const errors: any = {}

              if (!values.title) {
                errors.title = "A Link Name is required"
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
                    {submitError}
                  </Alert>
                )}

                <Stack spacing={4}>
                  <TextField
                    name="title"
                    label="Profile Title"
                    placeholder=""
                    className="input input-md"
                    required={true}
                    size={"small"}
                  />

                  <TextField
                    name="description"
                    label="Description"
                    //value="Test Description"
                    placeholder=""
                    className="input input-md"
                    size={"small"}
                  />

                  <div>
                    <MuiColorInput
                      value={colorTitle}
                      onChange={handleTitleColorChange}
                      variant="outlined"
                      name="titleColorPicker"
                      label="Text Color"
                      size={"small"}
                    />
                  </div>

                  <div>
                    <MuiColorInput
                      value={colorBg}
                      onChange={handleBgColorChange}
                      variant="outlined"
                      name="bgColorPicker"
                      label="Background Color"
                      size={"small"}
                    />
                  </div>

                  {/*<TextField*/}
                  {/*  name="theme.0.titleColor"*/}
                  {/*  label="titleColor hidden"*/}
                  {/*  placeholder=""*/}
                  {/*  value={colorTitle}*/}
                  {/*/>*/}

                  {/*<TextField*/}
                  {/*  name="theme.1.descriptionColor"*/}
                  {/*  label="descriptionColor"*/}
                  {/*  placeholder=""*/}
                  {/*  // type="text"*/}
                  {/*  value={colorBg}*/}
                  {/*/>*/}

                  {/*<Checkbox*/}
                  {/*  {...label}*/}
                  {/*  checked={checked}*/}
                  {/*  onChange={handleCheck}*/}
                  {/*/>*/}
                  <TextField name="theme.4.titleColor" label="Choice 1" />
                  <TextField name="theme.3.descriptionColor" label="Choice 2" value={colorBg} />
                  <TextField name="theme.2.text" label="Choice 3" />

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
                      Save Profile
                    </Button>
                  </Box>
                </Stack>
              </form>
            )}
          />

          <p>Select a theme, perhaps dropdown of what&rsquo;s available</p>

          <p>TODO: drag drop profile builder, using the accounts that are set up</p>

          <div>
            <h6 className="mb-3">Theme</h6>
            <ThemeSwitcher />
          </div>

          <Button variant="outlined" startIcon={<ManageAccountsIcon />}>
            Account Settings
          </Button>

          <Button variant="outlined" startIcon={<ManageAccountsIcon />}>
            Edit Details
          </Button>

          <CopyBlock
            text={code}
            language={"html"}
            showLineNumbers={true}
            // startingLineNumber={props.startingLineNumber}
            wrapLines
            theme={dracula}
          />
        </Box>

        <div>
          <h6 className="mb-3">Nav Mode</h6>
          <NavModeSwitcher />
        </div>
        <div>
          <h6 className="mb-3">Your Account</h6>
          <p>Subscription INfo</p>

          <Button variant="outlined" startIcon={<ManageAccountsIcon />}>
            Account Settings
          </Button>
        </div>
      </div>
      {/*<CopyButton />*/}
    </div>
  )
}

export default ThemeConfigurator

/*

                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>

 */
