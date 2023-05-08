import React from "react"
import { Dropdown } from "components/ui"
import withHeaderItem from "utils/hoc/withHeaderItem"
import Link from "next/link"

import { useMutation } from "@blitzjs/rpc"
import logout from "../../auth/mutations/logout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { misc } from "../../configs/colors/default"

import {
  Badge, Typography
} from "@mui/material"
import {useSession} from "@blitzjs/auth";
import {
  faUser,
  faGear,
  faSignOut,
  faLink
} from "@fortawesome/pro-duotone-svg-icons";

export const UserDropdown = ({ className, user }) => {
  const [logoutMutation] = useMutation(logout)
  const session = useSession()
  const dropdownItemList = [
    {
      label: "My Profile",
      path: `/${session.username}`,
      icon:<FontAwesomeIcon
        icon={faUser}
        style={{width: 17}}
        pr={2}
        color="#3f50b5"
      />,
    },
    {
      label: "Links",
      path: `/dashboard`,
      icon:<FontAwesomeIcon
        icon={faLink}
        style={{width: 17}}
        pr={2}
        color="#3f50b5"
      />,
    },
    {
      label: "Settings",
      path: "/account/settings",
      icon:<FontAwesomeIcon
        icon={faGear}
        style={{width: 17}}
        pr={2}
        color="#3f50b5"
        //color={misc.fa_primary} // TODO: find out if it's a good idea to use useTheme here for colors
      />,
    },
    // {
    //   label: "Activity Log",
    //   path: "/account/activity-log",
    //   icon: <FiActivity />,
    // },
  ]

  //  className={classNames(className, "flex items-center gap-2")}
  // TODO: show icon for the social media that user is logged in

  const UserAvatar = (
    <div>
      <Badge
        color="secondary"
        badgeContent={0}
        sx={{ flexGrow: 1, pl: 1 }}
        // my={1}
      >
        <FontAwesomeIcon
          icon={faFacebook}
          color={misc.fa_primary}
          size="xl"
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

            {/*<Typography variant="caption" sx={{*/}
            {/*  pt:1*/}
            {/*}}>*/}
            {/*  {session.username}*/}
            {/*</Typography>*/}


          </div>
        </Dropdown.Item>

        {dropdownItemList.map((item) => (
          <Dropdown.Item eventKey={item.label} key={item.label} className="mb-1">
            <Link className="flex gap-2 items-center" href={item.path}>
              {item.icon}
              <Typography variant="menuitem">{item.label}</Typography>
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

          <FontAwesomeIcon
            icon={faSignOut}
            style={{width: 17}}
            color="#3f50b5"
          />

          <Typography variant="menuitem">Sign Out</Typography>
        </Dropdown.Item>
      </Dropdown>
    </div>
  )
}

export default withHeaderItem(UserDropdown)
