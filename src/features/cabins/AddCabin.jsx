import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

import CreateCabinForm from "./CreateCabinForm";


function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

/* const AddCabin = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new Cabin
      </Button>
      {isOpenModal && (
        <Modal onCloseModal={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </>
  );
}; */

export default AddCabin;
