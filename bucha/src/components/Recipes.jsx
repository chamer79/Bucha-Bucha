import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Form from "./Form";
import SubNav from "./SubNav";

function Recipes(props) {
  const params = useParams();

  const matchingFlavors = props.flavors.filter(
    (flavor) => flavor.fields.type === params.type
  );
  return (
    <main>
      <SubNav />
      {matchingFlavors.map((flavor) => {
        return (
          <section className="recipe">
            <h3>{flavor.fields.name}</h3>
            <p>Batch Size: {flavor.fields.batchSize}</p>
            <ul>
              Ingredients:
              <li> {flavor.fields.ingredients}</li>
            </ul>
            <p>Days: {flavor.fields.days}</p>
          </section>
        );
      })}
      <Route path="/post">
        <Form />
      </Route>
    </main>
  );
}

export default Recipes;
