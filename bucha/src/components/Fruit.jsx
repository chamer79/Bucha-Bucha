import { useParams } from "react-router-dom";

function Fruit(props) {
  const params = useParams();

  const matchingFlavors = props.flavors.filter((flavor) => flavor.fields.type === params.type)
  console.log(matchingFlavors);
  return (
    <div>
      <h3>{matchingFlavors && matchingFlavors.name}</h3>
      <p>Batch Size: </p>
      <p>{matchingFlavors && matchingFlavors.batchSize}</p>
      <p>Ingredients: </p><br />
      <p>{matchingFlavors && matchingFlavors.ingredients}</p>
      <p></p>
    </div>
  )
}

export default Fruit;