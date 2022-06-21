/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import AdminBottomNav from "./bottomnav";
import Student from "./student";
import styled from "styled-components";
import leftarrow from "../svg/left-arrow.svg";
import pdf from "../svg/pdf.svg";
import list from "../svg/list.svg";
import staff from "../svg/staff.svg";
import student from "../svg/student.svg";
import stats from "../svg/stats.svg";
import sliders from "../svg/sliders.svg";
import StudentList from "../components/studentlist";
import Classes from "./classes";
import TermConfig from "./terminal-config";
import Staff from "./staff";
import StaffList from "../components/stafflist";
import Subjects from "./subjects";

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

const AdminDashboard = () => {
  const location = useLocation();
  const thisRoute = location.pathname;
  const [screen, setScreen] = useState(`${thisRoute}`);
  const navigate = useNavigate();
  const time  = new Date();
  let currentHour = time.getHours();

  useEffect(() => {
    setScreen(thisRoute);
  }, [thisRoute]);

  switch (screen) {
    case "/dashboard":
      return (
        <>
          <ScreenWrapper>
            <div
           style={currentHour <= 12 ?  {
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
          } : currentHour <= 16 ? {
            width: "100%",
            height: "20vh",
            textAlign: "left",
            backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(/images/background2.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "contain",
            backgroundSize: "cover",
            borderBottom: "2px solid black",
            position: "relative",
            marginTop: "0px",
          } : currentHour <=20 ? {
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
          } : {
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
                 {currentHour <= 12 ? <>Good Morning</>: currentHour <= 16 ? <>Good Afternoon</>: currentHour <= 20 ? <>Good Evening</>: <>Good Night</> }
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
                  Welcome, Mr Samuel{" "}
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
                      setScreen("/admin/students");
                    }}
                    to="/admin/students"
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
                        src={student}
                        alt="student"
                        height="100px"
                        width="100%"
                      />
                      <span>Students</span>
                    </div>
                  </Link>
                  <Link
                    onClick={() => {
                      setScreen("/admin/staff");
                    }}
                    to="/admin/staff"
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
                      boxShadow: "-7px 7px 14px rgba(248, 141, 43, 0.07)",
                    }}
                  >
                    <img src={staff} alt="staff" height="100px" width="100%" />
                    <span>Staff</span>
                  </div>
                  </Link>
                  <Link
                    onClick={() => {
                      setScreen("/admin/classes");
                    }}
                    to="/admin/classes"
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
                      <img src={pdf} alt="cap" height="100px" width="100%" />
                      <span>Results Config</span>
                    </div>
                  </Link>
                  <Link
                    onClick={() => {
                      setScreen("/admin/subjects");
                    }}
                    to="/admin/subjects"
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
                    <span>Available Subjects</span>
                  </div>
                  </Link>
                  <Link
                    onClick={() => {
                      setScreen("/admin/term-config");
                    }}
                    to="/admin/term-config"
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
                      src={sliders}
                      alt="sliders"
                      height="100px"
                      width="100%"
                    />
                    <span>Term Config</span>
                  </div>
                  </Link>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      borderRadius: "5px",
                      boxShadow: "-7px 7px 14px rgba(248, 141, 43, 0.07)",
                    }}
                  >
                    <img src={stats} alt="stats" height="100px" width="100%" />
                    <span>Overall Statistics</span>
                  </div>
                </div>
              </div>
              <AdminBottomNav />
            </div>
          </ScreenWrapper>
        </>
      );
      break;
    case "/admin/students":
      return (
        <>
          <Student />
        </>
      );
      break;
    case "/admin/student/list":
      return (
        <>
          <StudentList />
        </>
      );
      break;
    case "/admin/classes":
      return (
        <>
          <Classes />
        </>
      );
      break;
      case "/admin/term-config":
        return (
          <>
           <TermConfig />
          </>
        );
        break;
        case "/admin/staff":
          return (
            <>
             <Staff />
            </>
          );
          break;
          case "/admin/staff/list":
            return (
              <>
                <StaffList />
              </>
            );
            break;
            case "/admin/subjects":
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
export default AdminDashboard;