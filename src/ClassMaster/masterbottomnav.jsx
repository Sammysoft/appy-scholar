import React from "react";
import add from "../svg/add.svg";
import signout from "../svg/signout.svg";
import settings from "../svg/settings.svg";
import home from "../svg/home.svg";


const MasterBottomNav = () =>{
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
            <span>
              <img src={home} alt="home" />
            </span>
            <span>
              <img src={add} alt="add" />
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

export default MasterBottomNav;