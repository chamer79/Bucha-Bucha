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
      <label htmlFor="name"></label>
      <input
        className="recipe-name"
        type="text"
        id="name"
        placeholder="Recipe's Name"
        value={name}
        onChange={(e) => setName(e.target.value)} />
      <label htmlFor="batchSize"></label>
      <input
        className="batch-size"
        type="text"
        id="batchSize"
        placeholder="Batch Size"
        value={batchSize}
        onChange={(e) => setBatchSize(e.target.value)} />
      <label htmlFor="ingredients"></label>
      <input
        className="ingredients"
        type="text"
        id="ingredients"
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)} />
      <label htmlFor="days"></label>
      <input
        className="fermentation"
        type="text"
        id="days"
        placeholder="Days for Fermentation"
        value={days}
        onChange={(e) => setDays(parseInt(e.target.value))} />
      <button>Submit</button>
      </form>
  )
}
export default Form;