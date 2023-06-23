import { Box, Modal } from "@mui/material";
import useGlinvergy from "../hooks/useGlinvergy";

const DeleteModal = () => {
  const { deleteModal, style, handleModalDeleteClose, handleDeleteData } =
    useGlinvergy();

  return (
    <Modal open={deleteModal} onClose={handleModalDeleteClose}>
      <Box sx={style}>
        <div className="flex flex-col gap-5">
          <h1 className="text-center text-2xl mb-2 font-bold">
            Are you sure to delete?
          </h1>
          <div className="flex justify-around text-white">
            <button
              className="rounded-md bg-gray-500 px-5 py-2 font-bold hover:bg-[#F76B1C] hover:text-white transition-colors"
              onClick={handleDeleteData}
            >
              Yes
            </button>
            <button
              className="rounded-md bg-gray-500 px-5 py-2 font-bold hover:bg-[#F76B1C] hover:text-white transition-colors"
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
