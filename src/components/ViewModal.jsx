import { Typography, Box, Modal } from "@mui/material";
import useGlinvergy from "../hooks/useGlinvergy";

const ViewModal = () => {
  const { viewModal, handleModalViewClose, style, viewSelected } =
    useGlinvergy();

  return (
    <Modal open={viewModal} onClose={handleModalViewClose}>
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
          View Details
        </Typography>

        <form className="flex flex-col gap-5">
          <div className="flex justify-between">
            <label>Seal:</label>
            <input
              className="border-2 border-gray-400 rounded-md p-1"
              type="number"
              defaultValue={viewSelected.seal}
              disabled
            />
          </div>

          <div className="flex justify-between">
            <label>Condition:</label>
            <select
              defaultValue={viewSelected.condition}
              className="border-2 border-gray-400 rounded-md p-1"
              disabled
            >
              <option hidden>Select Condition</option>
              <option>Open</option>
              <option>Close</option>
            </select>
          </div>

          <div className="flex justify-between">
            <label>State:</label>
            <select
              defaultValue={viewSelected.status}
              className="border-2 border-gray-400 rounded-md p-1"
              disabled
            >
              <option hidden>Select State</option>
              <option>OK</option>
              <option>Manipulated</option>
            </select>
          </div>

          <div className="flex justify-between">
            <label>Date of Entry:</label>
            <input
              defaultValue={viewSelected.dateEntry}
              type="date"
              className="border-2 border-gray-400 rounded-md p-1"
              disabled
            />
          </div>

          <div className="flex justify-between">
            <label>Time of Admission:</label>
            <input
              type="time"
              defaultValue={viewSelected.timeAdmision}
              className="border-2 border-gray-400 rounded-md p-1"
              disabled
            />
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default ViewModal;
