export interface Meal {
  id: string;
  mealtime: string;
  description: string;
  calories: number;
}

export interface MealListProps {
  meals: Meal[];
  onDelete: (id:string) => void;
  editMeal: (meal: Meal) => void;
}

interface AddEditProps {
  meal: Meal | null;
  onSave: (meal: Meal) => void;
}