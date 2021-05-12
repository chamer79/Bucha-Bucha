import { useParams } from "react-router-dom";


function Recipes(props) {
  const params = useParams();

  const matchingFlavors = props.flavors.filter(
    (flavor) => flavor.fields.type === params.type
  );
  return (
    <div className="recipe-data">
      {matchingFlavors.map((flavor) => {
        return (
          <section className="recipes">
            <h3>{flavor.fields.name}</h3>
            <p>Batch Size: {flavor.fields.batchSize}</p>
            <ul>
              Ingredients:
              {flavor.fields.ingredients.split("\n")}
              {/* {console.log(flavor.fields.ingredients.split("\n"))} */}
            </ul>
            <p>Days: {flavor.fields.days}</p>
          </section>
        );
      })}
    </div>
  );
}

export default Recipes;