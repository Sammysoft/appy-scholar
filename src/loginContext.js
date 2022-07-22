/* eslint-disable */

import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "./strings";
import axios from "axios";
import Swal from "sweetalert2";

export const LoginContext = createContext();

export const LoginProvider = ({children}) => {
  const navigate = useNavigate()
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
        if(!res.data.data.profilepicture){
          navigate(`/account/settings/${res.data.data._id}`)
          Swal.fire({
            icon:"warning",
            text:"Please, set up your profile completely",
            title: "Incomplete Profile Setup"
          })
        }
      }).catch(error=>{
        if(error.response.data === "Unauthorized"){
          console.log(error.response.data)
          localStorage.removeItem("appy-token")
          Swal.fire({
            title: "Oops 😥",
            text: "Unauthorized, Please Login"
          })
        }
      })
  }, [token]);



  return (
    <LoginContext.Provider value={{user}}>{children}</LoginContext.Provider>
  );
};
