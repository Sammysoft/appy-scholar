import React from "react";
import { useNavigate } from "react-router-dom";
import OnboardForm from "../components/onboardform";
import styled from "styled-components";
import leftarrow from "../svg/left-arrow.svg";


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
            <h3 style={{ fontFamily: "Irish Grover", fontSize:"1.5rem", color:"#150845" }}>Add a Student</h3>
          </div>
          <div style={{ width: "80%", margin:"auto" }}>
            <OnboardForm />
          </div>
        </div>
      </ScreenWrapper>
    </>
  );
};

export default Student;
