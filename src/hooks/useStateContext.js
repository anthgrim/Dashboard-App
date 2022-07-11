import { useContext } from "react";
import StateContext from "../context/ContextProvider";

const useStateContext = () => {
  return useContext(StateContext);
};

export default useStateContext;
