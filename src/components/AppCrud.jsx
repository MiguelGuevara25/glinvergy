import Login from "./Login";
import Main from "./Main";
import useGlinvergy from "../hooks/useGlinvergy";

const AppCrud = () => {
  const { login } = useGlinvergy();

  return (
    <>
      {!login && <Login />}
      {login && <Main />}
    </>
  );
};

export default AppCrud;
