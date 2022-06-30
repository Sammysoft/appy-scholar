import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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

const Button = styled.span`
  border-radius: 7px;
  padding: 10px 15px;
  color: #150845;
  background-color: #dbb921;
  font-size: 1.5rem;
  font-weight: 500;
  width: 100%;
  text-align: center;
`;

const QuestionUpload = () => {
  const navigate = useNavigate();
  const [classData, setClassData] = useState(null);
  const [toggleSelect, setToggleSelect] = useState(false);
  const [instruction, setInstruction] = useState("");
  const [duration, setDuration] = useState("");
  const [marks, setMarks] = useState("");

  useEffect(() => {
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
            <h3 style={{ fontFamily: "Irish Grover" }}>Upload Questions</h3>
          </div>
          <div style={{ width: "100%", margin: "auto" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100vw",
                overflowX: "scroll",
                height: "fit-content",
                scrollbarWidth: "none",
              }}
            >
              <div
                style={{
                  height: "30vh",
                  width: "30vw",
                  borderRadius: "8px",
                  backgroundColor: "whitesmoke",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#150845",
                  margin: "10px",
                  padding: "30px",
                }}
              >
                Mathematics <br />
                [Sss One]
              </div>
              <div
                style={{
                  height: "30vh",
                  width: "30vw",
                  borderRadius: "8px",
                  backgroundColor: "whitesmoke",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#150845",
                  margin: "10px",
                  padding: "30px",
                }}
              >
                Mathematics <br />
                [Sss One]
              </div>
              <div
                style={{
                  height: "30vh",
                  width: "30vw",
                  borderRadius: "8px",
                  backgroundColor: "whitesmoke",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#150845",
                  margin: "10px",
                  padding: "30px",
                }}
              >
                Mathematics <br />
                [Sss One]
              </div>
              <div
                style={{
                  height: "30vh",
                  width: "30vw",
                  borderRadius: "8px",
                  backgroundColor: "whitesmoke",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#150845",
                  margin: "10px",
                  padding: "30px",
                }}
              >
                Economics <br />
                [Sss Two]
              </div>
              <div
                style={{
                  height: "30vh",
                  width: "30vw",
                  borderRadius: "8px",
                  backgroundColor: "whitesmoke",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#150845",
                  margin: "10px",
                  padding: "30px",
                }}
              >
                Economics <br />
                [Sss One]
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
                minHeight: "55vh",
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
                  <div
                    style={{
                      width: "100vw",
                      height: "100vh",
                      position: "absolute",
                      padding: "20px 10px",
                      zIndex: "1",
                      backgroundColor: "white",
                    }}
                  >
                    {classData}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "40% 60%",
                      }}
                    >
                      <div style={{ textAlign: "left" }}>
                        <div>
                          <span style={{ fontWeight: "800" }}>Duration: </span>
                          <span style={{ fontSize: "0.7rem" }}>
                            {" "}
                            {duration}
                          </span>
                        </div>
                      </div>
                      <div style={{ textAlign: "left" }}>
                        <span style={{ fontWeight: "800" }}>Marks: </span>
                        <span style={{ fontSize: "0.7rem" }}> {marks}</span>
                      </div>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <span style={{ fontWeight: "800" }}>Instructions: </span>
                      <span style={{ fontSize: "0.7rem" }}>{instruction}</span>
                    </div>
                    <textarea
                      style={{
                        width: "100%",
                        height: "40%",
                        fontFamily: "Irish Grover",
                        border: "1px solid #150845",
                      }}
                      placeholder="Type Your Questions Here!"
                    ></textarea>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          display: "grid",
                          gridTemplateColumns: "auto auto",
                        }}
                      >
                        <div style={{ textAlign: "left" }}>
                          <label>Exam Duration:</label>
                          <select
                            onChange={(e) => {
                              setDuration(e.target.value);
                            }}
                            style={{
                              width: "90%",
                              border: "1px solid #150845",
                              backgroundColor: "white",
                              color: "#150845",
                              fontFamily: "Irish Grover",
                              padding: "10px 5px",
                              borderRadius: "5px",
                            }}
                          >
                            <option value="30 Min">30minutes</option>
                            <option value="45 Min">45minutes</option>
                            <option value="1 hour">1 hour</option>
                            <option value="1 hour 30min">
                              1 hour 30minutes
                            </option>
                            <option value="1 hour 45min">
                              1 hour 45minutes
                            </option>
                            <option value="2 hours">2 hours</option>
                          </select>
                        </div>
                        <div style={{ textAlign: "left" }}>
                          <label>Question Marks:</label>
                          <select
                            onChange={(e) => {
                              setMarks(e.target.value);
                            }}
                            style={{
                              width: "90%",
                              border: "1px solid #150845",
                              backgroundColor: "white",
                              color: "#150845",
                              fontFamily: "Irish Grover",
                              padding: "10px 5px",
                              borderRadius: "5px",
                            }}
                          >
                            <option value="5 Marks per question">
                              5 marks per question
                            </option>
                            <option value="10 Marks per question">
                              10 marks per question
                            </option>
                            <option value="15 Marks per question">
                              15 marks per question
                            </option>
                            <option value="20 Marks per question">
                              20 marks per question
                            </option>
                          </select>
                        </div>
                      </div>
                      <label>Instructions:</label>
                      <input
                        type="text"
                        value={instruction}
                        onChange={(e) => {
                          setInstruction(e.target.value);
                        }}
                        placeholder="Answer all questions. Each question carry equal marks"
                        style={{
                          width: "100%",
                          border: "1px solid #150845",
                          backgroundColor: "white",
                          color: "#150845",
                          fontFamily: "Irish Grover",
                          padding: "10px 5px",
                          borderRadius: "5px",
                        }}
                      />
                      <br />
                      <Button>Upload</Button>
                    </div>
                  </div>
                </>
              )}
            </div>
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

export default QuestionUpload;
