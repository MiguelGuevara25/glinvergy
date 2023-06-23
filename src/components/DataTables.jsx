import { TableCell, TableRow } from "@mui/material";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoReaderOutline } from "react-icons/io5";
import useGlinvergy from "../hooks/useGlinvergy";

const DataTables = ({ e }) => {
  const { handleModalEditOpen, handleModalDeleteOpen } = useGlinvergy();

  return (
    <TableRow>
      <TableCell sx={{ textAlign: "center" }}>{e.seal}</TableCell>
      <TableCell sx={{ textAlign: "center" }}>{e.condition}</TableCell>
      <TableCell sx={{ textAlign: "center" }}>{e.status}</TableCell>
      <TableCell sx={{ textAlign: "center" }}>{e.dateEntry}</TableCell>
      <TableCell sx={{ textAlign: "center" }}>{e.timeAdmision}</TableCell>
      <TableCell sx={{ textAlign: "center" }}>
        <div className="flex gap-3 text-4xl justify-center">
          <IoReaderOutline className="cursor-pointer" />
          <MdEdit
            className="cursor-pointer"
            onClick={() => handleModalEditOpen(e)}
          />
          <MdDelete
            className="cursor-pointer"
            onClick={() => handleModalDeleteOpen(e.seal)}
          />
        </div>
      </TableCell>
    </TableRow>
  );
};

export default DataTables;
