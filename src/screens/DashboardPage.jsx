/* eslint-disable */
import React, { useState, useEffect } from "react";
import AdminDashboard from "../Admin/Dashboard";
import ClassMasterDashboard from "../ClassMaster/Dashboard";
import StaffDashboard from "../Staff/Dashboard";
import { Loader } from "semantic-ui-react";

const DashboardPage = () => {
  const [role, setRole] = useState("");

  useEffect(() => {
    setRole("Staff");
  }, []);

  switch (role) {
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
            <br/>
            <span style={{fontWeight: "50", opacity: "0.4"}}>Fetching Resource...</span>
          </div>
        </>
      );
      break;
  }
};

export default DashboardPage;
