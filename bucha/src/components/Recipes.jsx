import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Form from "./Form";

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
            {/* <ul> */}
            Ingredients:
            {flavor.fields.ingredients}
            {/* </ul> */}
            <p>Days: {flavor.fields.days}</p>
          </section>
        );
      })}
      <Route path="/post">
        <Form />
      </Route>
    </div>
  );
}

export default Recipes;
