import { baseURL, config } from "../services";
import { useState } from "react";
import axios from "axios";

function Form(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [batchSize, setBatchSize] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [days, setDays] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = {
      name,
      type,
      batchSize,
      ingredients,
      days,
    };

    await axios.post(baseURL, { fields: newRecipe }, config);
    props.setToggleFetch((curr) => !curr);
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          className="recipe-name"
          type="text"
          id="name"
          required
          placeholder="Recipe's Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="type"></label>
        <select
          className="recipe-type"
          id="type"
          required
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option selected disabled={type}>
            ---
          </option>
          <option value="fruit">Fruit</option>
          <option value="herb-spice">Herbs &amp; Spices</option>
          <option value="misc">Miscellaneous</option>
        </select>
        <label htmlFor="batchSize"></label>
        <input
          className="batch-size"
          type="text"
          id="batchSize"
          required
          placeholder="Batch Size"
          value={batchSize}
          onChange={(e) => setBatchSize(e.target.value)}
        />
        <label htmlFor="ingredients"></label>
        <textarea
          className="ingredients"
          id="ingredients"
          required
          columns="30"
          row="5"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        ></textarea>
        <label htmlFor="days"></label>
        <input
          className="fermentation"
          type="text"
          id="days"
          required
          placeholder="Fermentation Time I.e: 2 days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <img
        className="spice-image"
        src="https://images.unsplash.com/photo-1581600140682-d4e68c8cde32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        alt="spices"
      />
    </main>
  );
}
export default Form;
