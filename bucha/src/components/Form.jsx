import axios from "axios";

function Form(props) {
  const [name, setName] = useState("");
  const [batchSize, setBatchSize] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [days, setDays] = useState(0);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      batchSize,
      ingredients,
      days,
    };
    await axios.post(baseURL, { fields }, config);
    props.setToggleFetch((curr) => !curr);
  }
  
  return (
    
    <form onSubmit={handleSubmit}>
      <label htmlFor="name"></label>
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
        onChange={(e) => setbatchSize(e.target.value)} />
      <label htmlFor="ingredients"></label>
      <input
        type="text"
        id="ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)} />
      <label htmlFor="days"></label>
      <input
        type="text"
        id="days"
        value={days}
        onChange={(e) => setDays(e.target.valueAsNumber)} />
    </form>
}

export default Form;