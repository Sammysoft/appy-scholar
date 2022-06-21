import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import leftarrow from "../svg/left-arrow.svg";
import shield from "../svg/shield.svg";

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
const ErrorScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      <ScreenWrapper>
        <div style={{ width: "95%", height: "10vh", textAlign: "left" }}>
          <span onClick={() => navigate(-1)}>
            <img src={leftarrow} alt="pointer" />
          </span>
        </div>
        <span style={{ color: "#150845" }}>Page Not Found!</span>
        <div
          style={{
            width: "50%",
            height: "70vh",
            textAlign: "center",
            display: "grid",
            gridTemplateColumns: "auto",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={shield} alt="error" height="200px" width="200px" />
          <div>
            <span
              style={{ fontSize: "3rem", fontWeight: "700", color: "#150845" }}
            >
              Error 404
            </span>
          </div>
        </div>
      </ScreenWrapper>
    </>
  );
};
export default ErrorScreen;
