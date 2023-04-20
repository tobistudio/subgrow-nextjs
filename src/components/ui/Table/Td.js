import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import TBody from "./TBody";

const Td = React.forwardRef((props, ref) => {
    const { children, className, asElement: Component, ...rest } = props

    const tdClass = classNames(Component !== 'td' && 'td', className)

    return (
        <Component className={tdClass} ref={ref} {...rest}>
            {children}
        </Component>
    )
})

Td.propTypes = {
    asElement: PropTypes.string,
}

Td.defaultProps = {
    asElement: 'td',
}
Td.displayName = 'Td';
export default Td
