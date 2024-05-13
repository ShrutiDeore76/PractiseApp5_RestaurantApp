import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Paav Bhaji',
    description: 'Vegetable curry served with soft bread',
    price: 120.99,
  },
  {
    id: 'm2',
    name: 'Butter Chicken',
    description: 'Chicken curry with a spiced tomato and butter sauce',
    price: 350.05,
  },
  {
    id: 'm3',
    name: 'Veg Burger and fries',
    description: 'Browned burger served with crunchy fries',
    price: 200.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 180.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;