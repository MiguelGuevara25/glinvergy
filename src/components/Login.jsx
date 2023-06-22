import { FaLock, FaUser } from "react-icons/fa";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-[#FAD961] to-[#F76B1C]">
      <form className="flex flex-col bg-[#f76c1c56] rounded-lg p-10 text-white">
        <h1 className="text-center uppercase font-bold text-2xl mb-3">
          Glinvergy
        </h1>

        <div className="flex items-center text-lg gap-3">
          <FaUser />
          <input
            type="text"
            className="bg-transparent border-b-4 border-white"
          />
        </div>

        <div className="flex items-center text-lg gap-3">
          <FaLock />
          <input
            type="text"
            className="bg-transparent border-b-4 border-white"
          />
        </div>

        <input
          type="submit"
          value="Log In"
          className="cursor-pointer uppercase bg-white text-[#f76c1c] font-bold py-2 mt-5 rounded-lg"
        />
      </form>
    </div>
  );
};

export default Login;
