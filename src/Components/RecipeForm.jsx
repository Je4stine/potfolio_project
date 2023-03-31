import { useDispatch } from 'react-redux';
import { addRecipe } from './recipesSlice';

function RecipeForm() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const recipe = {
      name: event.target.name.value,
      ingredients: event.target.ingredients.value,
      instructions: event.target.instructions.value
    };
    dispatch(addRecipe(recipe));
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Recipe name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Recipe name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-gray-700 font-bold mb-2">
          Ingredients
        </label>
        <input
          type="text"
          name="ingredients"
          id="ingredients"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Ingredients"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="instructions" className="block text-gray-700 font-bold mb-2">
          Instructions
        </label>
        <textarea
          name="instructions"
          id="instructions"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Instructions"
        ></textarea>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Recipe
        </button>
      </div>
    </form>
  );
}

export default RecipeForm;