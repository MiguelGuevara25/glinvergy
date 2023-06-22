const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-[#FAD961] to-[#F76B1C]">
      <form className="flex flex-col">
        <input type="text" className="" />
        <input type="text" className="" />

        <input
          type="submit"
          value="Log In"
          className="cursor-pointer uppercase"
        />
      </form>
    </div>
  );
};

export default Login;
