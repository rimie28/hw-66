import * as React from 'react';
import { MealListProps } from '../types';


const MealList:React.FC<MealListProps> = ({meals, onDelete, editMeal}) => {
  return (
    <div className="container">
      {meals.map(meal => (
        <div key={meal.id} className="d-flex justify-content-between border border-2 p-2 mb-2 mt-1">
          <div>
            <span>{meal.mealtime}</span>
            <p>{meal.description}</p>
          </div>
          <p>{meal.calories}</p>
          <div className="d-flex gap-5 align-items-center">
            <button type="button" className="btn btn-primary" onClick={() => editMeal(meal)}>Edit</button>
            <button type="button" className="btn btn-primary" onClick={() => onDelete(meal.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MealList