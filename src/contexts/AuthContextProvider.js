// import { createContext, useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { API } from "../helpers/consts";
// import axios from "axios";

// export const authContext = createContext();
// export const useAuth = () => useContext(authContext);

// const AuthContextProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   async function handleRegister(formData) {
//     try {
//       setLoading(true);
//       await axios.post(`${API}/account/register`, formData);
//       navigate("/register-success");
//     } catch (error) {
//       setError(Object.values(error.response.data));
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function handleLogin(formData, email) {
//     try {
//       setLoading(true);
//       const res = await axios.post(`${API}/account/login/`, formData);
//       localStorage.setItem("tokens", JSON.stringify(res.data));
//       localStorage.setItem("email", email);
//       setCurrentUser(email);
//       navigate("/");
//     } catch (error) {
//       setError(Object.values(error.response.data));
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function checkAuth() {
//     try {
//       setLoading(true);
//       const tokens = JSON.parse(localStorage.getItem("tokens"));
//       const res = await axios.post(`${API}/account/token/refresh/`, {
//         refresh: tokens.refresh,
//       });
//       localStorage.setItem(
//         "tokens",
//         JSON.stringify({ access: res.data.access, refresh: tokens.refresh })
//       );
//       const email = localStorage.getItem("email");
//       setCurrentUser(email);
//     } catch (error) {
//       console.log(error);
//       handleLogout();
//     } finally {
//       setLoading(false);
//     }
//   }

//   function handleLogout() {
//     localStorage.removeItem("tokens");
//     localStorage.removeItem("email");
//     setCurrentUser(null);
//     navigate("/login");
//   }

//   const values = {
//     handleRegister,
//     loading,
//     error,
//     setError,
//     currentUser,
//     handleLogin,
//     checkAuth,
//     handleLogout,
//   };
//   return <authContext.Provider vlaue={values}>{children}</authContext.Provider>;
// };

// export default AuthContextProvider;

import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API, API2 } from "../helpers/consts";

export const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function addChat(formData) {
    axios
      .post("https://api.chatengine.io/users/", formData, {
        headers: {
          "PRIVATE-KEY": "{{e752d700-e8b7-4458-b1ee-2be833a27a11}}",
        },
      })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        // Дополнительный код, который нужно выполнить после успешной регистрации
      })
      .catch(function (error) {
        console.log(error);
        // Обработка ошибок при регистрации
      });
  }

  async function handleRegister(formData) {
    try {
      setLoading(true);
      await axios.post(`${API}/account/register/`, formData);
      navigate("/register-success");
    } catch (error) {
      setError(Object.values(error.message));
      // console.log(error);
    } finally {
      setLoading(false);
    }
    // var axios = require("axios");
  }

  async function handleLogin(formData, email) {
    try {
      setLoading(true);
      const res = await axios.post(`${API}/account/login/`, formData);
      console.log(res);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      setCurrentUser(email);
      navigate("/");
      addChat(formData);
    } catch (error) {
      setError(Object.values(error.message));
    } finally {
      setLoading(false);
    }
  }

  async function checkAuth() {
    try {
      setLoading(true);
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const res = await axios.post(`${API}/account/token/refresh/`, {
        refresh: tokens.refresh,
      });
      localStorage.setItem(
        "tokens",
        JSON.stringify({ access: res.data.access, refresh: tokens.refresh })
      );
      const email = localStorage.getItem("email");
      setCurrentUser(email);
    } catch (error) {
      console.log(error);
      handleLogout();
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setCurrentUser(null);
    navigate("/login");
  }

  const values = {
    handleRegister,
    loading,
    error,
    setError,
    currentUser,
    handleLogin,
    checkAuth,
    handleLogout,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
