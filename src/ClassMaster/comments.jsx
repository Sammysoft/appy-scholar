import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import leftarrow from "../svg/left-arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import CommentList from "./commentlist";
import Swal from "sweetalert2";
import axios from "axios";
import { api } from "../strings";
import { LoginContext } from "../loginContext";

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

const Comments = () => {
  const navigate = useNavigate();
  const { user } = useContext(LoginContext);
  const [students, setStudents] = useState([]);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const data = user.classRole;
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
  },[user.classRole]);

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
            <h3 style={{ fontFamily: "Irish Grover" }}>Add Comments</h3>
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
            <>
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {students.map((stud) => {
                  return (
                    <>
                      <SwiperSlide>
                        <CommentList student={stud} studentsScores={scores} />
                      </SwiperSlide>
                    </>
                  );
              })}
              </Swiper>
            </>
          </div>
        </div>
      </ScreenWrapper>
    </>
  );
};

export default Comments;
