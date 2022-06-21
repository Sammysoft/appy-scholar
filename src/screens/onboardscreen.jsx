import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
const Button = styled.div`
  border-radius: 7px;
  padding: 2vh 10vw;
  color: black;
  background-color: #f2e980;
  margintop: 20vh;
  font-size: 1.5rem;
  font-weight: 500;
`;

const OnboardScreen = () => {
  const navigate = useNavigate();

  return (
    <>
      <ScreenWrapper>
        <div style={{ width: "95%", height: "10vh", textAlign: "left" }}>
          <span onClick={() => navigate(-1)}>
            <img src={leftarrow} alt="pointer" />
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
          <div>
            <Link
              to="/auth"
              style={{ textDecoration: "none", textDecorationLine: "none" }}
            >
              <Button>Login</Button>
            </Link>
            <br />
            <div style={{ fontSize: "2rem", padding: "5vh" }}>OR</div>
            <br />
            <Link
              to="/register"
              style={{ textDecoration: "none", textDecorationLine: "none" }}
            >
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </ScreenWrapper>
    </>
  );
};

export default OnboardScreen;
