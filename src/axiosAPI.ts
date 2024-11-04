import axios from 'axios';
import { Meal } from './types';


const axiosAPI = axios.create({
  baseURL: 'https://server-2-80a59-default-rtdb.europe-west1.firebasedatabase.app/meals',
})

export const getMeals = async () => {
  const response = await axiosAPI.get('/.json');
  if (!response.data) return [];
  return Object.entries(response.data).map(([id, meal]) => ({id, ...meal}));
}

export const deleteMeal = async (id: string) => {
  await axiosAPI.delete(`/${id}.json`);
}

export const updateMeal = async (id:string, meal: Meal) => {
  await axiosAPI.put(`/${id}.json`, meal);
}

export const addMeal = async (meal: Meal) => {
  await axiosAPI.post('/.json', meal);
}