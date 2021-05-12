import { useParams } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import RecipeModal from "./RecipeModal";
import { Modal } from "bootstrap";


function Recipes(props) {
  const [modalShow, setModalShow] = useState(false);
  const params = useParams();

  const matchingFlavors = props.flavors.filter(
    (flavor) => flavor.fields.type === params.type
  );

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  return (
    <div>
      {matchingFlavors.map((flavor) => {
        return (
          <Button variant="primary" onClick={handleShow}>
            {flavor.fields.name}
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                {flavor.fields.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>Batch Size: {flavor.fields.batchSize}</p>
            <ul>
              Ingredients:
              {flavor.fields.ingredients.split("\n")}
              {/* {console.log(flavor.fields.ingredients.split("\n"))} */}
            </ul>
            <p>Days: {flavor.fields.days}</p>
            </Modal.Body>
          </Modal>
        )
      })}
      </div>
    )

export default Recipes;