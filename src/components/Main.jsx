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
import ViewModal from "./ViewModal";
import DataCards from "./DataCards";

const Main = () => {
  const { handleModalAddOpen, allDates, handleLogout } = useGlinvergy();

  const style = {
    boxShadow: 5,
    p: 4,
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-6xl uppercase my-16 font-bold text-white">
        Glinvergy
      </h1>

      <div className="lg:block hidden">
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

            {allDates.length > 0 ? (
              <TableBody>
                {allDates.map((e, index) => (
                  <DataTables e={e} key={index} />
                ))}
              </TableBody>
            ) : (
              <TableBody>
                <td colSpan="6">
                  <h2 className="text-4xl py-5 w-full text-center">
                    No data available
                  </h2>
                </td>
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </div>

      <div className="lg:hidden grid grid-cols-2 mx-2 justify-center gap-5">
        {allDates.map((e, index) => (
          <DataCards e={e} key={index} />
        ))}
      </div>

      <div className="flex justify-end w-96 lg:mt-0 mt-5 lg:w-[1000px] mx-auto">
        <button
          className="bg-white shadow-xl text-[#F76B1C] uppercase py-2 px-3 rounded-lg font-bold"
          onClick={handleModalAddOpen}
        >
          Add Data
        </button>
      </div>

      <div className="flex justify-center lg:w-[1000px] my-8 mx-auto">
        <button
          className="bg-[#F76B1C] shadow-xl text-white uppercase py-2 px-3 rounded-lg font-bold"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>

      <AddModal />
      <EditModal />
      <DeleteModal />
      <ViewModal />
    </div>
  );
};

export default Main;
