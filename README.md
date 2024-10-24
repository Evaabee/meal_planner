# Personalized Meal Planner

## Description

**Personalized Meal Planner** is a web application designed to help users generate meal plans based on dietary preferences and caloric needs. It leverages the Edamam API to fetch a variety of recipes tailored to the user’s selected diet and maximum calorie intake. The project addresses the common problem of finding recipes that fit specific dietary restrictions or health goals, such as high-protein, low-fat, or low-carb diets, and makes meal planning easier and more personalized.

## Problem it Solves

Many people struggle to find recipes that match their dietary preferences or health goals, especially if they are following specific diets like low-carb or high-protein. This application allows users to:

- Search for recipes by specifying their dietary needs (e.g., high-protein, low-fat).
- Set a calorie limit for the meals.
- Explore new meal ideas that fit within their daily nutritional requirements.

By automatically generating recipes based on these preferences, the app saves users time and effort in finding suitable meals.

## Setup Instructions

### Prerequisites:

- Node.js and npm installed on your machine.
- A valid Edamam API key and app ID (you can sign up for these at [Edamam Developer Portal](https://developer.edamam.com/edamam-recipe-api)).

### Steps to Set Up and Run the Project:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/meal-planner.git
   cd meal-planner
   ```

````

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Set up the Edamam API credentials:**

   - Create a `.env` file in the root of the project.
   - Add the following lines to the `.env` file, replacing `your_app_id` and `your_app_key` with your actual Edamam credentials:
     ```env
     REACT_APP_EDAMAM_APP_ID=your_app_id
     REACT_APP_EDAMAM_APP_KEY=your_app_key
     ```

4. **Start the development server:**

   ```bash
   npm start
   ```

5. **Access the app:**
   - Open your browser and go to `http://localhost:3000/` to use the app.

## API Integration

This project integrates with the **Edamam Recipe API** to fetch recipes based on user input. The API allows users to search for recipes using various filters such as dietary preferences and caloric limits. The Edamam API provides detailed information about each recipe, including ingredients, nutritional data, and links to the full recipe instructions.

### How the Edamam API is Integrated:

- When the user submits the form, the app sends a request to the Edamam API with the user’s selected diet and calorie limit.
- The API responds with a list of matching recipes, which are displayed on the page along with their images and links to the full recipe details.
- Example of a request URL used in the project:
  ```
  https://api.edamam.com/api/recipes/v2?type=public&q=salad&app_id=your_app_id&app_key=your_app_key&diet=high-protein&calories=1000
  ```

## AI Credits

Some code portions, especially related to UI design(CSS file) refinements and troubleshooting, were generated with assistance from AI tools.
````
