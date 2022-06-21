import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AdminBottomNavReg from "../Admin/bottomnavreg";
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

const StudentList = () => {
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
            <h3 style={{ fontFamily: "Irish Grover" }}>List of Students</h3>
          </div>
          <div style={{ width: "80%", margin: "auto" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                textAlign: "left",
                borderRadius: "7px",
                padding: "5px",
                boxShadow: "-7px 7px 14px rgba(248, 141, 43, 0.07)",
              }}
            >
              <img
                style={{ borderRadius: "5px" }}
                src="/images/profile.jpg"
                alt="profile"
                height="100px"
                width="100px"
              />
              <p>
                <h6>Samuel Dare-Owonibi</h6>
                <ul>
                  <li>JssOne</li>
                  <li>Green House</li>
                  <li>Class Member</li>
                  <li>12 years Old</li>
                </ul>
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                textAlign: "left",
                borderRadius: "7px",
                padding: "5px",
                boxShadow: "-7px 7px 14px rgba(248, 141, 43, 0.07)",
              }}
            >
              <img
                style={{ borderRadius: "5px" }}
                src="/images/profile.jpg"
                alt="profile"
                height="100px"
                width="100px"
              />
              <p>
                <h6>Samuel Dare-Owonibi</h6>
                <ul>
                  <li>JssOne</li>
                  <li>Green House</li>
                  <li>Class Member</li>
                  <li>12 years Old</li>
                </ul>
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                textAlign: "left",
                borderRadius: "7px",
                padding: "5px",
                boxShadow: "-7px 7px 14px rgba(248, 141, 43, 0.07)",
              }}
            >
              <img
                style={{ borderRadius: "5px" }}
                src="/images/profile.jpg"
                alt="profile"
                height="100px"
                width="100px"
              />
              <p>
                <h6>Samuel Dare-Owonibi</h6>
                <ul>
                  <li>JssOne</li>
                  <li>Green House</li>
                  <li>Class Member</li>
                  <li>12 years Old</li>
                </ul>
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                textAlign: "left",
                borderRadius: "7px",
                padding: "5px",
                boxShadow: "-7px 7px 14px rgba(248, 141, 43, 0.07)",
              }}
            >
              <img
                style={{ borderRadius: "5px" }}
                src="/images/profile.jpg"
                alt="profile"
                height="100px"
                width="100px"
              />
              <p>
                <h6>Samuel Dare-Owonibi</h6>
                <ul>
                  <li>JssOne</li>
                  <li>Green House</li>
                  <li>Class Member</li>
                  <li>12 years Old</li>
                </ul>
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                textAlign: "left",
                borderRadius: "7px",
                padding: "5px",
                boxShadow: "-7px 7px 14px rgba(248, 141, 43, 0.07)",
              }}
            >
              <img
                style={{ borderRadius: "5px" }}
                src="/images/profile.jpg"
                alt="profile"
                height="100px"
                width="100px"
              />
              <p>
                <h6>Samuel Dare-Owonibi</h6>
                <ul>
                  <li>JssOne</li>
                  <li>Green House</li>
                  <li>Class Member</li>
                  <li>12 years Old</li>
                </ul>
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                textAlign: "left",
                borderRadius: "7px",
                padding: "5px",
                boxShadow: "-7px 7px 14px rgba(248, 141, 43, 0.07)",
              }}
            >
              <img
                style={{ borderRadius: "5px" }}
                src="/images/profile.jpg"
                alt="profile"
                height="100px"
                width="100px"
              />
              <p>
                <h6>Samuel Dare-Owonibi</h6>
                <ul>
                  <li>JssOne</li>
                  <li>Green House</li>
                  <li>Class Member</li>
                  <li>12 years Old</li>
                </ul>
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                textAlign: "left",
                borderRadius: "7px",
                padding: "5px",
                boxShadow: "-7px 7px 14px rgba(248, 141, 43, 0.07)",
              }}
            >
              <img
                style={{ borderRadius: "5px" }}
                src="/images/profile.jpg"
                alt="profile"
                height="100px"
                width="100px"
              />
              <p>
                <h6>Samuel Dare-Owonibi</h6>
                <ul>
                  <li>JssOne</li>
                  <li>Green House</li>
                  <li>Class Member</li>
                  <li>12 years Old</li>
                </ul>
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                textAlign: "left",
                borderRadius: "7px",
                padding: "5px",
                boxShadow: "-7px 7px 14px rgba(248, 141, 43, 0.07)",
              }}
            >
              <img
                style={{ borderRadius: "5px" }}
                src="/images/profile.jpg"
                alt="profile"
                height="100px"
                width="100px"
              />
              <p>
                <h6>Samuel Dare-Owonibi</h6>
                <ul>
                  <li>JssOne</li>
                  <li>Green House</li>
                  <li>Class Member</li>
                  <li>12 years Old</li>
                </ul>
              </p>
            </div>
          </div>
          <AdminBottomNavReg route="/admin/students"/>
        </div>
      </ScreenWrapper>
    </>
  );
};

export default StudentList;
