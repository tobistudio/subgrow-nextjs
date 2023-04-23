import React from "react"
import ModeSwitcher from "./ModeSwitcher"
import LayoutSwitcher from "./LayoutSwitcher"
import ThemeSwitcher from "./ThemeSwitcher"
import DirectionSwitcher from "./DirectionSwitcher"
import NavModeSwitcher from "./NavModeSwitcher"
// import CopyButton from "./CopyButton"
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts"
import { Stack, Button } from "@mui/material"
import { CopyBlock, dracula } from "react-code-blocks"

const ThemeConfigurator = ({ callBackClose }) => {
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

        <Stack>
          <div>
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

            {/*TODO: everything on edit page, should go here */}
            {/*http://localhost:3002/profiles/clgsj3mz400019ko0kqmdd2qn/edit*/}
          </div>

          <div>
            <h6 className="mb-3">Theme</h6>
            <ThemeSwitcher />
          </div>

          <Button variant="outlined" startIcon={<ManageAccountsIcon />}>
            Account Settings
          </Button>
        </Stack>

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
