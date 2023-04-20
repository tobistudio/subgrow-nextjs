import React from "react"
import classNames from "classnames"
import { HiChevronLeft } from "react-icons/hi"
import Pagination from "./Pagination"

const Prev = (props) => {
  const { currentPage, pagerClass, onPrev } = props

  const disabled = currentPage <= 1

  const onPrevClick = (e) => {
    if (disabled) {
      return
    }
    onPrev(e)
  }

  const pagerPrevClass = classNames(
    pagerClass.default,
    "pagination-pager-prev",
    disabled ? pagerClass.disabled : pagerClass.inactive
  )

  return (
    <span className={pagerPrevClass} onClick={onPrevClick}>
      <HiChevronLeft />
    </span>
  )
}
Prev.displayName = "Prev"
export default Prev
