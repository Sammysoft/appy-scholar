import React from "react";
import { Link } from "react-router-dom";
import add from "../svg/add.svg";

const AdminBottomNavReg = ({ route }) => {
  return (
    <>
      <Link
        to={`${route}`}
        style={{
          textDecoration: "none",
          textDecorationLine: "none",
          color: "none",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            padding: "50px",
            borderRadius: "50%",
            position: "fixed",
            bottom: "5px",
            display: "flex",
            justifyContent: "center",
            right: "5px",
            backgroundColor: "#dbb921",
            alignItems: "center",
          }}
        >
          <span>
            <img src={add} alt="add" />
          </span>
        </div>
      </Link>
    </>
  );
};

export default AdminBottomNavReg;
