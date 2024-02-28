import React from "react";

// styles
import classes from "./MealsGrid.module.css";

// components
import MealItem from "./MealItem";

const MealsGrid = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
