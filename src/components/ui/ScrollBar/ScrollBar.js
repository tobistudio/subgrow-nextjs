import React, { forwardRef } from "react"
import { Scrollbars } from "react-custom-scrollbars-2"
import CloseButton from "../CloseButton"

const ScrollBar = forwardRef((props, ref) => {
  const { direction = "ltr", ...rest } = props

  return (
    <Scrollbars
      ref={ref}
      renderView={(props) => (
        <div
          {...props}
          style={{
            ...props.style,
            ...(direction === "rtl" && {
              marginLeft: props.style.marginRight,
              marginRight: 0,
            }),
          }}
        />
      )}
      {...rest}
    />
  )
})
ScrollBar.displayName = "ScrollBar"
export default ScrollBar
