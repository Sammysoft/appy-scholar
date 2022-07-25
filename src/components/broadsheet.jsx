import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import leftarrow from "../svg/left-arrow.svg";


const ScreenWrapper = styled.div`
  min-height: 110vh;
  height: fit-content;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  margin: 0px;
  box-sizing: border-box;
`;

const BroadSheet = () => {
    const navigate = useNavigate()
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
            <h3 style={{ fontFamily: "Irish Grover" }}>Broad Sheet</h3>
          </div>
          <div style={{ width: "100%", margin: "auto" }}></div>
        </div>
      </ScreenWrapper>
    </>
  );
};

export default BroadSheet;
