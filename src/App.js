import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const APP_ID = "e902103a";
const APP_KEY = "4c5adcd53cb0b941668ce5f53047c6fc";

function MealPlanner() {
  const [diet, setDiet] = useState("high-protein"); //set default diet type
  const [calories, setCalories] = useState("1000");
  const [recipes, setRecipes] = useState([]); // store fetched recipes

  const fetchRecipes = () => {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=salad&app_id=${APP_ID}&app_key=${APP_KEY}&diet=${diet}&calories=${calories}`;

    axios
      .get(url)
      .then((response) => {
        console.log(response.data.hits);
        setRecipes(response.data.hits); //store fetched recipes
      })
      .catch((error) => {
        console.error("Error fetching recipes from Edamam:", error);
      });
  };

  return (
    <div className="meal-planner">
      <h1>Personalized Meal Planner</h1>
      <div className="form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchRecipes();
          }}
        >
          <div className="form-group">
            <label>Diet:</label>
            <select value={diet} onChange={(e) => setDiet(e.target.value)}>
              <option value="high-protein">High-Protein</option>
              <option value="low-fat">Low-Fat</option>
              <option value="low-carb">Low-Carb</option>
              <option value="balanced">Balanced</option>
            </select>
          </div>

          <div className="form-group">
            <label>Max Calories:</label>
            <input
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              placeholder="e.g. 500"
            />
          </div>

          <button type="submit">Search Recipes</button>
        </form>
      </div>
      <h2>Recipes</h2>
      <ul>
        {recipes.length > 0 ? (
          recipes.map((recipeData) => (
            <li key={recipeData.recipe.uri}>
              <h3>{recipeData.recipe.label}</h3>
              <img
                src={recipeData.recipe.image}
                alt={recipeData.recipe.label}
                width="100"
              />
              <br />
              <a
                href={recipeData.recipe.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Recipe
              </a>
            </li>
          ))
        ) : (
          <p>No recipes found. Try adjusting your search criteria.</p>
        )}
      </ul>
    </div>
  );
}

export default MealPlanner;
