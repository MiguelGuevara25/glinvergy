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

  const style = {
    boxShadow: 5,

    p: 4,
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-6xl uppercase mt-16 font-bold text-white">
        Glinvergy
      </h1>

      <TableContainer
        component={Paper}
        className="my-5"
        sx={{ width: 1000, margin: "20px auto", borderRadius: "15px" }}
      >
        <Table>
          <TableHead sx={style}>
            <TableRow>
              <TableCell sx={{ fontWeight: 900, textAlign: "center" }}>
                Seal N
              </TableCell>
              <TableCell sx={{ fontWeight: 900, textAlign: "center" }}>
                Condition
              </TableCell>
              <TableCell sx={{ fontWeight: 900, textAlign: "center" }}>
                Status
              </TableCell>
              <TableCell sx={{ fontWeight: 900, textAlign: "center" }}>
                Date Entry
              </TableCell>
              <TableCell sx={{ fontWeight: 900, textAlign: "center" }}>
                Time Admision
              </TableCell>
              <TableCell sx={{ fontWeight: 900, textAlign: "center" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {allDates.map((e, index) => (
              <DataTables e={e} key={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="flex justify-end w-[1000px] mx-auto">
        <button
          className="bg-white shadow-xl text-[#F76B1C] uppercase py-2 px-3 rounded-lg font-bold"
          onClick={handleModalAddOpen}
        >
          Add Data
        </button>
      </div>

      <AddModal />
      <EditModal />
      <DeleteModal />
    </div>
  );
};

export default Main;
