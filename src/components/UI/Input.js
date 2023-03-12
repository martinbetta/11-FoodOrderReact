import React from 'react';
import classes from './Input.module.css'

const Input = React.forwardRef((props,ref) => {
    return <div className ={classes.input}>
        <label htmlFor={props.input.id}> {props.label}</label>
        <input ref={ref}  {...props.input}/> {/* spread operator para poder agregar los atributos sin necesitar mofid. siendo dinamico  */}

        {console.log(ref)}
    </div>

});


export default Input;
