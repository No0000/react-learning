import { recipes } from './tutorial_data/recipes_data.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <div>
          <h2 key={recipe.id}>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient =>
              // ingredientにはkeyがないので、同じオブジェクトのkeyを使用する
              <li key={ingredient.id}>{ingredient}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}