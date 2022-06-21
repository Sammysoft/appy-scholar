import React from "react";
import styled from "styled-components";
import plug from "../svg/plug.svg";

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

const TextWrapper = styled.div`
  width: 70%;
  height: fit-content;
  font-weight: 700;
  font-size: 2rem;
  margin: auto;
  color: #150845;
  text-align: center;
`;

const OfflineScreen = () => {
  return (
    <>
      <ScreenWrapper>
        <div
          style={{
            width: "90%",
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{}}>
            <img src={plug} alt="plug" height="100px" width="100px"/>
          </div>
          <TextWrapper>
            <p>Oops!</p>
            <p>
              <span style={{ fontSize: "1rem" }}>
                Looks like you are currently Offline
              </span>
            </p>
            <br />
          </TextWrapper>
        </div>
      </ScreenWrapper>
    </>
  );
};

export default OfflineScreen;
