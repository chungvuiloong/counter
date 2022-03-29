import React from 'react';
import "./Button.module.css";

const Button = (props) => {return (
    <button className={`${classes.btn}`} onClick={props.click}>
        {props.value}
        {props.children}
    </button>
    );
};

export default Button;