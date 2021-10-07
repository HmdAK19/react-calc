import React from "react";
import classes from './ClearButton.module.css';

function ClearButton(props){
    return <div className={classes.clearBtn} onClick={props.handleClear}>
        {props.children}
    </div>
}

export default ClearButton;