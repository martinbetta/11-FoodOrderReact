import { useReducer } from "react";
import CartContext from "./cart-context";

const initCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    //Cuando hago ADD 1ero actualizo el TOTAL AMOUNT
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    //2do Hago un FIND para ver si en ITEM que agrego ya esta en el array con el ID
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    ); //
    //3ero, Si lo encuentra lo guardo en una constante
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    //4to valido si existingCartItem es truely(Solo es trudly si tiene un elemento)
    if (existingCartItem) {
      //5to Si es true, realuzo una copia del array (...array) y solo modifico el AMOUNT sumandole el existente en el array y el nuevo
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      //6to updatedItems le hago una copia del array que existe, aca se acrualiza todo el ARRAY cuando el elemento esta en el array
      updatedItems = [...state.items];
      console.log(updatedItems);
      console.log(updatedItems[existingCartItemIndex]);
      console.log(updatedItem);
      updatedItems[existingCartItemIndex] = updatedItem;
      console.log(updatedItems[existingCartItemIndex]);
    } else {
      //Si no esta en el array, lo contateno al existente.
      updatedItems = state.items.concat(action.item);
    }
    return {
      // me devuelve los Items actualizados o no depende si esta, y el TotalAmount
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount ===1 ) {
      updatedItems = state.items.filter(item => item.id !== action.id)
    } else{
        const updatedItem = {...existingItem, amount :existingItem.amount -1}
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      return{
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      }
  }
  return initCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
