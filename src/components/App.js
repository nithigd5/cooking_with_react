import React,{useState,useEffect} from 'react';
import RecipeList from './RecipeList'
import '../css/app.css'
import { v4 as uuidv4 } from 'uuid';
import RecipeEdit from './RecipeEdit'

const LS_RECIPES_KEY = "cooking_with_key.recipes"

export const recipeContext = React.createContext()

function App() {

  const [recipes, setRecipes] = useState(sampleRecipes)
  const [selectedRecipeId, setSelectedRecipeId] = useState(null)

  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId )

  useEffect(() => {
    const LSRecipes = localStorage.getItem(LS_RECIPES_KEY)
    if(LSRecipes!=null){
      setRecipes(JSON.parse(LSRecipes))
    }
    
  },[])

  useEffect(()=>{
    localStorage.setItem(LS_RECIPES_KEY,
      JSON.stringify(recipes))

      console.log("Mounted")
      return ()=> console.log("unmounted")
      
  },[recipes])

  const recipeContextValue = {
    handleAddRecipe,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }

  function handleAddRecipe(){
    const recipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions:  "",
      ingredients: [
      {
        id: uuidv4(),
        name: '',
        amount: ''
      }]
    }
    setRecipes([...recipes,recipe])
    handleRecipeSelect(recipe.id)
  }
  
  function handleRecipeDelete(id){
    if(selectedRecipeId!==null && id===selectedRecipeId){
      handleRecipeSelect(undefined)
    }
    setRecipes(recipes.filter(recipe=>{
      return recipe.id !== id
    }))
  }
  
  function handleRecipeSelect (id){
    setSelectedRecipeId(id)
  }

  function handleRecipeChange(id, recipe){
    const newRecipes = [...recipes]
    const i = newRecipes.findIndex(r => r.id === id)
    newRecipes[i] = recipe
    setRecipes(newRecipes)
  }

  return (
    <recipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes}
       handleRecipeSelect={handleRecipeSelect} 
      />
    { selectedRecipe && <RecipeEdit recipe={selectedRecipe} /> }
    </recipeContext.Provider>
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 Pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  }
]

export default App;
