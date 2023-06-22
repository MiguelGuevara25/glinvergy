import { useState, createContext } from "react";
const GlinvergyContext = createContext();

const GlinvergyProvider = ({ children }) => {
  const [seal, setSeal] = useState("");
  const [condition, setCondition] = useState("");
  const [status, setStatus] = useState("");
  const [dateEntry, setDateEntry] = useState("");
  const [timeAdmision, setTimeAdmision] = useState("");
  const [allDates, setAllDates] = useState([]);
  const [producSelected, setProducSelected] = useState("");
  const [editSelected, setEditSelected] = useState({});

  const objGlinvergy = { seal, condition, status, dateEntry, timeAdmision };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 5,
    p: 4,
  };

  const [addModal, setAddModal] = useState(false);
  const [editModal, seteditModal] = useState(false);
  const [deleteModal, setdeleteModal] = useState(false);

  const handleModalAddOpen = () => setAddModal(true);
  const handleModalAddClose = () => setAddModal(false);

  const handleModalEditOpen = (e) => {
    setEditSelected(e);
    seteditModal(true);
  };
  const handleModalEditClose = () => seteditModal(false);

  const handleModalDeleteOpen = (e) => {
    setProducSelected(e);
    setdeleteModal(true);
  };

  const handleModalDeleteClose = () => setdeleteModal(false);

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    setAllDates([...allDates, objGlinvergy]);
  };

  const deleteData = () => {
    const newData = allDates.filter((e) => e.seal !== producSelected);
    setAllDates(newData);

    setdeleteModal(false);
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();

    const obj = {
      seal: e.target.seal.value,
      condition: e.target.condition.value,
      status: e.target.status.value,
      dateEntry: e.target.dateEntry.value,
      timeAdmision: e.target.timeAdmision.value,
    };

    const found = allDates.find((e) => e.seal === obj.seal);

    found.seal = obj.seal;
    found.condition = obj.condition;
    found.status = obj.status;
    found.dateEntry = obj.dateEntry;
    found.timeAdmision = obj.timeAdmision;

    seteditModal(false);
  };

  return (
    <GlinvergyContext.Provider
      value={{
        addModal,
        editModal,
        deleteModal,
        objGlinvergy,
        style,
        handleModalAddOpen,
        handleModalAddClose,
        handleModalEditOpen,
        handleModalEditClose,
        handleModalDeleteOpen,
        handleModalDeleteClose,
        handleSubmitEdit,
        deleteData,
        handleSubmitAdd,
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
        allDates,
        editSelected,
      }}
    >
      {children}
    </GlinvergyContext.Provider>
  );
};

export { GlinvergyProvider };

export default GlinvergyContext;
