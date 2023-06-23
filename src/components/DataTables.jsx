import { TableCell, TableRow } from "@mui/material";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoReaderOutline } from "react-icons/io5";
import useGlinvergy from "../hooks/useGlinvergy";

const DataTables = ({ e }) => {
  const { handleModalEditOpen, handleModalDeleteOpen } = useGlinvergy();

  return (
    <TableRow>
      <TableCell sx={{ textAlign: "center" }}>
        <span>{e.seal}</span>
      </TableCell>

      <TableCell sx={{ textAlign: "center" }}>
        <span
          className={`${
            e.condition === "Open" ? "bg-yellow-500" : "bg-blue-500"
          } py-2 px-5 rounded-lg text-white`}
        >
          {e.condition}
        </span>
      </TableCell>

      <TableCell sx={{ textAlign: "center" }}>
        <span
          className={`${
            e.status === "OK" ? "bg-green-500 px-[55px]" : "bg-red-500 px-5"
          } py-2 rounded-lg text-white`}
        >
          {e.status}
        </span>
      </TableCell>

      <TableCell sx={{ textAlign: "center" }}>
        <span>{e.dateEntry}</span>
      </TableCell>

      <TableCell sx={{ textAlign: "center" }}>
        <span>{e.timeAdmision}</span>
      </TableCell>

      <TableCell sx={{ textAlign: "center" }}>
        <div className="flex gap-3 text-4xl justify-center">
          <IoReaderOutline className="cursor-pointer" />
          <MdEdit
            className="cursor-pointer"
            onClick={() => handleModalEditOpen(e)}
          />
          <MdDelete
            className="cursor-pointer text-red-500"
            onClick={() => handleModalDeleteOpen(e.seal)}
          />
        </div>
      </TableCell>
    </TableRow>
  );
};

export default DataTables;
