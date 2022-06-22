import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import bell from "../svg/bell.svg";
import signout from "../svg/signout.svg";
import settings from "../svg/settings.svg";
import home from "../svg/home.svg";

const NavigatorRouter = () => {
  const navigate = useNavigate();
  const _logout = () => {
    navigate("/auth");
    Swal.fire({
      title: "Awwwnn! 🥺",
      text: "Signing Out Already?, Alright. Don't have a good day, have a great day 💕",
    });
  };

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
          gridTemplateColumns: "auto auto auto auto",
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
          to="/account/notification"
          style={{
            textDecoration: "none",
            textDecorationLine: "none",
            color: "none",
          }}
        >
          <span>
            <img src={bell} alt="bell" />
          </span>
        </Link>
        <Link
          to="/account/settings"
          style={{
            textDecoration: "none",
            textDecorationLine: "none",
            color: "none",
          }}
        >
          <span>
            <img src={settings} alt="settings" />
          </span>
        </Link>
        <span
          onClick={() => {
            _logout();
          }}
        >
          <img src={signout} alt="signout" />
        </span>
      </div>
    </>
  );
};

export default NavigatorRouter;
