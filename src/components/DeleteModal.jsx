import { Box, Modal } from "@mui/material";
import useGlinvergy from "../hooks/useGlinvergy";

const DeleteModal = () => {
  const { deleteModal, style, handleModalDeleteClose, handleDeleteData } =
    useGlinvergy();

  return (
    <Modal open={deleteModal} onClose={handleModalDeleteClose}>
      <Box sx={style}>
        <div className="flex flex-col gap-5">
          <h1 className="text-center text-4xl">¿Estás seguro de eliminar?</h1>
          <div className="flex justify-around text-white">
            <button
              className="bg-blue-500 py-2 px-8 rounded-lg"
              onClick={handleDeleteData}
            >
              Si
            </button>
            <button
              className="bg-blue-500 py-2 px-8 rounded-lg"
              onClick={handleModalDeleteClose}
            >
              No
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
