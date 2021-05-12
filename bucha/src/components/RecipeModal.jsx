import { useParams } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

function RecipeModal(props) {
  const params = useParams();

  const matchingFlavors = props.flavors.filter(
    (flavor) => flavor.fields.type === params.type
  );
  
  return (
    <Modal>
    {matchingFlavors.map((flavor) => {
      return (
          <Modal.Header closeButton>
          <Modal.Title className="modal-name">
          <h3>{flavor.fields.name}</h3>
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
        )
      })}  
      </Modal>
  )   

}

export default RecipeModal;

