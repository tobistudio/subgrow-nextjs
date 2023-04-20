import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { APP_NAME } from "constants/app.constant"
import Image from "next/image"

const LOGO_SRC_PATH = "/img/logo/"

const Logo = (props) => {
  const { type, mode, gutter, className, imgClass, style, logoWidth } = props

  return (
    <div
      className={classNames("logo", className, gutter)}
      style={{
        ...style,
        ...{ width: logoWidth },
      }}
    >
      <Image
        className={imgClass}
        src={`${LOGO_SRC_PATH}logo-${mode}-${type}.png`}
        alt={`${APP_NAME} logo`}
        width={100}
        height={100}
      />
    </div>
  )
}

Logo.defaultProps = {
  mode: "light",
  type: "full",
  logoWidth: "auto",
}

Logo.propTypes = {
  mode: PropTypes.oneOf(["light", "dark"]),
  type: PropTypes.oneOf(["full", "streamline"]),
  gutter: PropTypes.string,
  imgClass: PropTypes.string,
  logoWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Logo
