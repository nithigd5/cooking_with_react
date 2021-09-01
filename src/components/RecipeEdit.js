import React, {useContext} from 'react'
import RecipeIngredientEdit from './IngridientEdit'
import {recipeContext} from "./App"

export default function RecipeEdit({recipe}) {
  const { handleRecipeChange } = useContext(recipeContext)

  function handleChange(changes){
    handleRecipeChange(recipe.id,{...recipe,...changes})
  }
  function handleIngredientChange(id,ingredient){
     const newIngredients = [...recipe.ingredients]
     const i = newIngredients.findIndex(ingredient=>{
       return ingredient.id === id
     })
     newIngredients[i] = ingredient
     handleChange({ingredients : newIngredients})
  }

  return (
    <div className="recipe-edit">
      <div className="close-btn-container">
        <button className="close-btn">&times;</button>
      </div>
      <div className="recipe-edit-grid">
        <label htmlFor="name" 
        className="recipe-edit-label">Name</label>
        <input type="text" value={recipe.name} 
        onInput= {e => handleChange({name: e.target.value}
        )}
       className="recipe-edit-input"
        name="name" id="name" />
        <label 
        className="recipe-edit-label" 
        htmlFor="cookTime">Cook Time</label>
        <input type="text"         
        value={recipe.cookTime} 
        className="recipe-edit-input" 
        name="cookTime" id="cookTime"
        onInput= {e => handleChange({cookTime: e.target.value}
        )} />
        <label className="recipe-edit-label" htmlFor="servings">Servings</label>
        <input
        onInput= {e => handleChange({servings: e.target.value}
        )}
        value={recipe.servings} 
        type="number" className="recipe-edit-input" min="1" name="servings" id="servings" />
        <label className="recipe-edit-label" htmlFor="instructions">Instructions</label>
        <textarea
        value = {recipe.instructions}
        onInput= {e => handleChange({instructions: e.target.value}
        )}
        className="recipe-edit-input" name="instructions" id="instructions">
        </textarea>
      </div>
      <br />
      <label className="recipe-edit-label">Ingredients</label>
      <div className="ingridient-edit-grid">
        <div className="ingridient-edit-label">Name</div>
        <div className="ingridient-edit-label">Amount</div>
        <div></div>
        {recipe.ingredients.map(ingredient=>        
         <RecipeIngredientEdit 
         handleIngredientChange = {handleIngredientChange}
         key={ingredient.id} ingredient={ingredient} />
        )}
      </div>
      <div className="add-ingridient-btn-container">
        <button className="btn btn--primary">Add Ingredient</button>
      </div>
    </div>
  )
}