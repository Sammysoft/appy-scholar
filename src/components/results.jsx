import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../strings";
import Swal from "sweetalert2";

const Results = () => {
  const studentID = window.location.pathname.slice(-24);
  console.log(studentID)


  useEffect(() => {
    axios
      .get(`${api}/students/result/${studentID}`)
      .then((res) => {
        console.log(res.data)
        setStudent(res.data.student);
        setScore(res.data.scores);
      })
      .catch((error) => {
        Swal.fire({
          title: "Network Error",
          text: error.response.data.data,
        });
      });
  }, [studentID]);



  const [student, setStudent] = useState({});
  const [score, setScore] = useState([]);



  return (
    <>
      <div style={{ width: "100%" }}>
        <header>
          <div
            style={{
              padding: "10px",
              fontWeight: "800",
              fontSize: "2.5rem",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            OLADELE GROUP OF SCHOOLS
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "5px",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              textTransform: "capitalize",
            }}
          >
            <div style={{ width: "30%", height: "30vh" }}>
              <img
                src={student.profilePicture}
                alt="profile"
                width="100%"
                height="100%"
              />
            </div>
            <div style={{ width: "70%", padding: "20px", fontSize: "1rem" }}>
              <div style={{ padding: "0px 10px", textTransform:"uppercase" }}>
                <span style={{ fontWeight: "700", textTransform:"uppercase" }}>Name:</span>{" "}
                {student.firstname} {student.lastname}
              </div>
              <br />
              <div style={{ padding: "0px 10px" }}>
                <span style={{ fontWeight: "700" }}>Class:</span>{" "}
                {student.studentClass}
              </div>
              {/* <br />
              <div style={{ padding: "0px 10px" }}>
                <span style={{ fontWeight: "700" }}>Term:</span> First Terminal
                Examination
              </div>
              <br />
              <div style={{ padding: "0px 10px" }}>
                <span style={{ fontWeight: "700" }}>Year:</span> 2021/2022
              </div> */}
              <br />
              <hr />
              <div style={{ padding: "0px 10px" }}>
                <span style={{ fontWeight: "700" }}>Total:</span> 1300 of 1400
              </div>
              <br />
              <div style={{ padding: "0px 10px" }}>
                <span style={{ fontWeight: "700" }}>Average:</span> 95%
              </div>
              <br />

              <div style={{ padding: "0px 10px" }}>
                <span style={{ fontWeight: "700" }}>Position:</span> 1st of 73
              </div>
              <br />
              <div style={{ padding: "0px 10px" }}>
                <span style={{ fontWeight: "700" }}>Performance: </span>{" "}
                Distinction
              </div>
            </div>
          </div>
        </header>
        <section>
          <table style={{ width: "100%", fontSize: "1.5rem", marginTop:"2vh" }}>
            <thead>
              <th style={{ textAlign: "left" }}>Subjects</th>
              <th style={{ textAlign: "left" }}>1st CA (20%)</th>
              <th style={{ textAlign: "left" }}>2nd CA (20%)</th>
              <th style={{ textAlign: "left" }}>Exam (60%)</th>
              <th style={{ textAlign: "left" }}>Total (100%)</th>
              <th style={{ textAlign: "left" }}>Grade (A)</th>
            </thead>
            <tbody>
              {score.map((mark) => {
                return (
                  <>
                    <tr>
                      <td style={{padding: "10px 5px"}}>{mark.text}</td>
                      <td style={{padding: "10px 5px"}}>{mark.studentscores.firsttest}</td>
                      <td style={{padding: "10px 5px"}}>{mark.studentscores.secondtest}</td>
                      <td style={{padding: "10px 5px"}}>{mark.studentscores.exam}</td>
                      <td style={{padding: "10px 5px"}}>{mark.studentscores.tot}</td>
                      <td style={{padding: "10px 5px"}}>A</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </section>
        <footer style={{ fontSize: "1rem", padding: "10px" }}>
          <div>
            Class Master: <i>Keep it up and do not relent</i>
          </div>
          <br />
          <div>
            Principal: <i>Don't jeopardize this giant stude</i>
          </div>
        </footer>
      </div>
      <div style={{ position: "absolute", top: "5px", right: "5px" }}>
        <img
          src="/images/ogslogo.png"
          alt="oladele"
          width="400px"
          height="350px"
        />
      </div>
    </>
  );
};
export default Results;
