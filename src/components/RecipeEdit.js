  
import React from 'react'
import RecipeIngredientEdit from './IngridientEdit'

export default function RecipeEdit() {
  return (
    <div className="recipe-edit">
      <div className="close-btn-container">
        <button className="close-btn">&times;</button>
      </div>
      <div class="recipe-edit-grid">
        <label htmlFor="name" className="recipe-edit-label">Name</label>
        <input type="text" className="recipe-edit-input" name="name" id="name" />
        <label className="recipe-edit-label" htmlFor="cookTime">Cook Time</label>
        <input type="text" className="recipe-edit-input" name="cookTime" id="cookTime" />
        <label className="recipe-edit-label" htmlFor="servings">Servings</label>
        <input type="number" className="recipe-edit-input" min="1" name="servings" id="servings" />
        <label className="recipe-edit-label" htmlFor="instructions">Instructions</label>
        <textarea className="recipe-edit-input" name="instructions" id="instructions"></textarea>
      </div>
      <br />
      <label className="recipe-edit-label">Ingredients</label>
      <div className="ingridient-edit-grid">
        <div className="ingridient-edit-label">Name</div>
        <div className="ingridient-edit-label">Amount</div>
        <div></div>
        <RecipeIngredientEdit />
        <RecipeIngredientEdit />
      </div>
      <div className="add-ingridient-btn-container">
        <button class="btn btn--primary">Add Ingredient</button>
      </div>
    </div>
  )
}