import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import spark from "../svg/spark.svg"

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

const ImageWrapper = styled.div`
  width: 70%;
  height: 40vh;
  margin: 10px 30px;
`;

const TextWrapper = styled.div`
  width: 70%;
  height: fit-content;
  font-weight: 700;
  font-size: 2rem;
  margin: auto;
  color: #150845;
  text-align: center;
`;

const Button = styled.span`
  border-radius: 7px;
  padding: 2vh 10vw;
  color: #150845;
  background-color: #dbb921;
  margintop: 20vh;
  font-size: 1.5rem;
  font-weight: 500;
`;

const FlashScreen = () => {
  return (
    <>
      <ScreenWrapper>
        <ImageWrapper>
          <img src={"/images/bulb.png"} alt="cap" height="100%" width="100%" />
        </ImageWrapper>
        <TextWrapper>
          <p>Welcome</p>
          <p>To</p>
          <p>Oladele Dossier<img src={spark} alt="spark"/></p>
          <br />
          <br />
          <Link
            to="/onboard"
            style={{ textDecoration: "none", textDecorationLine: "none" }}
          >
            <Button>Get Started</Button>
          </Link>
        </TextWrapper>
      </ScreenWrapper>
    </>
  );
};

export default FlashScreen;
