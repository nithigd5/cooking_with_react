import React from 'react'

export default function RecipeIngredientEdit(props) {
  const {
    ingredient,
    handleIngredientChange
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
      onInput = {e => handleChange({name : e.target.value})}
      value={ingredient.name} className="recipe-edit-input" />
      <input type="text" value={ingredient.amount} className="recipe-edit-input" />
      <button className="btn btn--danger">&times;</button>
    </>
  )
}