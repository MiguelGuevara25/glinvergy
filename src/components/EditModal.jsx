import useGlinvergy from "../hooks/useGlinvergy";
import { Typography, Box, Modal } from "@mui/material";

const EditModal = () => {
  const {
    editModal,
    handleModalEditClose,
    style,
    seal,
    setSeal,
    setCondition,
    setStatus,
    setDateEntry,
    setTimeAdmision,
    editSelected,
    handleSubmitEdit,
  } = useGlinvergy();

  return (
    <Modal open={editModal} onClose={handleModalEditClose}>
      <Box sx={style}>
        <Typography
          variant="h6"
          component="h2"
          className="text-2xl"
          sx={{
            fontWeight: 900,
            marginBottom: "20px",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Edit Data
        </Typography>

        <form onSubmit={handleSubmitEdit} className="flex flex-col gap-5 mt-5">
          <div className="flex justify-between">
            <label value={seal} onChange={(e) => setSeal(e.target.value)}>
              Seal:
            </label>
            <input
              type="number"
              min={1}
              defaultValue={editSelected.seal}
              name="seal"
              className="border-2 border-gray-400 rounded-md p-1"
              disabled
            />
          </div>

          <div className="flex justify-between">
            <label>Condition:</label>
            <select
              defaultValue={editSelected.condition}
              onChange={(e) => setCondition(e.target.value)}
              className="border-2 border-gray-400 rounded-md p-1"
              name="condition"
            >
              <option hidden>Select Condition</option>
              <option>Open</option>
              <option>Close</option>
            </select>
          </div>

          <div className="flex justify-between">
            <label>State:</label>
            <select
              defaultValue={editSelected.status}
              onChange={(e) => setStatus(e.target.value)}
              className="border-2 border-gray-400 rounded-md p-1"
              name="status"
            >
              <option hidden>Select State</option>
              <option>OK</option>
              <option>Manipulated</option>
            </select>
          </div>

          <div className="flex justify-between">
            <label>Date of Entry:</label>
            <input
              type="date"
              defaultValue={editSelected.dateEntry}
              onChange={(e) => setDateEntry(e.target.value)}
              className="border-2 border-gray-400 rounded-md p-1"
              name="dateEntry"
            />
          </div>

          <div className="flex justify-between">
            <label>Time of Admission:</label>
            <input
              type="time"
              defaultValue={editSelected.timeAdmision}
              onChange={(e) => setTimeAdmision(e.target.value)}
              className="border-2 border-gray-400 rounded-md p-1"
              name="timeAdmision"
            />
          </div>

          <button
            type="submit"
            className="bg-[#F76B1C] rounded-md py-2 text-white font-bold"
          >
            Edit
          </button>
        </form>
      </Box>
    </Modal>
  );
};

export default EditModal;
