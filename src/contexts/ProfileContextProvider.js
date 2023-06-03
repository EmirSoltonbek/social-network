import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/consts";
import { useEffect } from "react";
import { async } from "q";
// import { useNavItem } from "@restart/ui/esm/NavItem";
import { useLocation, useNavigate } from "react-router";

export const profileContext = createContext();
export const useProfile = () => useContext(profileContext);

const INIT_STATE = {
  profileMe: "",
  profiles: [],
  oneProfile: "",
  posts: [],
  myPosts: [],
  onePost: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_ME_PROFILE":
      return { ...state, profileMe: action.payload };

    case "GET_PROFILES":
      return { ...state, profiles: action.payload };

    case "GET_ONE_PROFILE":
      return { ...state, oneProfile: action.payload };

    case "GET_POSTS":
      return { ...state, posts: action.payload };

    case "MY_POSTS":
      return { ...state, myPosts: action.payload };

    case "ONE_POST":
      return { ...state, onePost: action.payload };

    default:
      return state;
  }
};

function ProfileContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();
  const location = useLocation();

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

  const getProfiles = async () => {
    let { data } = await axios(
      `${API}/account/profiles/${window.location.search}`,
      getConfig()
    );
    dispatch({
      type: "GET_PROFILES",
      payload: data,
    });
  };

  const getOneProfile = async (id) => {
    let { data } = await axios(`${API}/account/${id}/profile/`, getConfig());
    dispatch({
      type: "GET_ONE_PROFILE",
      payload: data,
    });
  };

  const getPosts = async () => {
    let { data } = await axios(`${API}/posts/list/`, getConfig());
    dispatch({
      type: "GET_POSTS",
      payload: data,
    });
  };

  const getMyPosts = async () => {
    let res = state.posts.results;
    let ans = res?.filter((item) => item.user === state.profileMe.id);
    dispatch({
      type: "MY_POSTS",
      payload: ans,
    });
  };

  const makePost = async (newPost) => {
    await axios.post(`${API}/post/`, newPost, getConfig());
    getProfileInfo();
  };

  const deletePost = async (id) => {
    await axios.delete(`${API}/post/${id}/`, getConfig());
    getProfileInfo();
  };
  const getOnePost = async (id) => {
    try {
      let { data } = await axios(`${API}/posts/list/${id}`, getConfig());
      dispatch({
        type: "ONE_POST",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const editPost = async (id, editedPost) => {
    try {
      await axios.patch(`${API}/post/${id}/`, editedPost, getConfig());
      getProfileInfo();
    } catch (error) {
      console.log(error);
    }
  };

  const commentPost = async (commentToPost) => {
    try {
      await axios.post(`${API}/posts/comment/`, commentToPost, getConfig());
    } catch (error) {
      console.log(error);
    }
    getPosts();
  };

  const likePost = async (id) => {
    try {
      await axios(`${API}/post/toggle_like/${id}/`, getConfig());
    } catch (error) {
      console.log(error);
    }
    getPosts();
  };
  // ! categoryProfile
  async function categoryProfile(query, value) {
    const search = new URLSearchParams(window.location.search);

    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
  }
  // ! categoryProfile end

  const values = {
    getProfileInfo,
    profileMe: state.profileMe,
    editProfileInfo,
    getProfiles,
    profiles: state.profiles,
    getOneProfile,
    oneProfile: state.oneProfile,
    getPosts,
    posts: state.posts,
    getMyPosts,
    myPosts: state.myPosts,
    makePost,
    deletePost,
    getOnePost,
    onePost: state.onePost,
    editPost,
    commentPost,
    likePost,
    categoryProfile,
  };
  return (
    <profileContext.Provider value={values}>{children}</profileContext.Provider>
  );
}

export default ProfileContextProvider;
