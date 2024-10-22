import { THEME_ENUM } from "constants/theme.constant"

/**
 * Since some configurations need to be match with specific themes,
 * we recommend to use the configuration that generated from demo.
 */

// TODO: don't use this any more, combine with mui
export const themeConfig = {
  themeColor: "indigo",
  direction: THEME_ENUM.DIR_LTR,
  // mode: THEME_ENUM.MODE_LIGHT,
  mode: THEME_ENUM.MODE_DARK,
  primaryColorLevel: 600,
  cardBordered: true,
  panelExpand: false,
  controlSize: "md",
  navMode: THEME_ENUM.NAV_MODE_LIGHT,
  layout: {
    // type: THEME_ENUM.LAYOUT_TYPE_MODERN,
    type: '',
    sideNavCollapse: false,
  },
}
