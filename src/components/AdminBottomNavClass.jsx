import React from "react";
import { Link } from "react-router-dom";
import add from "../svg/add.svg";
import home from "../svg/home.svg";

const AdminBottomNavClass = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "10vh",
          padding: "5px",
          position: "fixed",
          bottom: "0px",
          display: "grid",
          gridTemplateColumns: "auto auto",
          columnGap: "10px",
          backgroundColor: "#dbb921",
          alignItems: "center",
        }}
      >
        <Link
          to="/dashboard"
          style={{
            textDecoration: "none",
            textDecorationLine: "none",
            color: "none",
          }}
        >
          <span>
            <img src={home} alt="home" />
          </span>
        </Link>
        <Link
          to="/admin/students/add"
          style={{
            textDecoration: "none",
            textDecorationLine: "none",
            color: "none",
          }}
        >
          <span>
            <img src={add} alt="add" />
          </span>
        </Link>
      </div>
    </>
  );
};

export default AdminBottomNavClass;
