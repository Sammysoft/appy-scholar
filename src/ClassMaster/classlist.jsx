import React, { useState, useEffect, useContext } from "react";
import pen from "../svg/pen.svg";
import axios from "axios";
import Swal from "sweetalert2";
import { api } from "../strings";
import { LoginContext } from "../loginContext";

const ClassList = () => {
  const { user } = useContext(LoginContext);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .post(`${api}/students/class`, { data: user.classRole })
      .then((res) => {
        console.log(res.data.data);
        setStudents(res.data.data);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Oops 😥",
          text: "",
        });
      });
  }, [user.classRole]);

  const _findAge = (dateofbirth) => {
    let date = new Date(dateofbirth).getFullYear();
    let currentYear = new Date().getFullYear();
    return Number(currentYear) - Number(date);
  };

  return (
    <>
      <div style={{ marginBottom: "10vh" }}>
        <div style={{ width: "100%", margin: "auto" }}>
          {students.length === 0 ? (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  textAlign: "center",
                  padding: "5px",
                  height: "90vh",
                }}
              >
                No Students Yet!
              </div>
            </>
          ) : (
            <>
              {students.map((stud) => {
                return (
                  <>
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
                        src={stud.profilePicture}
                        alt="profile"
                        height="100px"
                        width="100px"
                      />
                      <p>
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <p style={{ textTransform: "uppercase" }}>
                            {stud.firstname} {stud.lastname}
                          </p>{" "}
                          <img src={pen} alt="pen" height="20px" />
                        </div>
                        <ul>
                          <li>{stud.studentClass}</li>
                          <li>+234{stud.phonenumber}</li>
                          <li>{stud.post}</li>
                          <li>{_findAge(stud.dateofbirth)} years old</li>
                        </ul>
                      </p>
                    </div>
                    <div
                      style={{
                        position: "fixed",
                        padding: "10px",
                        backgroundColor: "#150845",
                        color: "white",
                        top: "1vh",
                        zIndex: 1,
                        right: "-5px",
                        borderRadius:"5px",
                      }}
                    >
                      <span style={{color: "#dbb921", fontSize: "1.5rem"}}>{students.length}</span> Students
                    </div>
                  </>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ClassList;
