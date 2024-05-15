import React,{useContext} from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {

  const cartCntxt = useContext(CartContext);

  const hasItems = cartCntxt.items.length > 0;

  let totalPrice = 0;
  cartCntxt.items.forEach(item=>{
    totalPrice = totalPrice + (item.price * item.totalAmount);
  })
  //const price = `$${totalPrice.toFixed(2)}`;

  const cartItemRemoveHandler = (item) => {
    cartCntxt.removeItem(item);
  };

  const cartItemAddHandler = (item) => {
    cartCntxt.addItem({...item,totalAmount: 1});
  };


  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCntxt.items.map((item) => (
       // <li>Name : {item.name} Amount : {item.price} Quantity : {item.quantity}</li>
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.totalAmount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalPrice.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;