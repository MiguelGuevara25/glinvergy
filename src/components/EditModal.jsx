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
          className="text-center uppercase text-xl"
        >
          Editar
        </Typography>

        <form onSubmit={handleSubmitEdit} className="flex flex-col gap-5 mt-5">
          <div className="flex justify-between">
            <label value={seal} onChange={(e) => setSeal(e.target.value)}>
              Seal:
            </label>
            <input
              type="text"
              defaultValue={editSelected.seal}
              name="seal"
              disabled
            />
          </div>

          <div className="flex justify-between">
            <label>Condition:</label>
            <select
              defaultValue={editSelected.condition}
              onChange={(e) => setCondition(e.target.value)}
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
              name="dateEntry"
            />
          </div>

          <div className="flex justify-between">
            <label>Time of Admission:</label>
            <input
              type="time"
              defaultValue={editSelected.timeAdmision}
              onChange={(e) => setTimeAdmision(e.target.value)}
              name="timeAdmision"
            />
          </div>

          <button className="border" type="submit">
            Editar
          </button>
        </form>
      </Box>
    </Modal>
  );
};

export default EditModal;
