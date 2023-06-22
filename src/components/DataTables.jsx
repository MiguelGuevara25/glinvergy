import { TableCell, TableRow } from "@mui/material";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoReaderOutline } from "react-icons/io5";
import useGlinvergy from "../hooks/useGlinvergy";

const DataTables = ({ e }) => {
  const { handleModalEditOpen, handleModalDeleteOpen } = useGlinvergy();

  return (
    <TableRow>
      <TableCell>{e.seal}</TableCell>
      <TableCell>{e.condition}</TableCell>
      <TableCell>{e.status}</TableCell>
      <TableCell>{e.dateEntry}</TableCell>
      <TableCell>{e.timeAdmision}</TableCell>
      <TableCell>
        <div className="flex gap-3 text-4xl w-max">
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
