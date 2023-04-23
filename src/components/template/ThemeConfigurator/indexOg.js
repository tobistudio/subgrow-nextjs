import React from "react"
import ModeSwitcher from "./ModeSwitcher"
import LayoutSwitcher from "./LayoutSwitcher"
import ThemeSwitcher from "./ThemeSwitcher"
import DirectionSwitcher from "./DirectionSwitcher"
import NavModeSwitcher from "./NavModeSwitcher"
// import CopyButton from "./CopyButton"
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts"
import Button from "@mui/material/Button"

const ThemeConfiguratorOg = ({ callBackClose }) => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col gap-y-10 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h6>Dark Mode</h6>
            <span>Switch theme to dark mode</span>
          </div>
          <ModeSwitcher />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h6>Direction</h6>
            <span>Select a direction</span>
          </div>
          <DirectionSwitcher callBackClose={callBackClose} />
        </div>
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
        {/*<div>*/}
        {/*    <h6 className="mb-3">Theme</h6>*/}
        {/*    <ThemeSwitcher />*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*    <h6 className="mb-3">Layout</h6>*/}
        {/*    <LayoutSwitcher />*/}
        {/*</div>*/}
      </div>
      {/*<CopyButton />*/}
    </div>
  )
}

export default ThemeConfiguratorOg
