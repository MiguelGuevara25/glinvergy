import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import EditModal from "./EditModal";
import AddModal from "./AddModal";
import DataTables from "./DataTables";
import useGlinvergy from "../hooks/useGlinvergy";

const Main = () => {
  const {
    addModal,
    editModal,
    deleteModal,
    handleModalAddOpen,
    handleModalAddClose,
    handleModalEditOpen,
    handleModalEditClose,
    handleModalDeleteOpen,
    handleModalDeleteClose,
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
    deleteData,
    allDates,
  } = useGlinvergy();

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-6xl uppercase my-10">Glinvergy</h1>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white uppercase py-2 px-3 rounded-lg font-bold"
          onClick={handleModalAddOpen}
        >
          Add
        </button>

        <AddModal
          addModal={addModal}
          handleModalAddClose={handleModalAddClose}
          style={style}
          seal={seal}
          setSeal={setSeal}
          condition={condition}
          setCondition={setCondition}
          status={status}
          setStatus={setStatus}
          dateEntry={dateEntry}
          setDateEntry={setDateEntry}
          timeAdmision={timeAdmision}
          setTimeAdmision={setTimeAdmision}
          handleSubmitAdd={handleSubmitAdd}
        />

        <EditModal
          editModal={editModal}
          handleModalEditClose={handleModalEditClose}
          style={style}
        />

        <Modal open={deleteModal} onClose={handleModalDeleteClose}>
          <Box sx={style}>
            <div className="flex flex-col gap-5">
              <h1 className="text-center text-4xl">
                ¿Estás seguro de eliminar?
              </h1>
              <div className="flex justify-around text-white">
                <button
                  className="bg-blue-500 py-2 px-8 rounded-lg"
                  onClick={deleteData}
                >
                  Si
                </button>
                <button
                  className="bg-blue-500 py-2 px-8 rounded-lg"
                  onClick={handleModalDeleteClose}
                >
                  No
                </button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Precinto N</TableCell>
              <TableCell>Condición</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Fecha Ingreso</TableCell>
              <TableCell>Hora Ingreso</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {allDates.map((e, index) => (
              <DataTables
                e={e}
                key={index}
                handleModalDeleteOpen={handleModalDeleteOpen}
                handleModalEditOpen={handleModalEditOpen}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Main;
