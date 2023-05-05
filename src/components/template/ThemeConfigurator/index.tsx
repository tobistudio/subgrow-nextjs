import React, { useReducer, useState } from 'react';
import ModeSwitcher from "./ModeSwitcher"
import LayoutSwitcher from "./LayoutSwitcher" // TODO: dawn original layout switcher
import ThemeSwitcher from "./ThemeSwitcher"
import { useTheme } from '@mui/material/styles';
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts"
import {Stack, Button, ToggleButton, Box, FormGroup, FormControlLabel, Switch} from "@mui/material"
import { useSession } from "@blitzjs/auth"
import { CopyBlock, dracula } from "react-code-blocks"
import { useQuery, useMutation } from "@blitzjs/rpc"
import CheckIcon from "@mui/icons-material/Check"
import { MuiColorInput } from "mui-color-input"
import { TextField } from "mui-rff"
import { Field, Form as FinalForm } from "react-final-form"
import createProfile from 'profiles/mutations/createProfile';
import {
  InputLabel,
  createTheme,
  Alert
} from "@mui/material"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmarkLarge } from "@fortawesome/pro-regular-svg-icons"
import {brands, fonts, misc, red} from "../../../configs/colors/default"
import { faEdit, faFloppyDisk, faGear } from "@fortawesome/pro-duotone-svg-icons"
import { FORM_ERROR } from "final-form"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import getProfile from "profiles/queries/getProfile"
import Typography from '@mui/material/Typography';
import {RootStateOrAny, useSelector} from "react-redux";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const ThemeConfigurator = (props) => {
  const session = useSession()

  const [profile]: any = useQuery(getProfile, { userId: Number(localStorage.id ? localStorage.id : session.userId), current: "yes" })

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  const [selected, setSelected] = React.useState(true);

  // setUserprofile(profile)

  //const [userprofile, dispatch] = useReducer(tasksReducer, initialTasks);
  // const userprofile = useSelector((state) => state.userprofile)

  const [createProfileMutation] = useMutation(createProfile);

  const [userprofile, setUserprofile] = React.useState()
  const theme = useSelector((state: RootStateOrAny) => state.theme)
  console.log("ThemeConfigurator. index.tsxjs", userprofile)


  const [values, setValues] = React.useState({ title: '', description: '', theme4: '', theme2: '' });

  const [colorTitle, setColorTitle] = React.useState("#ffffff")
  const [colorBg, setColorBg] = React.useState("#ffffff")
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  React.useEffect(() => {
    setColorTitle(profile.theme.titleColor);
    setColorBg(profile.theme.bgColor);
    setValues({ ...values, title: profile.title, description: profile.description })
  }, [profile]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const handleTitleColorChange = (color) => {
    document.querySelectorAll(".profile-text").forEach((userItem) => {
      // @ts-ignore
      userItem.style.color = color // works fine
    })
    setColorTitle(color)
  }

  const handleBgColorChange = (color) => {
    // @ts-ignore
    document.getElementById("profile-main").style.backgroundColor = color
    setColorBg(color)
  }

  const onSubmit = async (e) => {
    // await sleep(300)
    e.preventDefault();
    if (!values.title || !values.description || !values.theme2 || !values.theme4) {
      alert("General Setting values is required");
    }
    //  TODO: update profile, and this design, on the fly
    try {
      const site = await createProfileMutation({
        userId: Number(localStorage.id), username: localStorage.username, title: values!.title, description: values!.description, theme: {
          titleColor: colorTitle,
          bgColor: colorBg,
          showShare: selected,
          layout: 'modern',
          linkType: 'button',
          linkAlign: 'center',
          linkStyle: 'babyblue',
          linkWidth: '200',
          fontFamily: '',
          titleStyle: 'h6', // TODO: these values come from DB
          bgCardColor: values.theme4,
          linkSpacing: 20,
          descriptionColor: values.theme2,
          descriptionStyle: 'body1'
        }, widgets: {}, current: 'yes'
      })
      console.log("on submit site", site)
      //
    } catch (error) {
      console.error(error)
      return {
        [FORM_ERROR]: error.toString(),
      }
    }
  }

  const handleChangeValue = (e) => {
    console.log(values);
    setValues({ ...values, [e.target.name]: e.target.value });
    if (e.target.name === "title") document.getElementById("title")!.innerHTML = e.target.value;
    if (e.target.name === "description") document.getElementById("description")!.innerHTML = e.target.value;
  }

  // TODO: dawn needs to connect to dark mode material ui
  const onSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    //setChecked(event.target.checked);
  };

  let code = `<div>test</div>`

  const [age, setAge] = React.useState('');

  const handleThemeChange = (event: SelectChangeEvent) => {

    console.log("event.target.value",event.target.value);

    // TODO: need to get theme from here, or dynamically change material ui theme
    // data/userthemes/babyblue.tsx

    setAge(event.target.value as string);



  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col gap-y-10 mb-6">



        <Box sx={{ m: 2 }}>

          {/*

          // TODO: link to state, or update db, figure out how to get live updates to page


           */}
          {/*http://localhost:3002/profiles/clgsj3mz400019ko0kqmdd2qn/edit*/}

          {/*profile-main*/}
          <FinalForm
            // data/userthemes/modern.json // TODO: load form values based on state and this default json

            onSubmit={onSubmit}
            validate={(values) => {
              const errors: any = {}

              // if (!values.title) {
              //   errors.title = "A Link Name is required"
              // }



              return errors
            }}
            render={({ handleSubmit, form, submitting, submitError, pristine }) => {

              return (
                <form onSubmit={onSubmit} className={`banner ${submitError ? "error" : ""}`}>
                  {submitError && (
                    <Alert severity="error" className="mt-4 mb-4">
                      {submitError}
                    </Alert>
                  )}


                  <Accordion
                    TransitionProps={{ unmountOnExit: true }}
                    expanded={expanded === 'panel0'}
                    onChange={handleChange('panel0')}
                  >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Typography>General Settings</Typography>
                    </AccordionSummary>
                    <AccordionDetails>


                      <Stack spacing={4}>
                        <TextField
                          name="title"
                          label="Profile Title"
                          placeholder=""
                          className="input input-md"
                          // required={true}
                          size={"small"}
                          value={values.title}
                          onChangeCapture={handleChangeValue}
                        />


                        <TextField
                          name="titleStyle"
                          label="Title Style"
                          //value="Test Description"
                          placeholder=""
                          className="input input-md"
                          size={"small"}
                          // value={values.titleStyle} // comes from usertheme
                          onChangeCapture={handleChangeValue}
                        />

                        <TextField
                          name="description"
                          label="Description"
                          //value="Test Description"
                          placeholder=""
                          className="input input-md"
                          size={"small"}
                          value={values.description}
                          onChangeCapture={handleChangeValue}
                        />

                      </Stack>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    TransitionProps={{ unmountOnExit: true }}
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
                  >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Typography>Theme</Typography>
                    </AccordionSummary>


                    <AccordionDetails>
                      <Stack spacing={4}>


                        {/*// TODO: dropdown of different default templates */}

                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Age</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleThemeChange}
                          >
                            <MenuItem value={"babyblue"}>Baby Blue</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>



                        <TextField
                          name="description"
                          label="Description"
                          //value="Test Description"
                          placeholder=""
                          className="input input-md"
                          size={"small"}
                          value={values.description}
                          onChangeCapture={handleChangeValue}
                        />




                        <label>Select Default Mode</label>


                        <FormGroup>
                          <FormControlLabel control={<Switch onChange={(checked) => onSwitchChange(checked)} />} label="Dark Mode" />
                        </FormGroup>


                        {/*// TODO: dawn original dark mode, needs to work with material UI*/}
                        <div className="flex items-center justify-between">
                          <div>
                            <h6>Dark Mode</h6>
                            <Typography
                              color={theme.mode === "dark" ? "#ff0000" : "#008798"}
                              //color={theme.mode === 'dark'}

                            >
                              Red Text dark - blue text light
                            </Typography>
                          </div>
                          <ModeSwitcher />
                        </div>

                      </Stack>
                    </AccordionDetails>
                  </Accordion>


                  <Accordion expanded={expanded === 'pallete'} onChange={handleChange('pallete')}>
                    <AccordionSummary aria-controls="palleted-content" id="palleted-header">
                      <Typography>Pallete</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Stack spacing={4}>
                        <MuiColorInput
                          value={colorTitle}
                          onChange={handleTitleColorChange}
                          variant="outlined"
                          name="titleColorPicker"
                          label="Text Color"
                          size={"small"}
                        />

                        <MuiColorInput
                          value={colorBg}
                          onChange={handleBgColorChange}
                          variant="outlined"
                          name="bgColorPicker"
                          label="Background Color"
                          size={"small"}
                        />
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                      <Typography>Social Network Options</Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                      <Stack spacing={4}>

                        <label>Share Buttons</label>
                        {
                          selected &&
                          <ToggleButton
                            aria-label="Default Profile"
                            value="check"
                            size="small"

                            onClick={() => {
                              setSelected(!selected)
                            }}
                          >
                            <CheckIcon />
                          </ToggleButton>
                        }

                      </Stack>


                    </AccordionDetails>
                  </Accordion>

                  <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                      <Typography>Apps</Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                      <Stack spacing={4}>


                        <Typography>
                          Show fb, twitter, and other services this user has signed up for

                        </Typography>
                        <Typography>
                          {/* // TODO: these are premium features. pull icon depending on user level */}
                        </Typography>
                      </Stack>


                    </AccordionDetails>
                  </Accordion>


                  <Box textAlign="center" mt={4}>
                    <Button
                      variant="contained"
                      type="submit"
                      disabled={submitting}
                      sx={{ width: 200 }}
                      startIcon={
                        <FontAwesomeIcon icon={faFloppyDisk} style={{ color: misc.fa_primary }} />
                      }
                    >
                      Save
                    </Button>


                    <Button
                      variant="outlined"
                      disabled={submitting}
                      sx={{ width: 200 }}
                      startIcon={
                        <FontAwesomeIcon icon={faEdit} style={{ color: misc.fa_primary }} />
                      }
                    >
                      Edit Links
                    </Button>
                  </Box>


                </form>
              )
            }}
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

      </div>
      {/*<CopyButton />*/}
    </div>
  )
}

export default ThemeConfigurator

// TODO: check level, and hide some premium features

// TODO: theme json box, and saved in state on every save
// data/userthemes/modern.json




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




        <div>
          <h6 className="mb-3">Your Account</h6>
          <p>Subscription INfo</p>

          <Button variant="outlined" startIcon={<ManageAccountsIcon />}>
            Account Settings
          </Button>
        </div>

 */
