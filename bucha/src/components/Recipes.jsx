import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Recipes(props) {
  const params = useParams();

  const matchingFlavors = props.flavors.filter((flavor) => flavor.fields.type === params.type)
  console.log(matchingFlavors);
  return (
    <div>
      {matchingFlavors.map((flavor) => {
        return (
          <div>
            <h3>{flavor.fields.name}</h3>
          </div>
        )
      } )}
      
    </div>
  )
}

export default Recipes;








// function Recipes(props) {
//   return (
//     <div>
//       {flavors.map((flavor) => (
//         <Link to={`/flavors/${flavor.type}`} ></Link>
//       ))}
//     </div>
//   )
// }

// export default Recipes;