import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";


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
          <Fragment>
            <Button variant="primary" onClick={handleShow} centered>
              <h3>{flavor.fields.name}</h3>
            </Button>
            <Modal show={show} onHide={handleClose}>
              <ModalHeader closeButton>
                <ModalTitle>
                  {flavor.fields.name}
                </ModalTitle>
              </ModalHeader>
              <ModalBody>
                <p>Batch Size: {flavor.fields.batchSize}</p>
                <ul>
                  Ingredients:
              {flavor.fields.ingredients.split("\n")}
                  {/* {console.log(flavor.fields.ingredients.split("\n"))} */}
                </ul>
                <p>Days: {flavor.fields.days}</p>
              </ModalBody>
            </Modal>
          </Fragment>
        )
      })}
    </div>
  )
}

export default Recipes;