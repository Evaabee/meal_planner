import React, { useState } from "react";
import axios from "axios";

const API_KEY = "4c5adcd53cb0b941668ce5f53047c6fc"; // Replace with your actual API key

function MealPlanner() {
  const [diet, setDiet] = useState("vegetarian"); // Set default diet
  const [calories, setCalories] = useState(""); // For caloric input
  const [recipes, setRecipes] = useState([]); // To store the fetched recipes
  const [ingredients, setIngredients] = useState([]); // To store ingredients for the shopping list

  // Function to fetch recipes based on user input
  const fetchRecipes = () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?diet=${diet}&maxCalories=${calories}&number=5&apiKey=${API_KEY}`;
    axios
      .get(url)
      .then((response) => setRecipes(response.data.results)) // Store recipes in state
      .catch((error) => console.error(error));
  };

  // Function to fetch ingredients for a selected recipe
  const fetchIngredients = (recipeId) => {
    const url = `https://api.spoonacular.com/recipes/${recipeId}/ingredientWidget.json?apiKey=${API_KEY}`;
    axios
      .get(url)
      .then((response) => {
        console.log("Ingredients:", response.data.ingredients);
        setIngredients(response.data.ingredients); // Store ingredients in state
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Simple Meal Planner</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchRecipes();
        }}
      >
        <label>
          Diet:
          <select value={diet} onChange={(e) => setDiet(e.target.value)}>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="gluten free">Gluten-Free</option>
            <option value="paleo">Paleo</option>
          </select>
        </label>
        <label>
          Max Calories:
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            placeholder="e.g. 500"
          />
        </label>
        <button type="submit">Search Recipes</button>
      </form>

      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} width="100" />
            <br />
            <button onClick={() => fetchIngredients(recipe.id)}>
              Get Ingredients
            </button>
          </li>
        ))}
      </ul>

      {ingredients.length > 0 && (
        <>
          <h2>Ingredients for Shopping List</h2>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.name}: {ingredient.amount.metric.value}{" "}
                {ingredient.amount.metric.unit}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default MealPlanner;
