import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/authform";
import styled from "styled-components";
import leftarrow from "../svg/left-arrow.svg";

const ScreenWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
`;

const AuthScreen = () => {
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
            Login
          </span>
        </div>
        <div
          style={{
            width: "70%",
            height: "70vh",
            textAlign: "center",
            display: "flex",
            fiexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AuthForm />
        </div>
      </ScreenWrapper>
    </>
  );
};

export default AuthScreen;
