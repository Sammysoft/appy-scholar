import React from "react";
import plus from "../svg/plus.svg";

const AdminBottomNavAdd = () => {
  return (
    <>

        <div
          style={{
            width: "40px",
            height: "40px",
            padding: "40px",
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
            <img src={plus} alt="plus" />
          </span>
        </div>
    </>
  );
};

export default AdminBottomNavAdd;
