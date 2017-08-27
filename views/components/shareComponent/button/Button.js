import React from 'react'
import PropTypes from 'prop-types'

const Button = props=>{
    const onClick = e=>{
        if(props.onClick && !props.disable){
            props.onClick()
        }
    }
    return <div className={`button ${props.className||''} ${props.disable?'disable':''}`} onClick={onClick}>
                {props.children}
            </div>
}
Button.propTypes = {
    className: PropTypes.string,
    disable : PropTypes.bool,
    onClick: PropTypes.func,
}

export default Button