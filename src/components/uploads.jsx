import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../strings";
import styled from "styled-components";
import leftarrow from "../svg/left-arrow.svg";
import Uploads from "./upload";

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

const Classes = () => {
  const navigate = useNavigate();
  const [classData, setClassData] = useState(null);
  const [students, setStudents] = useState([]);
  const [toggleSelect, setToggleSelect] = useState(false);

  useEffect(() => {
    axios.get(`${api}/students/`).then((res) => {
      setStudents(res.data.data);
    });
    setClassData(classData);
  }, [classData]);

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
                Upload Scores {classData}
              </h3>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "fit-content",
              minHeight: "85vh",
              paddingBottom: "10vh",
            }}
          >
            {classData === null ? (
              <>
                {" "}
                <div>Please, choose one of the subjects you take!</div>
              </>
            ) : (
              <>
                {students.map((stud) => {
                  return (
                    <>
                      <Uploads
                        studentname={`${stud.firstname} ${stud.lastname}`}
                        profilepicture = {stud.profilePicture}
                      />
                    </>
                  );
                })}
              </>
            )}
          </div>
        </div>
        {toggleSelect === false ? (
          <>
            <div
              onClick={() => {
                setToggleSelect(!toggleSelect);
              }}
              style={{
                position: "fixed",
                backgroundColor: "#150845",
                width: "fit-content",
                height: "4vh",
                padding: "5px 10px",
                color: "white",
                textAlign: "center",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                bottom: "2vh",
                right: "0px",
                zIndex: 2,
              }}
            >
              Choose Subject
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                width: "100vw",
                height: "50vh",
                backgroundColor: "#f2e980",
                position: "fixed",
                bottom: "0px",
                borderTopLeftRadius: "10%",
                borderTopRightRadius: "10%",
                display: "grid",
                justifyContent: "space-around",
                alignItems: "center",
                gridTemplateColumns: "auto auto",
                zIndex: 3,
                paddingTop: "50px",
              }}
            >
              <span
                onClick={() => {
                  setToggleSelect(!toggleSelect);
                  setClassData("Mathematics [Jss One]");
                }}
                style={{
                  padding: "10px",
                  backgroundColor: "#150845",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                Mathematics [Jss One]
              </span>
              <span
                onClick={() => {
                  setToggleSelect(!toggleSelect);
                  setClassData("Mathematics [Jss Two]");
                }}
                style={{
                  padding: "10px",
                  backgroundColor: "#150845",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                Mathematics [Jss Two]
              </span>
              <span
                onClick={() => {
                  setToggleSelect(!toggleSelect);
                  setClassData("Mathematics [Jss Three]");
                }}
                style={{
                  padding: "10px",
                  backgroundColor: "#150845",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                Mathematics [Jss Three]
              </span>
              <span
                onClick={() => {
                  setToggleSelect(!toggleSelect);
                  setClassData("Economics [Sss One]");
                }}
                style={{
                  padding: "10px",
                  backgroundColor: "#150845",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                Economics [Sss One]
              </span>
              <span
                onClick={() => {
                  setToggleSelect(!toggleSelect);
                  setClassData("Economics [Sss Two]");
                }}
                style={{
                  padding: "10px",
                  backgroundColor: "#150845",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                Economics [Sss Two]
              </span>
            </div>
          </>
        )}
      </ScreenWrapper>
    </>
  );
};

export default Classes;
