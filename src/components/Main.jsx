import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  Paper,
} from "@mui/material";

import DataTables from "./DataTables";
import EditModal from "./EditModal";
import AddModal from "./AddModal";
import DeleteModal from "./DeleteModal";
import useGlinvergy from "../hooks/useGlinvergy";

const Main = () => {
  const { handleModalAddOpen, allDates } = useGlinvergy();

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-6xl uppercase my-10">Glinvergy</h1>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white uppercase py-2 px-3 rounded-lg font-bold"
          onClick={handleModalAddOpen}
        >
          Add Data
        </button>

        <AddModal />
        <EditModal />
        <DeleteModal />
      </div>

      <TableContainer component={Paper} className="my-5">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Seal N</TableCell>
              <TableCell>Condition</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date Entry</TableCell>
              <TableCell>Time Admision</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {allDates.map((e, index) => (
              <DataTables e={e} key={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Main;
