
import { useParams } from "react-router-dom";



function Fruit(props) {
  const params = useParams();

  const matchingFlavors = props.flavors.filter((flavor) => flavor.fields.type === params.type)
  console.log(matchingFlavors);
  return (
    <div>
     
    </div>
  )
}

export default Fruit;