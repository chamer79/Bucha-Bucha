import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Recipes(props) {
  const params = useParams();

  const matchingFlavors = props.flavors.filter((flavor) => flavor.fields.type === params.type)
  console.log(matchingFlavors);
  return (
    <main>
      {matchingFlavors.map((flavor) => {
        return (
          <section className="recipe">
            <h3>{flavor.fields.name}</h3>
            <p>Batch Size: {flavor.fields.batchSize}</p>
            <ul>Ingredients:
             <li> {flavor.fields.ingredients}</li>
            </ul>
            <p>Days: {flavor.fields.days}</p>
          </section>
        )
      })} 
    </main>
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