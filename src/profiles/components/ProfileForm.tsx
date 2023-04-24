import { Form, FormProps } from "core/components/Form"
import { LabeledTextField } from "core/components/LabeledTextField"
import { Field, FormSpy, useField } from "react-final-form"
import { z } from "zod"
import React, { useCallback } from "react"
export { FORM_ERROR } from "core/components/Form"
// import { Switcher } from "components/ui"

import CheckIcon from "@mui/icons-material/Check"
import { Checkbox, TextField, ToggleButton } from "@mui/material"
import { MuiColorInput } from "mui-color-input"
// import { useSelector } from "react-redux"

export function ProfileForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  const label = {
    inputProps: { "aria-label": "Checkbox demo" },
  }

  const [selected, setSelected] = React.useState(false)

  const [colorTitle, setColorTitle] = React.useState("#ffffff")

  const [colorDesc, setColorDesc] = React.useState("#ffffff")

  const handleTitleColorChange = (color) => {
    setColorTitle(color)
  }

  const handleDescColorChange = (color) => {
    setColorDesc(color)
  }

  const checked = true

  /*
  Type error: This expression is not callable.
  Not all constituents of type 'boolean | ((mode: any) => { payload: any; type: "theme/setMode"; })' are callable.
    Type 'false' has no call signatures.


  const [isDark, setIsDark] = useDarkMode()

  const onSwitchChange = useCallback(
    (checked) => {
      setIsDark(checked ? "dark" : "light")
    },
    [setIsDark]
  )
   */
  //const mode = useSelector((state) => state.theme.mode)

  //const [isDark, setIsDark] = useDarkMode()
  const onSwitchChange = (checked) => {
    console.log("effect worked, but gives error", checked)
  }

  return (
    <Form<S> {...props}>
      <div className="form-container vertical">
        <LabeledTextField
          name="title"
          label="Profile Title"
          placeholder=""
          className="input input-md"
          labelClass="form-label-custom"
          wrapperClass="form-item vertical"
          required={true}
        />

        <LabeledTextField
          name="description"
          label="Description"
          //value="Test Description"
          placeholder=""
          className="input input-md"
          labelClass="form-label-custom"
          wrapperClass="form-item vertical"
          required={true}
        />

        {/*<LabeledTextField*/}
        {/*  name="theme"*/}
        {/*  label="Theme"*/}
        {/*  placeholder=""*/}
        {/*  //value="{}"*/}
        {/*  className="input input-md"*/}
        {/*  labelClass="form-label-custom"*/}
        {/*  wrapperClass="form-item vertical"*/}
        {/*  required={true}*/}
        {/*/>*/}

        {/*<LabeledTextField*/}
        {/*  name="widgets"*/}
        {/*  label="Profile Widgets"*/}
        {/*  placeholder=""*/}
        {/*  className="input input-md"*/}
        {/*  labelClass="form-label-custom"*/}
        {/*  wrapperClass="form-item vertical"*/}
        {/*  //value="{}"*/}
        {/*  // helperText="The title for this profile page"*/}
        {/*  required={true}*/}
        {/*/>*/}

        {/*<div className={"pt-10"}>*/}
        {/*  <label>Default Profile current</label>*/}
        {/*  <Switcher*/}
        {/*    // name="current"*/}
        {/*    // defaultChecked={isDark}*/}
        {/*    onChange={(checked) => onSwitchChange(checked)}*/}
        {/*  />*/}
        {/*</div>*/}

        <label>Default Profile</label>
        <ToggleButton
          aria-label="Default Profile"
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected)
          }}
        >
          <CheckIcon />
        </ToggleButton>

        <LabeledTextField
          name="username"
          label="Username"
          placeholder=""
          className="input input-md"
          labelClass="form-label-custom"
          wrapperClass="form-item vertical"
          //helperText="Select a username for this profile"
          required={true}
          // defaultValue="Profile Title"
          //value="Profile Title"
        />

        <p>Allow multiple usernames for premium accounts</p>

        <div>
          <label>Title Color</label>
          <MuiColorInput
            value={colorTitle}
            onChange={handleTitleColorChange}
            variant="outlined"
            name="titleColorPicker"
          />
        </div>

        <div>
          <label>Description Color</label>
          <MuiColorInput
            value={colorDesc}
            onChange={handleDescColorChange}
            variant="outlined"
            name="descriptionColorPicker"
          />
        </div>

        <LabeledTextField
          name="theme.0.titleColor"
          label="titleColor hidden"
          placeholder=""
          // type="hidden"
          value={colorTitle}
        />

        <LabeledTextField
          name="theme.1.descriptionColor"
          label="descriptionColor"
          placeholder=""
          // type="text"
          value={colorDesc}
        />

        {/*<Checkbox*/}
        {/*  {...label}*/}
        {/*  checked={checked}*/}
        {/*  onChange={handleCheck}*/}
        {/*/>*/}
        <LabeledTextField name="theme.4.titleColor" label="Choice 1" />
        <LabeledTextField name="theme.3.descriptionColor" label="Choice 2" value={colorDesc} />
        <LabeledTextField name="theme.2.text" label="Choice 3" />

        <p>Select a theme, perhaps dropdown of what&rsquo;s available</p>

        <p>TODO: drag drop profile builder, using the accounts that are set up</p>
      </div>
    </Form>
  )
}

{
  /*  TODO: Material Design DIRECT inputs still don't work*/
}
{
  /*<TextField*/
}
{
  /*  name="title"*/
}
{
  /*  label="Profile Title"*/
}
{
  /*  placeholder=""*/
}
{
  /*  className="input input-md"*/
}
{
  /*  required={true}*/
}
{
  /*/>*/
}

{
  //  TODO: Material Design inputs still don't work
  // https://stackoverflow.com/questions/54808856/does-react-final-form-work-with-material-ui-3-x
}
{
  /*<MdTextField*/
}
{
  /*  name="title"*/
}
{
  /*  label="Profile Title"*/
}
{
  /*  placeholder=""*/
}
{
  /*  className="input input-md"*/
}
{
  /*  labelClass="form-label-custom"*/
}
{
  /*  wrapperClass="form-item vertical"*/
}
{
  /*  //helperText="The title for this profile page"*/
}
{
  /*  required={true}*/
}
{
  /*  // defaultValue="Profile Title"*/
}
{
  /*  //value="Profile Title"*/
}
{
  /*/>*/
}

{
  /*<LabeledTextField*/
}
{
  /*  name="title"*/
}
{
  /*  label="Profile Title"*/
}
{
  /*  placeholder=""*/
}
{
  /*  className="input input-md"*/
}
{
  /*  labelClass="form-label-custom"*/
}
{
  /*  wrapperClass="form-item vertical"*/
}
{
  /*  //helperText="The title for this profile page"*/
}
{
  /*  required={true}*/
}
{
  /*  // defaultValue="Profile Title"*/
}
{
  /*  //value="Profile Title"*/
}
{
  /*/>*/
}

// TODO: not working
// https://stackoverflow.com/questions/54808856/does-react-final-form-work-with-material-ui-3-x
// <MdTextField
//   name="title"
//   label="Profile Title"
//   placeholder=""
//   className="input input-md"
//   labelClass="form-label-custom"
//   wrapperClass="form-item vertical"
//   //helperText="The title for this profile page"
//   required={true}
//   // defaultValue="Profile Title"
//   //value="Profile Title"
// />
