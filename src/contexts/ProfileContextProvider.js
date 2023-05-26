import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/consts";

export const profileContext = createContext();
export const useProfile = () => useContext(profileContext);

const INIT_STATE = {
  profile: "",
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "FUNCTION":
      return { ...state };

    default:
      return state;
  }
};

function ProfileContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProfileInfo = async () => {
    let { data } = await axios(`${API}`);
  };

  const values = {};
  return (
    <profileContext.Provider value={values}>{children}</profileContext.Provider>
  );
}

export default ProfileContextProvider;
