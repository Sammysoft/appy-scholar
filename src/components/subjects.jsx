import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import leftarrow from "../svg/left-arrow.svg"


const ScreenWrapper = styled.div`
  height: fit-content;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  position: relative;
`;

const Subjects = () => {
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
            <img
              style={{ borderRadius: "5px" }}
              src={leftarrow}
              alt="pointer"
            />
          </span>
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
                Your Subjects
              </h3>
            </div>
          </div>
        </div>
      </ScreenWrapper>
    </>
  );
};

export default Subjects;
