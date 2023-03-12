import React from "react";
import mealsImg from  '../../assets/Chicken-Dishes.jpg';
import classes from './Header.module.css'
import HeaderCartBotton from "./HeaderCartButton";
// import { useState } from "react";

const Header = props =>{

// const[ showHeader, setShowHeader] = useState(false)    

// const showHeaderHan = () => {
//     setShowHeader(true)

// }

    return<>
    <header className={classes.header} >
        <h1>Meals</h1>
        <HeaderCartBotton onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
    <img  src={mealsImg} alt="nice food"/>

    </div>
    </>
};

export default Header;