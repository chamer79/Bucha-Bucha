import { useParams } from "react-router-dom";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";

function Recipes(props) {
  const [modalShow, setModalShow] = useState(false);
    
  const params = useParams();

  const matchingFlavors = props && props.flavors.filter(
    (flavor) => flavor.fields.type  === params.type
  );

   
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  return (
    <div className="recipe-modal">
      
      {matchingFlavors.map((flavor) => {
        return (
          <>
      
            <button  onClick={handleShow} centered>
            <h3>{flavor.fields.name}</h3>
            </button>
            <Modal          
            show={modalShow}
            aria-labelledby="contained-modal-title-vcenter"
            onHide={() => setModalShow(false)}
            >
              
            <ModalHeader closeButton>
            <ModalTitle>
            {flavor.fields.name}
            </ModalTitle>
            </ModalHeader>
            <ModalBody>
            <p>Batch Size: {flavor.fields.batchSize}</p>
            <ul>
                  Ingredients:
            {flavor.fields.ingredients.split("\n").map((ingredient) =>
              <li key={flavor.fields.ingredient}>{ingredient}</li>
              )}
            </ul>
            <p>Days: {flavor.fields.days}</p>
                </ModalBody>
            </Modal>
            </>
            )
      })}
    </div>
  )
}

export default Recipes;