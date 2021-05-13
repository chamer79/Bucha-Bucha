import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";

function RecipeModal(props) {
  const { modalShow, setModalShow } = props;

  return (
    <>
      <Modal
        className="modal-container"
        show={modalShow}
        aria-labelledby="contained-modal-title-vcenter"
        onHide={() => setModalShow(null)}
      >
        <ModalHeader closeButton className="modal-header">
          <ModalTitle>{modalShow.fields.name}</ModalTitle>
        </ModalHeader>
        <ModalBody calssName="modal-body">
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
  );
}

export default RecipeModal;
