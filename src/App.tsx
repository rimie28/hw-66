import React from 'react';
import { Meal } from './types';
import { addMeal, deleteMeal, getMeals, updateMeal } from './axiosAPI.ts';
import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MealList from './Components/MealList.tsx';
import AddEditForm from './Components/AddEditForm.tsx';


function App() {
const [calories, setCalories] = React.useState(0);
const [meals, setMeals] = React.useState<Meal[]>([]);
const [editing, setEditing] = React.useState<Meal | null>(null);

  useEffect(() => {
    getAllMeals();
  }, [])

const totalCalories = (meals:Meal[]) => {
  const total = meals.reduce((acc, meal) => acc + meal.calories, 0);
  setCalories(total);
};

const getAllMeals = async () => {
  const data = await getMeals();
  setMeals(data);
  totalCalories(data);
}


  const deletingMeal = async (id:string) => {
  await deleteMeal(id);
  getAllMeals()
  }

  const saveMeal = async (mealSave:Meal) => {
  if(editing && editing.id) {
    await updateMeal(editing.id, mealSave);
  } else {
    await addMeal(mealSave);
  }
  getAllMeals()
  }

  const navigate = useNavigate();

  const addNewMeal = () => {
    navigate('/add');
  };

  return (
    <div className="container">
      <h2 className="m-3">Calorie tracker</h2>
      <div className="d-flex gap-5 align-items-center">
      <h3>Total calories: {calories}</h3>
        <button className="btn btn-primary" type="button" onClick={addNewMeal}>Add new meal</button>
      </div>
      <Routes>
        <Route path="/" element={<MealList meals={meals} onDelete={deletingMeal} editMeal={setEditing}/>}/>
        <Route path="/add" element={<AddEditForm meal={null} onSave={saveMeal}/>}/>
        <Route path="/edit" element={<AddEditForm meal={editing} onSave={saveMeal}/>}/>
      </Routes>
    </div>
  )
}

export default App
