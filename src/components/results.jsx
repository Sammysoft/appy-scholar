import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../strings";
import Swal from "sweetalert2";

const Results = () => {
  const studentID = window.location.pathname.slice(-24);

  useEffect(() => {
    axios
      .get(`${api}/students/result/${studentID}`)
      .then((res) => {
        console.log(res.data);
        setStudent(res.data.student);
        setPrincipalsComments(res.data.student.comments.principal);
        setClassMastersComments(res.data.student.comments.classmaster);
        setTerm(res.data.term);
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
  const [principal, setPrincipalsComments] = useState();
  const [term, setTerm] = useState({});
  const [classmasters, setClassMastersComments] = useState();
  console.log(student);
  const dateterm = new Date(term.nexttermbegins);

  return (
    <>
      <div style={{ width: "100%" }}>
        <header style={{ textTransform: "uppercase" }}>
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
            <div style={{ width: "30%", height: "40vh" }}>
              <img
                src={student.profilePicture}
                alt="profile"
                width="100%"
                height="100%"
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div style={{ width: "70%", padding: "20px", fontSize: "1rem" }}>
              <div style={{ padding: "0px 10px", textTransform: "uppercase" }}>
                <span style={{ fontWeight: "700", textTransform: "uppercase" }}>
                  Name:
                </span>{" "}
                {student.firstname} {student.lastname}
              </div>
              <br />
              <div style={{ padding: "0px 10px", textTransform: "uppercase" }}>
                <span style={{ fontWeight: "700", textTransform: "uppercase" }}>
                  Class:
                </span>{" "}
                {student.studentClass}
              </div>
              <br />
              <div style={{ padding: "0px 10px", textTransform: "uppercase" }}>
                <span style={{ fontWeight: "700", textTransform: "uppercase" }}>
                  Term:
                </span>{" "}
                {term.currterm} Terminal Examination
              </div>
              <br />
              <div style={{ padding: "0px 10px", textTransform: "uppercase" }}>
                <span style={{ fontWeight: "700", textTransform: "uppercase" }}>
                  Year:
                </span>{" "}
                {term.year}
              </div>
              <br />
              <hr />
              <div style={{ padding: "0px 10px", textTransform: "uppercase" }}>
                <span style={{ fontWeight: "700" }}>Total:</span>{" "}
                {student.total} of 1400
              </div>
              <br />
              <div style={{ padding: "0px 10px", textTransform: "uppercase" }}>
                <span style={{ fontWeight: "700" }}>Percentage:</span>{" "}
                {student.percentage}%
              </div>
              <br />

              <div style={{ padding: "0px 10px", textTransform: "uppercase" }}>
                <span style={{ fontWeight: "700" }}>Position:</span>{" "}
                {student.position}
              </div>
              <br />
              <div style={{ padding: "0px 10px", textTransform: "uppercase" }}>
                <span style={{ fontWeight: "700" }}>Performance: </span>{" "}
                {student.percentage <= 39 ? (
                  <>Failed</>
                ) : student.percentage <= 48 ? (
                  <>Pass</>
                ) : student.percentage <= 59 ? (
                  <>Merit</>
                ) : student.percentage <= 74 ? (
                  <>Credit</>
                ) : student.percentage >= 75 ? (
                  <> Distinction</>
                ) : (
                  <></>
                )}
              </div>
              <br />
              <div style={{ padding: "0px 10px", textTransform: "uppercase" }}>
                <span style={{ fontWeight: "700" }}>Next Term Begins: </span>{" "}
                {dateterm.toDateString()}
              </div>
            </div>
          </div>
        </header>
        <section>
          <table
            style={{ width: "100%", fontSize: "1.5rem", marginTop: "2vh" }}
          >
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
                      <td style={{ padding: "5px 5px" }}>{mark.text}</td>
                      <td style={{ padding: "5px 5px" }}>
                        {mark.studentscores.firsttest}
                      </td>
                      <td style={{ padding: "5px 5px" }}>
                        {mark.studentscores.secondtest}
                      </td>
                      <td style={{ padding: "5px 5px" }}>
                        {mark.studentscores.exam}
                      </td>
                      <td style={{ padding: "5px 5px" }}>
                        {mark.studentscores.tot}
                      </td>
                      {mark.studentscores.tot === 0 ? (
                        <td>--</td>
                      ) : mark.studentscores.tot < 35 ? (
                        <td>F9</td>
                      ) : mark.studentscores.tot < 40 ? (
                        <td>E8</td>
                      ) : mark.studentscores.tot < 45 ? (
                        <td>D7</td>
                      ) : mark.studentscores.tot < 50 ? (
                        <td>C6</td>
                      ) : mark.studentscores.tot < 55 ? (
                        <td>C5</td>
                      ) : mark.studentscores.tot < 60 ? (
                        <td>C4</td>
                      ) : mark.studentscores.tot < 65 ? (
                        <td>B3</td>
                      ) : mark.studentscores.tot < 70 ? (
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
        </section>
        <footer
          style={{
            fontSize: "1rem",
            padding: "10px",
            textTransform: "uppercase",
          }}
        >
          <div>
            Class Master: <i>{classmasters}</i>
          </div>
          <br />
          <div>
            Principal: <i>{principal}</i>
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
