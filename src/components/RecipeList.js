import React, { useContext } from 'react'
import Recipe from './Recipe'
import {recipeContext} from "./App"

export default function RecipeList({recipes}) {
  const { handleAddRecipe } = useContext(recipeContext)

  return (
    <div className="recipe-list">
      <div>
        {recipes.map(recipe => {
          return (
            <Recipe
              key={recipe.id}
              {...recipe}
            />
          )
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary"
        onClick={handleAddRecipe}>Add Recipe</button>
      </div>
    </div>
  )
}
