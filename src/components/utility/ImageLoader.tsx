import React from "react"
import { Spinner } from "components/ui"
import PropTypes from "prop-types"
import classNames from "classnames"

const ImageLoader = ({ src, width, height, quality }) => {
  return `https://place-hold.it/${width}x${height}`
}

ImageLoader.defaultProps = {
  width: 100,
  height: 200,
}

ImageLoader.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.number,
  quality: PropTypes.number,
}

export default ImageLoader
