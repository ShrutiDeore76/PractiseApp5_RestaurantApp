import React,{useState} from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
    

    const [ items , updateItems ] = useState([]);//initially intialize with empty


    
  
    const addItemToCartHandler = (item) => {
      //items.push(item);
      updateItems([...items,item]);
    };
  
    const removeItemFromCartHandler = (id) => {
     
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