import axios from 'axios';


const axiosAPI = axios.create({
  baseURL: 'https://server-2-80a59-default-rtdb.europe-west1.firebasedatabase.app/meals.json',
})

export const getMeals = async () => {
  const response = await axiosAPI.get('/');
  if (!response.data) return [];
  return Object.entries(response.data).map(([id, meal]) => ({id, ...meal}));
}
