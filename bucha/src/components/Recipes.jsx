import { useParams } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button"
import RecipeModal from "./RecipeModal"

function Recipes(props) {
  const [modalShow, setModalShow] = useState(false);

  const params = useParams();

  const matchingFlavors =
    props &&
    props.flavors.filter((flavor) => flavor.fields.type === params.type);

  // const handleClose = () => setModalShow(false);
  // const handleShow = () => setModalShow(true);

  return (
    <div className="recipe-modal">
      {matchingFlavors.map((flavor) => {
        return (
          <>
          <Button className="modal-button" onClick={() => setModalShow(flavor)} centered>
              <h3>{flavor.fields.name}</h3>
          </Button>  
          </>
        );
      })}
      {modalShow && <RecipeModal modalShow={modalShow} setModalShow={setModalShow}/>}
    </div>
  );
}

export default Recipes;
