import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
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
        <form className="flex flex-col gap-5">
          <label
            className="border"
            value={seal}
            onChange={(e) => setSeal(e.target.value)}
          >
            Seal:
            <input type="text" />
          </label>

          <label>
            Condition:
            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            >
              <option hidden>Select Condition</option>
              <option>Open</option>
              <option>Close</option>
            </select>
          </label>

          <label>
            State:
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option hidden>Select State</option>
              <option>OK</option>
              <option>Manipulated</option>
            </select>
          </label>

          <label className="border">
            Date of Entry:
            <input
              type="date"
              value={dateEntry}
              onChange={(e) => setDateEntry(e.target.value)}
            />
          </label>

          <label
            className="border"
            value={timeAdmision}
            onChange={(e) => setTimeAdmision(e.target.value)}
          >
            Time of Admission:
            <input type="time" />
          </label>

          <button className="border" type="submit" onClick={handleSubmitAdd}>
            Agregar
          </button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddModal;
