import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import OnboardForm from "../components/onboardform";
import leftarrow from "../svg/left-arrow.svg";

const ScreenWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
`;

const SignupScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      <ScreenWrapper>
        <div style={{ width: "95%", height: "10vh", textAlign: "left" }}>
          <span onClick={() => navigate(-1)}>
            <img src={leftarrow} alt="pointer" />
          </span>
          <span
            style={{ fontWeight: "900", fontSize: "3rem", marginLeft: "25vw" }}
          >
            Sign Up
          </span>
        </div><br/>
        <div
          style={{
            width: "70%",
            height: "fit-content",
            textAlign: "center",
            display: "flex",
            fiexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <OnboardForm />
        </div>
      </ScreenWrapper>
    </>
  );
};

export default SignupScreen;
