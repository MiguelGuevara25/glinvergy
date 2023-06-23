import Login from "./Login";
import Main from "./Main";
import useGlinvergy from "../hooks/useGlinvergy";

const AppCrud = () => {
  const { login } = useGlinvergy();

  return (
    <>
      <Login />
      {login && <Main />}
    </>
  );
};

export default AppCrud;
