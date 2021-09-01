import React from 'react'

export default function RecipeIngredientEdit(props) {
  const {
    ingredient,
    handleIngredientChange,
    handleIngredientDelete
  } = props
  function handleChange(changes){
    handleIngredientChange(
      ingredient.id,
      {...ingredient,...changes}
      )
  }
  return (
    <>
      <input type="text" 
      onChange = {e => handleChange({name : e.target.value})}
      value={ingredient.name} className="recipe-edit-input" />
      <input type="text"
      onChange = {e => handleChange({amount : e.target.value})}
        value={ingredient.amount} className="recipe-edit-input" />
      <button 
      onClick={ ()=> handleIngredientDelete(ingredient.id) }
      className="btn btn--danger">&times;</button>
    </>
  )
}