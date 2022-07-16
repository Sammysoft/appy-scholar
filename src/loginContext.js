import React, { useState, useEffect, createContext } from "react";
import { api } from "./strings";
import axios from "axios";

export const LoginContext = createContext();

export const LoginProvider = ({children}) => {
  let token = localStorage.getItem("appy-token");
  const [user, setUserRole] = useState({});

  useEffect(() => {
    axios
      .get(`${api}/dashboard`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setUserRole(res.data.data);
      });
  }, [token]);

  return (
    <LoginContext.Provider value={{user}}>{children}</LoginContext.Provider>
  );
};
