const statusDiv = document.getElementById("status");
const recipesDiv = document.getElementById("recipes");
const ingredientsSection = document.getElementById("ingredientsSection");
const ingredientsList = document.getElementById("ingredientsList");

async function loadRecipes() {
    statusDiv.textContent = "Loading recipes...";

    try {
        const response = await fetch("https://dummyjson.com/recipes");
        console.log("HTTP Status Code:", response.status);

        if (!response.ok) {
            throw new Error("Failed to fetch recipes. Status: " + response.status);
        }

        const data = await response.json();
        const recipes = data.recipes;

        statusDiv.textContent = "Recipes loaded successfully!";
        recipesDiv.innerHTML = "";

        recipes.slice(0, 6).forEach(function(recipe) {
            const card = document.createElement("div");
            card.className = "recipe-card";
            card.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <div class="recipe-info">
                    <h3>${recipe.name}</h3>
                    <p>Cuisine: ${recipe.cuisine}</p>
                    <p>Prep Time: ${recipe.prepTimeMinutes} mins</p>
                </div>
            `;

            card.addEventListener("click", function() {
                showIngredients(recipe);
            });

            recipesDiv.appendChild(card);
        });
    } catch (error) {
        statusDiv.textContent = "Error: " + error.message;
        console.error(error);
    }
}

function showIngredients(recipe) {
    ingredientsSection.style.display = "block";
    ingredientsList.innerHTML = "";

    recipe.ingredients.forEach(function(item) {
        const li = document.createElement("li");
        li.textContent = item;
        ingredientsList.appendChild(li);
    });
}

loadRecipes();