import React from "react"
import Group from "../Checkbox/Group"

const Total = (props) => {
  const { total } = props
  return (
    <div className="pagination-total">
      Total <span>{total}</span> Items
    </div>
  )
}
Total.displayName = "Total"
export default Total
