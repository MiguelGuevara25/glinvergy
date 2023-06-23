import { CardContent, Typography, CardActions, Card } from "@mui/material";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoReaderOutline } from "react-icons/io5";
import useGlinvergy from "../hooks/useGlinvergy";

const DataCards = ({ e }) => {
  const { handleModalEditOpen, handleModalDeleteOpen, handleModalViewOpen } =
    useGlinvergy();

  return (
    <Card>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Typography variant="h5">
          <span>{e.seal}</span>
        </Typography>

        <Typography>
          <span
            className={`${
              e.condition === "Open" ? "bg-yellow-500" : "bg-blue-500"
            } py-2 px-5 rounded-lg text-white`}
          >
            {e.condition}
          </span>
        </Typography>

        <Typography>
          <span
            className={`${
              e.status === "OK" ? "bg-green-500 px-[50px]" : "bg-red-500 px-5"
            } py-2 rounded-lg text-white`}
          >
            {e.status}
          </span>
        </Typography>

        <Typography>
          <span>{e.dateEntry}</span>
        </Typography>

        <Typography>
          <span>{e.timeAdmision}</span>
        </Typography>
      </CardContent>

      <CardActions>
        <div className="flex gap-3 text-4xl justify-center w-full">
          <IoReaderOutline
            className="cursor-pointer"
            onClick={() => handleModalViewOpen(e)}
          />
          <MdEdit
            className="cursor-pointer"
            onClick={() => handleModalEditOpen(e)}
          />
          <MdDelete
            className="cursor-pointer text-red-500"
            onClick={() => handleModalDeleteOpen(e.seal)}
          />
        </div>
      </CardActions>
    </Card>
  );
};

export default DataCards;
