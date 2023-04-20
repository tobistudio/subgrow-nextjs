import { APP_PREFIX_PATH } from "constants/route.constant"
import {
  NAV_ITEM_TYPE_TITLE,
  NAV_ITEM_TYPE_COLLAPSE,
  NAV_ITEM_TYPE_ITEM,
} from "constants/navigation.constant"
import { ADMIN, USER } from "constants/roles.constant"

// TODO: get data for this menu
export const appsNavigationConfigddde = [
  {
    key: "apps",
  },
]
// const APP_PREFIX_PATH = '/'
export const appsNavigationConfig = [
  {
    key: "apps",
    path: "",
    title: "Profiles",
    translateKey: "nav.apps",
    icon: "apps",
    type: NAV_ITEM_TYPE_TITLE,
    authority: [ADMIN, USER],
    subMenu: [
      {
        key: "apps.project",
        path: "",
        title: "My Profile",
        translateKey: "nav.appsProject.project",
        icon: "project",
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        subMenu: [
          {
            key: "appsProject.scrumBoard",
            path: `${APP_PREFIX_PATH}`,
            title: "My Current Profile",
            translateKey: "nav.appsProject.scrumBoard",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "appsProject.dashboard",
            path: `${APP_PREFIX_PATH}/profiles`,
            title: "Profile List",
            translateKey: "nav.appsProject.dashboard",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "appsProject.projectList",
            path: `${APP_PREFIX_PATH}/profiles/new`,
            title: "New Profile",
            translateKey: "nav.appsProject.projectList",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
        ],
      },
      {
        key: "apps.crm",
        path: "",
        title: "Site Links",
        translateKey: "nav.appsCrm.crm",
        icon: "crm",
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        subMenu: [
          {
            key: "appsCrm.dashboard",
            path: `${APP_PREFIX_PATH}/sites/`,
            title: "Sites List",
            translateKey: "nav.appsCrm.dashboard",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "appsCrm.customers",
            path: `${APP_PREFIX_PATH}/crm/customers`,
            title: "New Site",
            translateKey: "nav.appsCrm.customers",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
        ],
      },
    ],
  },
]
