Sure, here's a revised version of your README file:

---

# Recipe Web Application

This is a web application for displaying and managing recipes. The application features a landing page with summaries of recipes, detailed recipe pages, a shopping cart for ingredients, a carousel for instruction display, and a team page. The back-end is developed using Express.js, and the application is connected with the USDA FoodData Central API.

## Features

### Landing Page
- Displays summaries of 8 recipes including the title, an image, and a link to the detailed page.

### Recipe Detail Page
- Accessible by clicking the detail button on a recipe summary.
- Displays the recipe title, description, ingredients, steps, and an image.
- Includes a return button to navigate back to the landing page.

### Ingredients Shopping Cart
- Allows users to add ingredients from each recipe to a shopping cart.
- The shopping list is stored in local storage, making it persistent across navigation and page reloads.
- Supports add, remove, and clear operations.

### Carousel Mode
- Displays instructions in a user-friendly manner for mobile web browsers.

### Team Page
- Shows all the developers of this web application.

### Back-End
- Developed using Express.js.
- Entry point: `app.js` file, running on PORT 8000.
- Recipes are stored in `/api/recipes`.
- REST APIs including GET and POST are used for interaction between the front-end and back-end.

### Add a Recipe
- Users can add a recipe JSON file via the "Add Your Recipes" link in the Nav bar.

### USDA FoodData Central API Integration
- Clicking an ingredient searches the ingredient name using the USDA FoodData Central API.
- Opens an ingredient details page on the USDA website if available.
- Uses local storage to navigate back to the application upon clicking 'Go Back' in the browser.

### Error Alerts (Azure Cloud)
- Three alerts set up for different error conditions:
  1. **CPU Usage:** Condition: `UsageNanoCores > 0.1`, Severity: Warning.
  2. **Network In:** Condition: `RxBytes > 200000 B`, Severity: Warning.
  3. **Network Out:** Condition: `TxBytes > 1000000 B`, Severity: Warning.

## Installation and Running

1. Clone the repository:
   ```bash
   git clone git@github.com:Realchenz/GoodRecipes.git
   ```
2. Navigate to the project directory:
   ```bash
   cd recipe-demo
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```

## Project Structure

- `app.js`: Entry point of the back-end.
- `/api/recipes`: Endpoint for storing recipes.
- `RecipeList`: Component for the landing page.
- Each recipe detail has its own route with a dynamic segment.

## Contributing

Feel free to contribute to this project by creating pull requests or submitting issues.

## License

This project is licensed under the MIT License.

---

Feel free to modify any section as per your requirements.
