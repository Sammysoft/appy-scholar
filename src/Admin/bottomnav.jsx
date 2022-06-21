import React from "react";
import { Link } from "react-router-dom";
import bell from "../svg/bell.svg";
import signout from "../svg/signout.svg";
import settings from "../svg/settings.svg";
import home from "../svg/home.svg";


const AdminBottomNav = () =>{
    return(<>
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
           <Link to="/" style={{textDecoration: "none", textDecorationLine: "none", color :"none"}}>
           <span>
              <img src={home} alt="home" />
            </span>
           </Link>
            <span>
              <img src={bell} alt="bell" />
            </span>
            <span>
              <img src={settings} alt="settings" />
            </span>
            <span>
              <img src={signout} alt="signout" />
            </span>
          </div>
    </>)
}

export default AdminBottomNav;