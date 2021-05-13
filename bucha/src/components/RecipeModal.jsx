import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";

function RecipeModal(props) {

  
 const {modalShow, setModalShow} = props

  return (
    <>

            <Modal
              show={modalShow}
              aria-labelledby="contained-modal-title-vcenter"
              onHide={() => setModalShow(null)}
            >
              <ModalHeader closeButton>
                <ModalTitle>{modalShow.fields.name}</ModalTitle>
              </ModalHeader>
              <ModalBody>
                <p>Batch Size: {modalShow.fields.batchSize}</p>
                <ul>
                  Ingredients:
                  {modalShow.fields.ingredients.split("\n").map((ingredient) => (
                    <li key={modalShow.fields.ingredient}>{ingredient}</li>
                  ))}
                </ul>
                <p>Days: {modalShow.fields.days}</p>
              </ModalBody>
            </Modal>
    </>
  )
}

export default RecipeModal