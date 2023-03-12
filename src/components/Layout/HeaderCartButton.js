import { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartBotton = (props) => {
  const [btnlight, setBtnlight] = useState(false);
  const cartCtx = useContext(CartContext);
  // const numberOfCartItems = cartCtx.items.length; este solo es para .

  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnlight ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnlight(true);
    const timer = setTimeout(() => {
      setBtnlight(false);
    }, 300);
    return () => {
      clearTimeout(timer); // is importan to clean the timer, add return and the timer
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart </span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartBotton;
