import { useContext } from "react";
import GlinvergyContext from "../context/GlinvergyProvider";

const useGlinvergy = () => {
  return useContext(GlinvergyContext);
};

export default useGlinvergy;
