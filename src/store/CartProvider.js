import React,{useState} from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
    

    const [ items , updateItems ] = useState([]);//initially intialize with empty


    const addItemToCartHandler = (item) => {

      //Check if the item is already in the cart
      const existingItemIndex = items.findIndex((cartItem) => cartItem.name === item.name);
      if (existingItemIndex !== -1) {
        // If item exists, update its quantity
        const updatedCart = [...items];
        updatedCart[existingItemIndex].totalAmount=updatedCart[existingItemIndex].totalAmount + Number(item.totalAmount);
        updateItems(updatedCart);
      } else {
        // If item doesn't exist, add it to the cart
        updateItems([...items, { ...item, totalAmount: Number(item.totalAmount) }]);
      }
     
    };
  
    const removeItemFromCartHandler = (item) => {

      //Check if the item is already in the cart
      const existingItemIndex = items.findIndex((cartItem) => cartItem.name === item.name);
      if (existingItemIndex !== -1) {
        // If item exists, update its quantity( decrease it )
        const updatedCart = [...items];
        updatedCart[existingItemIndex].totalAmount--;
        updateItems(updatedCart);
      } 
        // to remove the item from the cart
      if(item.totalAmount === 0){
        const updatedCart = items.filter((cartItem) => cartItem.id !== item.id);
        updateItems(updatedCart);

      }
     
    };
  
    const cartContext = {
      items: items,
      totalAmount: 0,
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