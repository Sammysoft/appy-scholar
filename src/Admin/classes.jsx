import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import leftarrow from "../svg/left-arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Swal from "sweetalert2";
import "swiper/css";
import "swiper/css/pagination";
import OneClass from "./class";
import axios from "axios";
import { api } from "../strings";

const ScreenWrapper = styled.div`
  height: 100vh;
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
  const [toggleSelect, setToggleSelect] = useState(false);
  const [students, setStudents] = useState([]);
  const [score, setScores] = useState([]);

  useEffect(() => {
    setClassData(classData);
  }, [classData]);

  const _getStudents = (data) => {
    axios
      .post(`${api}/students/class`, { data })
      .then((res) => {
        setStudents(res.data.data);
        setScores(res.data.scores);
      })
      .catch((error) => {
        Swal.fire({
          title: "Ahhh 🤨",
          text: error.response.data.data,
        });
      });
  };

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
            <h3 style={{ fontFamily: "Irish Grover" }}>Result Configuration</h3>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "85vh",
            }}
          >
            {classData === null ? (
              <>
                {" "}
                <div>Please, choose a class!</div>
              </>
            ) : (
              <>
                <Swiper
                  pagination={{
                    dynamicBullets: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >

                  {students
                    .sort((a, b) => b.percentage - a.percentage)
                    .map((stud) => {
                      return (
                        <>
                          <SwiperSlide>
                            <OneClass student={stud} numberinclass = {students.length} positionindex = {students.indexOf(stud)} studentsScores={score} />
                          </SwiperSlide>
                        </>
                      );
                    })}
                </Swiper>
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
                width: "30vw",
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
              Choose Class
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
                borderTopLeftRadius: "20%",
                borderTopRightRadius: "20%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
                zIndex: 3,
              }}
            >
              <span
                onClick={() => {
                  setToggleSelect(!toggleSelect);
                  _getStudents("Jss One");
                  setClassData("Jss One");
                }}
                style={{
                  padding: "10px",
                  backgroundColor: "#150845",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                Junior School One
              </span>
              <span
                onClick={() => {
                  setToggleSelect(!toggleSelect);
                  _getStudents("Jss Two");
                  setClassData("Jss Two");
                }}
                style={{
                  padding: "10px",
                  backgroundColor: "#150845",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                Junior School Two
              </span>
              <span
                onClick={() => {
                  setToggleSelect(!toggleSelect);
                  _getStudents("Jss Three");
                  setClassData("Jss Three");
                }}
                style={{
                  padding: "10px",
                  backgroundColor: "#150845",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                Junior School Three
              </span>
              <span
                onClick={() => {
                  setToggleSelect(!toggleSelect);
                  _getStudents("Sss One");
                  setClassData("Sss One");
                }}
                style={{
                  padding: "10px",
                  backgroundColor: "#150845",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                Senior School One
              </span>
              <span
                onClick={() => {
                  setToggleSelect(!toggleSelect);
                  _getStudents("Sss Two");
                  setClassData("Sss Two");
                }}
                style={{
                  padding: "10px",
                  backgroundColor: "#150845",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                Senior School Two
              </span>
              <span
                onClick={() => {
                  setToggleSelect(!toggleSelect);
                  _getStudents("Sss Three");
                  setClassData("Sss Three");
                }}
                style={{
                  padding: "10px",
                  backgroundColor: "#150845",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                Senior School Three
              </span>
            </div>
          </>
        )}
      </ScreenWrapper>
    </>
  );
};

export default Classes;
