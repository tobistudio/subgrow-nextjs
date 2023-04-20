import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Th from "./Th";

const Tr = React.forwardRef((props, ref) => {
    const { children, asElement: Component, className, ...rest } = props

    const trClass = classNames(Component !== 'tr' && 'tr', className)

    return (
        <Component className={trClass} ref={ref} {...rest}>
            {children}
        </Component>
    )
})

Tr.propTypes = {
    asElement: PropTypes.string,
}

Tr.defaultProps = {
    asElement: 'tr',
}
Tr.displayName = 'Tr';
export default Tr
