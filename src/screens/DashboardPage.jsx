/* eslint-disable */
import React, { useState, useEffect, useContext } from "react";
import AdminDashboard from "../Admin/Dashboard";
import ClassMasterDashboard from "../ClassMaster/Dashboard";
import StaffDashboard from "../Staff/Dashboard";
import { useNavigate } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { LoginContext } from "../loginContext";

const DashboardPage = () => {
  const {user} = useContext(LoginContext);
  const [valrole, setRole] = useState(user);
  const token = localStorage.getItem("appy-token")
  const navigate = useNavigate()

  useEffect(() => {
    setRole(user.role);
    if(token === null){
      navigate("/auth")
    }

  }, [user]);

  switch (valrole) {
    case "Admin":
      return (
        <>
          <AdminDashboard />
        </>
      );
      break;
    case "Class Master":
      return (
        <>
          <ClassMasterDashboard />
        </>
      );
      break;
    case "Staff":
      return (
        <>
          <StaffDashboard />
        </>
      );
      break;

    default:
      return (
        <>
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader active inline="centered" />
            <br />
            <span style={{ fontWeight: "50", opacity: "0.4" }}>
              Fetching Resource...
            </span>
          </div>
        </>
      );
      break;
  }
};

export default DashboardPage;
