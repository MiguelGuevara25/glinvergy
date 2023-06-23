import { useEffect } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import useGlinvergy from "../hooks/useGlinvergy";

const Login = () => {
  const {
    setUser,
    setPassword,
    veriUser,
    setVeriUser,
    veriPassword,
    setVeriPassword,
    handleLogin,
  } = useGlinvergy();

  useEffect(() => {
    const loginCrud = () => {
      const administration = [
        {
          id: 1,
          user: "Alfredo",
          password: "glinvergy",
        },
      ];

      setUser(administration[0].user);
      setPassword(administration[0].password);
    };

    loginCrud();
  }, [setPassword, setUser]);

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-[#FAD961] to-[#F76B1C]">
      <form
        className="flex flex-col bg-[#f76c1c56] justify-around rounded-lg p-10 text-white h-80 shadow-xl"
        onSubmit={handleLogin}
      >
        <h1 className="text-center uppercase font-bold text-2xl mb-3">
          Glinvergy
        </h1>

        <div className="flex items-center text-lg gap-3">
          <FaUser />
          <input
            type="text"
            className="bg-transparent border-b-4 border-white"
            value={veriUser}
            onChange={(e) => setVeriUser(e.target.value)}
          />
        </div>

        <div className="flex items-center text-lg gap-3">
          <FaLock />
          <input
            type="text"
            className="bg-transparent border-b-4 border-white"
            value={veriPassword}
            onChange={(e) => setVeriPassword(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Log In"
          onClick={handleLogin}
          className="cursor-pointer uppercase bg-white text-[#f76c1c] font-bold py-2 mt-5 rounded-lg"
        />
      </form>
    </div>
  );
};

export default Login;
