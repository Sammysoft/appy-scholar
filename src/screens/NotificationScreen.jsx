import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import leftarrow from "../svg/left-arrow.svg";
import NavigatorRouter from "./Navigator";

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

const NotificationScreen = () => {
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
            <img
              style={{ borderRadius: "5px" }}
              src={leftarrow}
              alt="pointer"
            />
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
            <h3 style={{ fontFamily: "Irish Grover" }}>Notifications</h3>
          </div>
          <div
            style={{
              padding: "10px",
              minHeight: "20vh",
              width: "95%",
              margin: "auto",
              borderRadius:"8px",
              boxShadow: "-7px 7px 14px rgba(248, 141, 43, 0.07)",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "auto auto",
                justifyContent: "space-between",

              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src="/images/profile.jpg"
                  alt="profile"
                  height="40px"
                  width="40px"
                  style={{ borderRadius: "40px" }}
                />
                <span style={{ fontWeight: "900", fontSize: "1rem" }}>
                  Admin
                </span>
              </div>
              <div>
                <span style={{ fontSize: "0.65rem", textAlign: "right" }}>
                  {" "}
                  12:00pm, July 5th 2022
                </span>
              </div>
            </div>
            <div
              style={{
                borderLeft: "1px solid #150845",
                minHeight: "60%",
                width: "80%",
                marginLeft: "20%",
                textAlign: "left",
                padding :"5px 10px",
                position: "relative"
              }}
            >
              <span style={{opacity: ".6"}}>
                <i>Hello, we are thrilled to let you be informed that tonight is the end of the year party!. Come with your casual attires.</i>
              </span>
              <div style={{position: "absolute", right:"2px", bottom:"0px"}}>
              📩
              </div>
            </div>
          </div>
             <div
            style={{
              padding: "10px",
              minHeight: "20vh",
              width: "95%",
              margin: "auto",
              borderRadius:"8px",
              boxShadow: "-7px 7px 14px rgba(248, 141, 43, 0.07)",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "auto auto",
                justifyContent: "space-between",

              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src="/images/profile.jpg"
                  alt="profile"
                  height="40px"
                  width="40px"
                  style={{ borderRadius: "40px" }}
                />
                <span style={{ fontWeight: "900", fontSize: "1rem" }}>
                  Admin
                </span>
              </div>
              <div>
                <span style={{ fontSize: "0.65rem", textAlign: "right" }}>
                  {" "}
                  08:48am, July 15th 2022
                </span>
              </div>
            </div>
            <div
              style={{
                borderLeft: "1px solid #150845",
                minHeight: "60%",
                width: "80%",
                marginLeft: "20%",
                textAlign: "left",
                padding :"5px 10px",
                position: "relative"
              }}
            >
              <span style={{opacity: ".6"}}>
                <i>Please ensure all your records are uploaded and up to date, the deadline for uploads is in 24hours.</i>
              </span>
              <div style={{position: "absolute", right:"2px", bottom:"0px"}}>
              📩
              </div>
            </div>
          </div>
             <div
            style={{
              padding: "10px",
              minHeight: "20vh",
              width: "95%",
              margin: "auto",
              borderRadius:"8px",
              boxShadow: "-7px 7px 14px rgba(248, 141, 43, 0.07)",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "auto auto",
                justifyContent: "space-between",

              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src="/images/profile.jpg"
                  alt="profile"
                  height="40px"
                  width="40px"
                  style={{ borderRadius: "40px" }}
                />
                <span style={{ fontWeight: "900", fontSize: "1rem" }}>
                  Admin
                </span>
              </div>
              <div>
                <span style={{ fontSize: "0.65rem", textAlign: "right" }}>
                  {" "}
                  07:51pm, July 20th 2022
                </span>
              </div>
            </div>
            <div
              style={{
                borderLeft: "1px solid #150845",
                minHeight: "60%",
                width: "80%",
                marginLeft: "20%",
                textAlign: "left",
                padding :"5px 10px",
                position: "relative"
              }}
            >
              <span style={{opacity: ".6"}}>
                <i>Thank you for your efforts in the exams and invigilation, it was a wonderful term indeed. See you next term!</i>
              </span>
              <div style={{position: "absolute", right:"2px", bottom: "0px"}}>
              📩
              </div>
            </div>
          </div>
          <NavigatorRouter />
        </div>
      </ScreenWrapper>
    </>
  );
};

export default NotificationScreen;
