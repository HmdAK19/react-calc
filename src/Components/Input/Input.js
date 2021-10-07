import React from "react";
import classes from "./Input.module.css";

function Input(props) {
    return <div className={classes.inputWrapper}>
        <div className={classes.input}>
            {props.input}
        </div>
        <div className={classes.result}>
            {props.result}
        </div>
    </div>
}

export default Input;