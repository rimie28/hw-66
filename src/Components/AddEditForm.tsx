import * as React from 'react';
import { AddEditProps, Meal } from '../types';
import { useNavigate } from 'react-router-dom';

const mealtimeTypes = ["Breakfast", "Snack", "Lunch", "Dinner"];

const AddEditForm:React.FC<AddEditProps> = ({meal, onSave}) => {
  const [form, setForm] = React.useState<Meal>({
    id: meal ? meal.id : null,
    mealtime: meal ? meal.mealtime : "",
    description: meal ? meal.description : "",
    calories: meal ? meal.calories : 0
  })


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value}));
  }

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    navigate('/')
  }

  return (
    <div className="container mt-5 col-6">
      <h4>Add/Edit meal:</h4>
      <form onSubmit={handleSubmit}>
        <select
          className="form-select mt-3 mb-3"
          name="mealtime"
        value={form.mealtime}
                onChange={(e) => setForm(prev => ({ ...prev, mealtime: e.target.value }))}>
          {mealtimeTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <input
          className="form-control mb-3"
        type="text"
        name="description"
        value = {form.description}
        onChange={onChange}></input>
        <input
          className="form-control mb-3"
          type="text"
          name="calories"
          value = {form.calories}
          onChange={(e) => setForm(prev => ({ ...prev, calories: Number(e.target.value)}))}
        ></input>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  )
}

export default AddEditForm