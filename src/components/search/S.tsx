import React, { useState, useRef, useEffect } from 'react'
import classNames from 'classnames'
import withHeaderItem from 'utils/hoc/withHeaderItem'




export const Search = () => {


  return (
    <>
      <div className='text-2xl'>
        search
        {/*<HiOutlineSearch />*/}
      </div>

    </>
  )
}

export default withHeaderItem(Search)
