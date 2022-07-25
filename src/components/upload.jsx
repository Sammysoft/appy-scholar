import React, { useState } from "react";
import { Loader } from "semantic-ui-react";
import send from "../svg/send.svg";
import calculator from "../svg/calculator.svg";
import Swal from "sweetalert2";
import axios from "axios";
import { api } from "../strings";

const Uploads = ({ studentname, studentID, subject }) => {
  const [loading, setLoading] = useState(false);
  const [changeState, setChangeState] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [firstCA, setFirstCA] = useState(null);
  const [score, setScore] = useState();
  const [secondCA, setSecondCA] = useState(null);
  const [exam, setExam] = useState(null);
  const [total, setTotal] = useState(null);

  const _computeTotal = (e) => {
    e.preventDefault();
    if (firstCA !== null && secondCA !== null && exam !== null) {
      setTotal(Number(firstCA) + Number(secondCA) + Number(exam));
      setToggle(!toggle);
    } else {
      Swal.fire({
        icon: "warning",
        title: "Hey! 😡",
        text: "Ensure you enter 1st CA, 2nd CA, & Exams scores for a student before attempting to upload (PS: I'll help you compute the total). Okay?",
      });
    }
  };

  const postScores = () => {
    setLoading(true);
    setInterval(() => {
      setChangeState(true);
      setLoading(false);
    }, 3000);

    const payload = {
      firstCA,
      secondCA,
      exam,
      total,
      studentID,
      subject,
      studentname,
    };
    console.log(payload);

    axios
      .post(`${api}/subjects/addscore`, payload)
      .then((res) => {
        console.log(res.data.data);
        setScore(res.data.data);
      })
      .catch((error) => {
        Swal.fire({
          title: "Oops 😟",
          text: error.response.data.data,
        });
      });
  };

  // useEffect(() => {
  //   axios.post(`${api}/subjects/`, { studentID }).then((res) => {
  //     console.log(res.data);
  //   });
  // }, [studentID]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          padding: "5px",
          borderRadius: "8px",
          boxShadow: "-7px 7px 14px rgba(248, 141, 43, 0.07)",
        }}
      >
        {changeState === false ? (
          <>
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* <img
                  src={profilepicture}
                  alt="profile"
                  height="20px"
                  width="20px"
                  style={{ borderRadius: "10px" }}
                /> */}
                <span style={{ textTransform: "uppercase" }}>
                  {studentname.substring(0, 1)}.{" "}
                  {studentname.substring(studentname.indexOf(" ") + 1)}
                </span>
              </div>
              {loading === true ? (
                <>
                  <Loader active inline="centered" />
                </>
              ) : (
                <>
                  <div style={{ textAlign: "right" }}>
                    <form style={{ textAlign: "right" }}>
                      <input
                        style={{
                          width: "10vw",
                          padding: "5px",
                          margin: "3px",
                          borderRadius: "5px",
                          border: "1px solid #150845",
                          color: "#150845",
                        }}
                        type="number"
                        min={0}
                        max={20}
                        placeholder="1st CA"
                        value={firstCA}
                        onChange={(e) => {
                          setFirstCA(e.target.value);
                        }}
                      />
                      <input
                        style={{
                          width: "10vw",
                          padding: "5px",
                          margin: "3px",
                          borderRadius: "5px",
                          border: "1px solid #150845",
                          color: "#150845",
                        }}
                        type="number"
                        placeholder="2nd CA"
                        value={secondCA}
                        min={0}
                        max={20}
                        onChange={(e) => {
                          setSecondCA(e.target.value);
                        }}
                      />
                      <input
                        style={{
                          width: "10vw",
                          padding: "5px",
                          margin: "3px",
                          borderRadius: "5px",
                          border: "1px solid #150845",
                          color: "#150845",
                        }}
                        type="number"
                        placeholder="Exam"
                        value={exam}
                        min={1}
                        max={60}
                        onChange={(e) => {
                          setExam(e.target.value);
                        }}
                      />
                      <input
                        style={{
                          width: "10vw",
                          padding: "5px",
                          margin: "3px",
                          borderRadius: "5px",
                          border: "1px solid #150845",
                          color: "#150845",
                        }}
                        type="number"
                        placeholder="Total"
                        value={total}
                        min={1}
                        max={100}
                        onChange={""}
                      />
                    </form>
                  </div>
                  <div>
                    {toggle === true ? (
                      <>
                        <img
                          onClick={() => {
                            postScores();
                          }}
                          src={send}
                          alt="upload"
                          height="25px"
                          width="25px"
                        />
                      </>
                    ) : (
                      <>
                        <img
                          onClick={(e) => {
                            _computeTotal(e);
                          }}
                          src={calculator}
                          alt="upload"
                          height="25px"
                          width="25px"
                        />
                      </>
                    )}
                  </div>
                </>
              )}
            </>
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* <img
                src={profilepicture}
                alt="profile"
                height="20px"
                width="20px"
                style={{ borderRadius: "10px" }}
              /> */}
              <span style={{ textTransform: "uppercase" }}>
                {studentname.substring(0, 1)}.{" "}
                {studentname.substring(studentname.indexOf(" ") + 1)}
              </span>
            </div>
            <div style={{ textAlign: "right" }}>
              <span style={{ textAlign: "right" }}>
                <small>1st</small>: {score.firsttest} <small>2nd</small>:{" "}
                {score.secondtest} <small>Exam</small>: {score.exam}{" "}
                <small>Total</small>: {score.tot}
              </span>
            </div>
            <div>👍</div>
          </>
        )}
      </div>
    </>
  );
};
export default Uploads;
