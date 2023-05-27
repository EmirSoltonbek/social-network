import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/consts";

export const profileContext = createContext();
export const useProfile = () => useContext(profileContext);

const INIT_STATE = {
  profileMe: "",
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_ME_PROFILE":
      return { ...state, profileMe: action.payload };

    default:
      return state;
  }
};

function ProfileContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function getConfig() {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    //config
    const Authorization = `Bearer ${tokens.access}`;
    const config = {
      headers: { Authorization },
    };
    return config;
  }

  const getProfileInfo = async () => {
    try {
      let { data } = await axios(`${API}/account/me/profile/`, getConfig());
      dispatch({
        type: "GET_ME_PROFILE",
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const editProfileInfo = async (newProfileInfo) => {
    try {
      await axios.patch(
        `${API}/account/me/profile/`,
        newProfileInfo,
        getConfig()
      );
      getProfileInfo();
    } catch (error) {
      console.error(error);
    }
  };

  const values = {
    getProfileInfo,
    profileMe: state.profileMe,
    editProfileInfo,
  };
  return (
    <profileContext.Provider value={values}>{children}</profileContext.Provider>
  );
}

export default ProfileContextProvider;
