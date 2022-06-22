/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import AdminBottomNav from "../Admin/bottomnav";
import styled from "styled-components";
import leftarrow from "../svg/left-arrow.svg";
import dossier from "../svg/dossier.svg";
import list from "../svg/list.svg";
import Upload from "../components/uploads";
import Subjects from "../components/subjects";
import NavigatorRouter from "../screens/Navigator";

const ScreenWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
`;

const StaffDashboard = () => {
  const location = useLocation();
  const thisRoute = location.pathname;
  const [screen, setScreen] = useState(`${thisRoute}`);
  const navigate = useNavigate();
  const time  = new Date();
  let currentHour = time.getHours();

  useEffect(() => {
    setScreen(thisRoute);
    if(thisRoute === "/dashboard"){
      Swal.fire({
        icon: "",
        text:"Nice to have you here 🤣🤣",
        title: "Howdy 🤓"
      })
    }
  }, [thisRoute]);

  switch (screen) {
    case "/dashboard":
      return (
        <>
          <ScreenWrapper>
            <div
           style={currentHour < 12 ?  {
            width: "100%",
            height: "20vh",
            textAlign: "left",
            backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(/images/background.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "contain",
            backgroundSize: "cover",
            borderBottom: "2px solid black",
            position: "relative",
            marginTop: "0px",
          } : currentHour < 16 ? {
            width: "100%",
            height: "20vh",
            textAlign: "left",
            backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(/images/background5.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "contain",
            backgroundSize: "cover",
            borderBottom: "2px solid black",
            position: "relative",
            marginTop: "0px",
          } : currentHour < 20 ? {
            width: "100%",
            height: "20vh",
            textAlign: "left",
            backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(/images/backgroun4.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "contain",
            backgroundSize: "cover",
            borderBottom: "2px solid black",
            position: "relative",
            marginTop: "0px",
          } : {
            width: "100%",
            height: "20vh",
            textAlign: "left",
            backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(/images/background3.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "contain",
            backgroundSize: "cover",
            borderBottom: "2px solid black",
            position: "relative",
            marginTop: "0px",
          }}
            >
              <span onClick={() => navigate(-1)}>
                <img src={leftarrow} alt="pointer" />
              </span>
              <div
                style={{
                  textAlign: "center",
                  width: "100%",
                  fontWeight: "800",
                  fontSize: "2rem",
                  color: "white",
                }}
              >
                 {currentHour < 12 ? <>Good Morning ⛅</>: currentHour < 16 ? <>Good Afternoon 🌞</>: currentHour < 20 ? <> Good Evening 🌖</>: currentHour < 22 ? <>Almost Bedtime 🥱  </>: <>It's Bedtime 🌛</>}
              </div>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "1px solid black",
                  position: "absolute",
                  bottom: "-5vh",
                  backgroundImage: `url(/images/profile.jpg)`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "contain",
                  backgroundSize: "cover",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              ></div>
            </div>
            <br />
            <div
              style={{
                width: "100%",
                height: "fit-content",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div>
                <h3 style={{ fontFamily: "Irish Grover" }}>
                  Welcome, Miss Tina{" "}
                </h3>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  height: "70vh",
                }}
              >
                <div
                  style={{
                    height: "80%",
                    width: "90%",
                    display: "grid",
                    gridTemplateColumns: "auto auto",
                    gap: "10px",
                    margin: "auto",
                    fontWeight: "600",
                    fontSize: "1.3rem",
                  }}
                >
                  <Link
                    onClick={() => {
                      setScreen("/staff/subjects");
                    }}
                    to="/staff/subjects"
                    style={{
                      textDecoration: "none",
                      textDecorationLine: "none",
                      color: "black",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        borderRadius: "5px",
                        boxShadow: "-7px 7px 14px rgba(248, 141, 43, 0.07)",
                      }}
                    >
                      <img src={list} alt="list" height="100px" width="100%" />
                      <span>Your Subjects</span>
                    </div>
                  </Link>
                  <Link
                    onClick={() => {
                      setScreen("/staff/upload");
                    }}
                    to="/staff/upload"
                    style={{
                      textDecoration: "none",
                      textDecorationLine: "none",
                      color: "black",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        borderRadius: "5px",
                        boxShadow: "-7px 7px 14px rgba(248, 141, 43, 0.07)",
                      }}
                    >
                      <img
                        src={dossier}
                        alt="dossier"
                        height="100px"
                        width="100%"
                      />
                      <span>Dossier</span>
                    </div>
                  </Link>
                </div>
              </div>
           <NavigatorRouter />
            </div>
          </ScreenWrapper>
        </>
      );
      break;
    case "/staff/upload":
      return (
        <>
          <Upload />
        </>
      );
      break;
      case "/staff/subjects":
        return (
          <>
            <Subjects />
          </>
        );
        break;
    default:
      break;
  }
};

export default StaffDashboard;
