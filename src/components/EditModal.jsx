import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import useGlinvergy from "../hooks/useGlinvergy";

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
        <form onSubmit={handleSubmitEdit} className="flex flex-col gap-5">
          <label
            className="border"
            value={seal}
            onChange={(e) => setSeal(e.target.value)}
          >
            Seal:
            <input
              type="text"
              defaultValue={editSelected.seal}
              name="seal"
              disabled
            />
          </label>

          <label>
            Condition:
            <select
              defaultValue={editSelected.condition}
              onChange={(e) => setCondition(e.target.value)}
              name="condition"
            >
              <option hidden>Select Condition</option>
              <option>Open</option>
              <option>Close</option>
            </select>
          </label>

          <label>
            State:
            <select
              defaultValue={editSelected.status}
              onChange={(e) => setStatus(e.target.value)}
              name="status"
            >
              <option hidden>Select State</option>
              <option>OK</option>
              <option>Manipulated</option>
            </select>
          </label>

          <label className="border">
            Date of Entry:
            <input
              type="date"
              defaultValue={editSelected.dateEntry}
              onChange={(e) => setDateEntry(e.target.value)}
              name="dateEntry"
            />
          </label>

          <label className="border">
            Time of Admission:
            <input
              type="time"
              defaultValue={editSelected.timeAdmision}
              onChange={(e) => setTimeAdmision(e.target.value)}
              name="timeAdmision"
            />
          </label>

          <button className="border" type="submit">
            Editar
          </button>
        </form>
      </Box>
    </Modal>
  );
};

export default EditModal;
