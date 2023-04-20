import React from "react"
import classNames from "classnames"
import MenuItem from "../../components/MenuItem"

// eslint-disable-next-line react/display-name
const withHeaderItem = (Component) => (props) => {
  const { className, hoverable = true } = props

  return (
    <Component
      {...props}
      className={classNames(
        "header-action-item",
        hoverable && "header-action-item-hoverable",
        className
      )}
    />
  )
}
withHeaderItem.displayName = "withHeaderItem"
export default withHeaderItem
