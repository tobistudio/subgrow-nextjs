import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Alert from "../Alert";

const THead = React.forwardRef((props, ref) => {
    const { children, asElement: Component, className, ...rest } = props

    const tHeadClass = classNames(Component !== 'thead' && 'thead', className)

    return (
        <Component className={tHeadClass} {...rest} ref={ref}>
            {children}
        </Component>
    )
})

THead.propTypes = {
    asElement: PropTypes.string,
}

THead.defaultProps = {
    asElement: 'thead',
}
THead.displayName = 'THead';
export default THead
