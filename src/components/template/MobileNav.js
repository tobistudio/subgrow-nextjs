import React, { useState, Suspense, lazy } from "react"
import classNames from "classnames"
import { Drawer } from "components/ui"
import { NAV_MODE_THEMED, NAV_MODE_TRANSPARENT, DIR_RTL } from "constants/theme.constant"
import withHeaderItem from "utils/hoc/withHeaderItem"
import { NavToggle } from "components/shared"
import navigationConfig from "configs/navigation.config"
import useResponsive from "utils/hooks/useResponsive"
import { useSelector } from "react-redux"
import { createWrapper } from "next-redux-wrapper"

const VerticalMenuContent = lazy(() => import("components/template/VerticalMenuContent"))

const MobileNavToggle = withHeaderItem(NavToggle)

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openDrawer = () => {
    setIsOpen(true)
  }

  const onDrawerClose = (e) => {
    setIsOpen(false)
  }

  const themeColor = useSelector((state) => state.theme.themeColor)
  const primaryColorLevel = useSelector((state) => state.theme.primaryColorLevel)
  const navMode = useSelector((state) => state.theme.navMode)
  const mode = useSelector((state) => state.theme.mode)
  const direction = useSelector((state) => state.theme.direction)
  const currentRouteKey = useSelector((state) => state.base.common.currentRouteKey)
  const sideNavCollapse = useSelector((state) => state.theme.layout.sideNavCollapse)
  const userAuthority = useSelector((state) => state.auth.user.authority)

  const { smaller } = useResponsive()

  const navColor = () => {
    if (navMode === NAV_MODE_THEMED) {
      return `bg-${themeColor}-${primaryColorLevel} side-nav-${navMode}`
    }

    if (navMode === NAV_MODE_TRANSPARENT) {
      return `side-nav-${mode}`
    }

    return `side-nav-${navMode}`
  }

  return (
    <>
      {smaller.md && (
        <>
          <div className="text-2xl" onClick={openDrawer}>
            <MobileNavToggle toggled={isOpen} />
          </div>
          <Drawer
            title="Navigation"
            isOpen={isOpen}
            onClose={onDrawerClose}
            onRequestClose={onDrawerClose}
            bodyClass={classNames(navColor(), "p-0")}
            width={330}
            placement={direction === DIR_RTL ? "right" : "left"}
          >
            <Suspense fallback={<></>}>
              {isOpen && (
                <div>no need fo rmenu</div>
                // <VerticalMenuContent
                //     navMode={navMode}
                //     collapsed={sideNavCollapse}
                //     navigationTree={navigationConfig}
                //     routeKey={currentRouteKey}
                //     userAuthority={userAuthority}
                //     onMenuItemClick={onDrawerClose}
                //     direction={direction}
                // />
              )}
            </Suspense>
          </Drawer>
        </>
      )}
    </>
  )
}

export default MobileNav

// Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.
// export default createWrapper(MobileNav);
