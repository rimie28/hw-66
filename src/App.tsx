
import { Meal } from './types';
import { getMeals } from './axiosAPI.ts';
import { useEffect } from 'react';


function App() {
const [calories, setCalories] = React.useState(0);
const [meals, setMeals] = React.useState<Meal[]>([]);

const totalCalories = (meals:Meal[]) => {
  const total = meals.reduce((acc, meal) => acc + meal.calories, 0);
  setCalories(total);
};

const getAllMeals = async () => {
  const data = await getMeals();
  setMeals(data);
  totalCalories(data);
}

useEffect(() => {
  getAllMeals();
}, [])


  return (
    <div className="container">
      <h2>Calorie tracker</h2>
      <div className="d-flex justify-content-space-between">
      <h3>Total calories: {calories}</h3>
        <button type="button">Add new meal</button>
      </div>
    </div>
  )
}

export default App
