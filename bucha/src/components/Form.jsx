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
    
  )
}

export default Form;