import { useState, createContext } from "react";
import { toast } from "sonner";
const GlinvergyContext = createContext();

const GlinvergyProvider = ({ children }) => {
  const [seal, setSeal] = useState("");
  const [condition, setCondition] = useState("");
  const [status, setStatus] = useState("");
  const [dateEntry, setDateEntry] = useState("");
  const [timeAdmision, setTimeAdmision] = useState("");
  const [producSelected, setProducSelected] = useState("");
  const [editSelected, setEditSelected] = useState({});
  const [viewSelected, setViewSelected] = useState({});
  const [login, setLogin] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [veriUser, setVeriUser] = useState("");
  const [veriPassword, setVeriPassword] = useState("");

  const [allDates, setAllDates] = useState([
    {
      seal: "201817413",
      condition: "Open",
      status: "OK",
      dateEntry: "2021-10-10",
      timeAdmision: "10:00",
    },

    {
      seal: "25022017",
      condition: "Close",
      status: "Manipulated",
      dateEntry: "2023-11-27",
      timeAdmision: "12:00",
    },
  ]);

  const objGlinvergy = { seal, condition, status, dateEntry, timeAdmision };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 5,
    borderRadius: "15px",
    p: 4,
  };

  const handleModalViewClose = () => setViewModal(false);
  const handleModalAddOpen = () => setAddModal(true);
  const handleModalAddClose = () => setAddModal(false);
  const handleModalEditClose = () => setEditModal(false);
  const handleModalDeleteClose = () => setDeleteModal(false);

  const handleModalViewOpen = (e) => {
    setViewSelected(e);
    setViewModal(true);
  };

  const handleModalEditOpen = (e) => {
    setEditSelected(e);
    setEditModal(true);
  };

  const handleModalDeleteOpen = (e) => {
    setProducSelected(e);
    setDeleteModal(true);
  };

  const handleSubmitAdd = (e) => {
    e.preventDefault();

    if ([seal, condition, status, dateEntry, timeAdmision].includes(""))
      return toast.error("Please fill all the fields");

    const newDate = allDates.find((e) => e.seal === objGlinvergy.seal);

    if (newDate) {
      return toast.error("This seal already exists");
    }

    setAllDates([...allDates, objGlinvergy]);
    toast.success("Seal added successfully");

    setAddModal(false);
    setSeal("");
    setCondition("");
    setStatus("");
    setDateEntry("");
    setTimeAdmision("");
  };

  const handleDeleteData = () => {
    const newData = allDates.filter((e) => e.seal !== producSelected);
    setAllDates(newData);
    setDeleteModal(false);

    toast.succes("Seal deleted successfully");
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

    setEditModal(false);
    toast.success("Seal edited successfully");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if ([veriUser, veriPassword].includes("")) {
      return toast.error("Please fill all the fields");
    }

    if (veriUser === user && veriPassword === password) {
      setLogin(true);
    } else {
      toast.error("User or password incorrect");
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setLogin(false);
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
        handleModalViewOpen,
        handleModalViewClose,
        handleSubmitEdit,
        handleDeleteData,
        handleSubmitAdd,
        handleLogin,
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
        login,
        setLogin,
        user,
        setUser,
        password,
        setPassword,
        veriUser,
        setVeriUser,
        veriPassword,
        setVeriPassword,
        handleLogout,
        viewModal,
        viewSelected,
      }}
    >
      {children}
    </GlinvergyContext.Provider>
  );
};

export { GlinvergyProvider };

export default GlinvergyContext;
