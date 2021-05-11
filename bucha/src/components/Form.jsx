import { baseURL, config } from "../services";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

function Form(props) {
  const [name, setName] = useState("");
  const [batchSize, setBatchSize] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [days, setDays] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = {
      name,
      batchSize,
      ingredients,
      days,
    };
        
      await axios.post(baseURL, { fields: newRecipe }, config);
      props.setToggleFetch((curr) => !curr);    
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Recipe's Name: </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)} />
      <label htmlFor="batchSize">Batch Size: </label>
      <input
        type="text"
        id="batchSize"
        value={batchSize}
        onChange={(e) => setBatchSize(e.target.value)} />
      <label htmlFor="ingredients">Ingredients: </label>
      <input
        type="text"
        id="ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)} />
      <label htmlFor="days">Fermentation Days: </label>
      <input
        type="text"
        id="days"
        value={days}
        onChange={(e) => setDays(e.target.value)} />
      <button>Submit</button>
      </form>
  )
}
export default Form;