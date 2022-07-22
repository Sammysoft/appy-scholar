/* eslint-disable */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Loader } from "semantic-ui-react";
import download from "../svg/download.svg";
import Swal from "sweetalert2";
import axios from "axios";
import { api } from "../strings";

const Button = styled.span`
  border-radius: 7px;
  padding: 10px 15px;
  color: #150845;
  background-color: #dbb921;
  width: fit-content;
  margin: 10px;
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const OneClass = ({ student, studentsScores }) => {
  console.log(student)
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  let scored = [];

  {
    scored.push(
      studentsScores.filter((scores) => {
        return scores.studentname == `${student.firstname} ${student.lastname}`;
      })
    );
  }

useEffect(()=>{
  // setComment(student.comment.principal)
})

  const _commentResult = (comment) => {
    setLoading(true);
    if (comment != "") {
      const payload = {
        principal: comment
      };
      axios
        .post(`${api}/student/comment/${student._id}`, payload)
        .then((res) => {
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          Swal.fire({
            title: "Oops 😥",
            text: error.response.data.data,
          });
        });
    } else {
      Swal.fire({
        title: "Can't be blank",
        text: "write something based on the student's performance in all registered subjects",
      });
    }
  };

  return (
    <>
      <>
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto",
              columnGap: "50px",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <img
              src={student.profilePicture}
              height="50px"
              width="50px"
              alt="profile"
              style={{ borderRadius: "10px", padding: "5px" }}
            />
            <span>
              {student.firstname} {student.lastname}
            </span>
          </div>
          <div style={{ display: "block" }}>
            <span>Result Overview</span>
            <table style={{ width: "100%" }}>
              <thead>
                <th>Subject</th>
                <th>20%</th>
                <th>20%</th>
                <th>60%</th>
                <th>100%</th>
                <th>Grade</th>
              </thead>
              <tbody>
                {scored[0].map((val) => {
                  return (
                    <>
                      <tr>
                        <td style={{ textAlign: "left" }}>{val.text}</td>
                        <td>{val.studentscores.firsttest}</td>
                        <td>{val.studentscores.secondtest}</td>
                        <td>{val.studentscores.exam}</td>
                        <td>{val.studentscores.tot}</td>
                        {val.studentscores.tot < 35 ? (
                          <td>F9</td>
                        ) : val.studentscores.tot < 40 ? (
                          <td>E8</td>
                        ) : val.studentscores.tot < 45 ? (
                          <td>D7</td>
                        ) : val.studentscores.tot < 50 ? (
                          <td>C6</td>
                        ) : val.studentscores.tot < 55 ? (
                          <td>C5</td>
                        ) : val.studentscores.tot < 60 ? (
                          <td>C4</td>
                        ) : val.studentscores.tot < 65 ? (
                          <td>B3</td>
                        ) : val.studentscores.tot < 70 ? (
                          <td>B2</td>
                        ) : (
                          <td>A1</td>
                        )}
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {loading === true ? (
          <>
            <Loader active inline="centered" /><br/>
            <small>Commenting, please wait...</small>
          </>
        ) : (
          <>
            <textarea
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
              placeholder="Comment"
              style={{
                fontFamily: "Irish Grover",
                borderBottom: "1px solid black",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                outlineColor: "none",
                width: "90%",
                padding: "3px",
                margin: "10px",
              }}
            ></textarea>
          </>
        )}

        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "auto auto",
            columnGap: "40vw",
            alignItems: "center",
          }}
        >
          <Button onClick={()=>{
            _commentResult(comment)
          }}>Comment</Button>

          <img src={download} alt="download" />
        </div>
      </>
    </>
  );
};

export default OneClass;
