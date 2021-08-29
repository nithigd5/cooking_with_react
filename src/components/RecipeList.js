import React from 'react'
import Recipe from './Recipe'

export default function RecipeList(props) {
  const { recipes,
    handleAddRecipe, 
    handleRecipeDelete 
  } = props
  return (
    <div className="recipe-list">
      <div>
        {recipes.map(recipe => {
          return (
            <Recipe
              key={recipe.id}
              {...recipe}
              handleRecipeDelete = {handleRecipeDelete}
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
