import React from "react";
import propTypes from "prop-types";

import './Button.css'

const Button = ({ text, type, clickHandler }) => (
    <button className={type} onClick={() => clickHandler(text)}>
        <span>{text}</span>
    </button>
)

Button.propTypes = {
    text: propTypes.string.isRequired,
    type: propTypes.string,
    clickHandler: propTypes.func.isRequired
}

export default Button;