import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

// eslint-disable-next-line react/display-name
const MenuItem = React.forwardRef((props, ref) => {
  const {
    asElement: Component,
    children,
    className,
    disabled,
    eventKey,
    isActive,
    menuItemHeight,
    onSelect,
    style,
    variant,
    ...rest
  } = props

  const menuItemActiveClass = `menu-item-active`
  const menuItemHoverClass = `menu-item-hoverable`
  const disabledClass = "menu-item-disabled"
  const menuItemClass = classNames(
    "menu-item",
    `menu-item-${variant}`,
    isActive && menuItemActiveClass,
    disabled && disabledClass,
    !disabled && menuItemHoverClass,
    className
  )

  const handleOnClick = (e) => {
    if (onSelect) {
      onSelect(eventKey, e)
    }
  }

  return (
    <Component
      ref={ref}
      className={menuItemClass}
      style={{ height: `${menuItemHeight}px`, ...style }}
      onClick={handleOnClick}
      {...rest}
    >
      {children}
    </Component>
  )
})

MenuItem.defaultProps = {
  asElement: "div",
  menuItemHeight: 35,
  variant: "light",
}

MenuItem.propTypes = {
  asElement: PropTypes.string,
  menuItemHeight: PropTypes.number,
  disabled: PropTypes.bool,
  isActive: PropTypes.bool,
  eventKey: PropTypes.string,
  variant: PropTypes.oneOf(["light", "dark", "themed", "transparent"]),
}
MenuItem.displayName = "MenuItem"
export default MenuItem
