import { useState } from "react";
import { createContext, useContext, useReducer } from "react";

export const nightContext = createContext();
export const useNight = () => useContext(nightContext);

const INIT_STATE = {
  night: false,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "value":
      return { ...state };

    default:
      return state;
  }
};

const NightContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [night, setNight] = useState(true);
  const values = { night, setNight };
  return (
    <nightContext.Provider value={values}>{children}</nightContext.Provider>
  );
};
export default NightContextProvider;
