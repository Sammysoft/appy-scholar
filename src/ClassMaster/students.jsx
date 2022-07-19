import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import leftarrow from "../svg/left-arrow.svg";
import ClassList from "./classlist";
import MasterBottomNavClass from "./masterbottomnavclass";
import { LoginContext } from "../loginContext";


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

const Student = () => {
  const { user } = useContext(LoginContext)
  const navigate = useNavigate();
  return (
    <>
      <ScreenWrapper>
        <div
          style={{
            width: "100%",
            height: "5vh",
            textAlign: "left",
            position: "relative",
            marginTop: "0px",
          }}
        >
          <span onClick={() => navigate(-1)}>
            <img src={leftarrow} alt="pointer" />
          </span>
        </div>

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
            <h3 style={{ fontFamily: "Irish Grover" }}>Your Students [{user.classRole}]</h3>
          </div>
          <div style={{ width: "90%", margin: "auto" }}>
            <div>
                <ClassList />
            </div>
          </div>
          <MasterBottomNavClass />
        </div>
      </ScreenWrapper>
    </>
  );
};

export default Student;
