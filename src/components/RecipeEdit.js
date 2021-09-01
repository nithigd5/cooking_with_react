import React, {useContext} from 'react'
import RecipeIngredientEdit from './IngridientEdit'
import {recipeContext} from "./App"
import { v4 as uuidv4 } from 'uuid';

export default function RecipeEdit({recipe}) {
  const { handleRecipeChange, handleRecipeSelect } = useContext(recipeContext)

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

  function handleIngredientAdd(){
    const newIngredient = {
      id : uuidv4(),
      name : "",
      amount : ""
    }
    handleChange({ingredients : [...recipe.ingredients,
       newIngredient]})
  }

  function handleIngredientDelete(id){
    handleChange({ingredients : 
      recipe.ingredients.filter(i=> i.id !==id )
    })
  }

  return (
    <div className="recipe-edit">
      <div className="close-btn-container">
        <button className="close-btn"
        onClick= {()=> {handleRecipeSelect(undefined)} }>&times;</button>
      </div>
      <div className="recipe-edit-grid">
        <label htmlFor="name" 
        className="recipe-edit-label">Name</label>
        <input type="text" value={recipe.name} 
        onChange= {e => handleChange({name: e.target.value}
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
        onChange= {e => handleChange({cookTime: e.target.value}
        )} />
        <label className="recipe-edit-label" htmlFor="servings">Servings</label>
        <input
        onChange= {e => handleChange({servings: e.target.value}
        )}
        value={recipe.servings} 
        type="number" className="recipe-edit-input" min="1" name="servings" id="servings" />
        <label className="recipe-edit-label" htmlFor="instructions">Instructions</label>
        <textarea
        value = {recipe.instructions}
        onChange= {e => handleChange({instructions: e.target.value}
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
         handleIngredientDelete = {handleIngredientDelete}
         handleIngredientChange = {handleIngredientChange}
         key={ingredient.id} ingredient={ingredient} />
        )}
      </div>
      <div className="add-ingridient-btn-container">
        <button onClick={()=>handleIngredientAdd()} className="btn btn--primary">Add Ingredient</button>
      </div>
    </div>
  )
}