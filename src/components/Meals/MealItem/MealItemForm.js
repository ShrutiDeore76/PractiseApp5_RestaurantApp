import React,{useContext} from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import CartContext from '../../../store/cart-context';

const MealItemForm = (props) => {

  const cartCntxt = useContext(CartContext);

  const addItemsToCart = (event) =>{
    event.preventDefault();

    const amountValue = document.getElementById('amount_' + props.id).value;
    cartCntxt.addItem({...props.item, totalAmount: amountValue});

  }
  return (
    <form className={classes.form}>
      <Input 
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button onClick={addItemsToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;