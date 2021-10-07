import React from "react";
import classes from './Button.module.css';

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
}
const isEmpty = val => {
    return val === " ";
}

function Button(props){
    return <div className={classes.buttonWrapper + ` ${isOperator(props.children) ? null : classes.operator} ${isEmpty(props.children) ? classes.empty : null}`}
            onClick={() => props.handleClick(props.children)}>
        {props.children}
    </div>
}

export default Button;