import React from "react"
import { Dropdown } from "components/ui"
import withHeaderItem from "utils/hoc/withHeaderItem"
// import useAuth from 'utils/hooks/useAuth'
import Link from "next/link"
import classNames from "classnames"
import { HiOutlineUser, HiOutlineCog, HiOutlineLogout } from "react-icons/hi"
// import { FiActivity } from "react-icons/fi"
// import { useCurrentUser } from "../../users/hooks/useCurrentUser"
import { useMutation } from "@blitzjs/rpc"
import logout from "../../auth/mutations/logout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faFacebook } from "@fortawesome/pro-duotone-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { misc } from "../../configs/colors/default"

import {
  Badge
} from "@mui/material"
// import Theme from "./Theme";


export const UserDropdown = ({ className, user }) => {
  const [logoutMutation] = useMutation(logout)
  const dropdownItemList = [
    {
      label: "My Profile",
      path: `/${user.username}`,
      icon: <HiOutlineUser />,
    },
    {
      label: "Settings",
      path: "/account/settings",
      icon: <HiOutlineCog />,
    },
    // {
    //   label: "Activity Log",
    //   path: "/account/activity-log",
    //   icon: <FiActivity />,
    // },
  ]

  //  className={classNames(className, "flex items-center gap-2")}
  // TODO: show icon for the social media that user is logged in
  // @ts-ignore
  const UserAvatar = (
    <div>
      <Badge
        color="secondary"
        badgeContent={0}
        sx={{ flexGrow: 1 }}
        // my={1}
      >
        <FontAwesomeIcon
          icon={faFacebook}
          color={misc.fa_primary}
          // color={theme.brands.facebook}
          style={{ width: 20, height: 20 }}
        />
      </Badge>

      {/*<div className="hidden md:block">*/}
      {/*  <div className="font-bold pl-3 pt-1">{session.username}</div>*/}
      {/*</div>*/}
    </div>
  )

  return (
    <div style={{ float: "right" }}>
      <Dropdown menuStyle={{ "minWidth": 240 }} renderTitle={UserAvatar} placement="bottom-end">
        <Dropdown.Item variant="header">
          <div className="py-2 px-3 flex items-center gap-2">
            {/*<Avatar shape="circle" src={avatar} />*/}

            <FontAwesomeIcon
              icon={faFacebook}
              color={misc.fa_primary}
              style={{ width: 15, height: 15 }}
            />

            {
              // TODO: perhaps show social media icon for what you're logged in with
            }

            <div>
              <div className="font-bold text-gray-900 dark:text-gray-100">{session.name}</div>
              <div className="text-xs">{session.username}</div>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item variant="divider" />
        {dropdownItemList.map((item) => (
          <Dropdown.Item eventKey={item.label} key={item.label} className="mb-1">
            <Link className="flex gap-2 items-center" href={item.path}>
              <span className="text-xl pt-1 opacity-50">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          </Dropdown.Item>
        ))}
        <Dropdown.Item variant="divider" />
        <Dropdown.Item
          //onClick={signOut} // TODO
          onClick={async () => {
            await logoutMutation()


          }}
          eventKey="Sign Out"
          className="gap-2"
        >
          <span className="text-xl opacity-50 pt-1">
            <HiOutlineLogout />
          </span>
          <span>Sign Out</span>
        </Dropdown.Item>
      </Dropdown>
    </div>
  )
}

export default withHeaderItem(UserDropdown)
