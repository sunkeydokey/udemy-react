import Input from '../../UI/Input';

import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amout"
        input={{
          id: 'amount_' + props.id,
          type: 'nember',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
