import { Typography, Box, Modal } from "@mui/material";
import useGlinvergy from "../hooks/useGlinvergy";

const AddModal = () => {
  const {
    addModal,
    handleModalAddClose,
    style,
    seal,
    setSeal,
    condition,
    setCondition,
    status,
    setStatus,
    dateEntry,
    setDateEntry,
    timeAdmision,
    setTimeAdmision,
    handleSubmitAdd,
  } = useGlinvergy();

  return (
    <Modal open={addModal} onClose={handleModalAddClose}>
      <Box sx={style}>
        <Typography
          variant="h6"
          component="h2"
          className="text-center uppercase text-xl"
        >
          Agregar
        </Typography>

        <form className="flex flex-col gap-5">
          <div className="flex justify-between">
            <label>Seal:</label>
            <input
              type="text"
              value={seal}
              onChange={(e) => setSeal(e.target.value)}
            />
          </div>

          <div className="flex justify-between">
            <label>Condition:</label>
            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            >
              <option hidden>Select Condition</option>
              <option>Open</option>
              <option>Close</option>
            </select>
          </div>

          <div className="flex justify-between">
            <label>State:</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option hidden>Select State</option>
              <option>OK</option>
              <option>Manipulated</option>
            </select>
          </div>

          <div className="flex justify-between">
            <label>Date of Entry:</label>
            <input
              type="date"
              value={dateEntry}
              onChange={(e) => setDateEntry(e.target.value)}
            />
          </div>

          <div className="flex justify-between">
            <label>Time of Admission:</label>
            <input
              type="time"
              value={timeAdmision}
              onChange={(e) => setTimeAdmision(e.target.value)}
            />
          </div>

          <button className="border" type="submit" onClick={handleSubmitAdd}>
            Agregar
          </button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddModal;
