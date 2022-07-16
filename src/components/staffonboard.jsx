/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { api } from "../strings";
import close from "../svg/close.svg";
import Swal from "sweetalert2";

const Button = styled.span`
  border-radius: 7px;
  padding: 2vh 10vw;
  color: #150845;
  background-color: #dbb921;
  margintop: 20vh;
  font-size: 1.5rem;
  font-weight: 500;
  width: 100%;
  text-align: center;
`;

const StaffOnboardForm = () => {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [showClass, setShowClass] = useState(false);
  const [classRole, setClassRole] = useState("");
  let [counter, setCounter] = useState(0);
  const [role, setRole] = useState("");
  const [subject, setSubjects] = useState({ selectedSubjects: [] });
  const [togglePage, setTogglePage] = useState(false);
  const [subjects, setSubject] = useState([]);
  const [tempSub, setTempSub] = useState("");

  const { selectedSubjects } = subject;

  const _signUp = (e) => {
    e.preventDefault();

    const payload = {
      firstname,
      lastname,
      gender,
      subjects: selectedSubjects,
      role,
      email,
      classRole,
      phonenumber
    };
    axios
      .post(`${api}/staffs/add`, payload)
      .then((res) => {
        navigate("/admin/staff/list");
        console.log(res);
      })
      .catch((error) => {
        Swal.fire({
          title: "Oops 😞",
          text: error.response.data.msg,
        });
      });
  };

  useEffect(() => {
    axios
      .get(`${api}/subject`)
      .then((res) => {
        setSubject(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        Swal.fire({
          title: "Oops 😞",
          text: error.response.data.msg,
        });
      });
  }, []);

  const pickSubject = (el) => {};
  const pickCount = (element) => {
    setCounter((counter += 1));
    console.log(element);
    if (counter % 2 === 1) {
      console.log("picked");
      pickSubject();
    } else {
      console.log("unpicked");
    }
  };

  return (
    <>
      <div>
        {togglePage === false ? (
          <>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "space-around",
              }}
            >
              <span
                style={{
                  fontWeight: "800",
                  fontSize: "1.5rem",
                  color: "#150845",
                }}
              >
                Bio Data Form
              </span>
              <label
                style={{
                  fontFamily: "Irish Grover",
                  textAlign: "left",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#150845",
                  paddingTop: "10px",
                }}
              >
                First Name
              </label>
              <input
                value={firstname}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                placeholder="Your name"
                style={{
                  fontFamily: "Irish Grover",
                  border: "1px solid #150845",
                  padding: "5px 5px",
                  width: "100%",
                  height: "7vh",
                  fontSize: "1.5rem",
                  borderRadius: "5px",
                  margin: "5px 0px",
                  color: "#150845",
                }}
              />
              <label
                style={{
                  fontFamily: "Irish Grover",
                  textAlign: "left",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#150845",
                  paddingTop: "10px",
                }}
              >
                Last Name
              </label>
              <input
                value={lastname}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                placeholder="Surname"
                style={{
                  fontFamily: "Irish Grover",
                  border: "1px solid #150845",
                  padding: "5px 5px",
                  width: "100%",
                  height: "7vh",
                  borderRadius: "5px",
                  margin: "5px 0px",
                  fontSize: "1.5rem",
                  color: "#150845",
                }}
              />
              <label
                style={{
                  fontFamily: "Irish Grover",
                  textAlign: "left",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#150845",
                  paddingTop: "10px",
                }}
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="name@gmail.com"
                style={{
                  fontFamily: "Irish Grover",
                  border: "1px solid #150845",
                  padding: "5px 5px",
                  width: "100%",
                  height: "7vh",
                  borderRadius: "5px",
                  margin: "5px 0px",
                  fontSize: "1.5rem",
                  color: "#150845",
                }}
              />
              <label
                style={{
                  fontFamily: "Irish Grover",
                  textAlign: "left",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#150845",
                  paddingTop: "10px",
                }}
              >
                Phone Number
              </label>
              <input
                value={phonenumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                type="text"
                placeholder="[+234] 901 234 5670"
                style={{
                  fontFamily: "Irish Grover",
                  border: "1px solid #150845",
                  padding: "5px 5px",
                  width: "100%",
                  height: "7vh",
                  borderRadius: "5px",
                  fontSize: "1.5rem",
                  margin: "5px 0px",
                  color: "#150845",
                }}
              />
              <label
                style={{
                  fontFamily: "Irish Grover",
                  textAlign: "left",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#150845",
                  paddingTop: "10px",
                }}
              >
                Gender
              </label>
              <select
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                style={{
                  fontFamily: "Irish Grover",
                  border: "1px solid #150845",
                  padding: "5px 5px",
                  width: "100%",
                  height: "7vh",
                  borderRadius: "5px",
                  fontSize: "1.5rem",
                  margin: "5px 0px",
                  color: "#150845",
                  backgroundColor: "white",
                }}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <label
                style={{
                  fontFamily: "Irish Grover",
                  textAlign: "left",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#150845",
                  paddingTop: "10px",
                }}
              >
                Role
              </label>
              <select
                onChange={(e) => {
                  setRole(e.target.value);
                  if (e.target.value === "Class Master") {
                    setRole("Class Master")
                    setShowClass(true);
                  } else if (e.target.value === "Staff") {
                    setRole("Staff")
                    setShowClass(false);
                  }
                }}
                style={{
                  fontFamily: "Irish Grover",
                  border: "1px solid #150845",
                  padding: "5px 5px",
                  width: "100%",
                  height: "7vh",
                  borderRadius: "5px",
                  fontSize: "1.5rem",
                  margin: "5px 0px",
                  color: "#150845",
                  backgroundColor: "white",
                }}
              >
                <option value="Staff">Staff</option>
                <option value="Class Master">Class Master</option>
              </select>
              {showClass === true ? (
                <>
                  <select
                    style={{
                      fontFamily: "Irish Grover",
                      border: "1px solid #150845",
                      padding: "5px 5px",
                      width: "100%",
                      height: "7vh",
                      borderRadius: "5px",
                      fontSize: "1.5rem",
                      margin: "5px 0px",
                      color: "#150845",
                      backgroundColor: "white",
                    }}
                    placeholder="Class"
                    onChange={(e) => {
                      setClassRole(e.target.value);
                      setRole(`Class Master [${e.target.value}]`);
                      setShowClass(false);
                    }}
                  >
                    <option value="Jss One">Jss One</option>
                    <option value="Jss Two">Jss Two</option>
                    <option value="Jss Three">Jss Three</option>
                    <option value="Sss One">Sss One</option>
                    <option value="Sss Two">Sss Two</option>
                    <option value="Sss Three">Sss Three</option>
                  </select>
                </>
              ) : (
                <></>
              )}
              <div
                onClick={() => {
                  setTogglePage(!togglePage);
                }}
                style={{
                  fontFamily: "Irish Grover",
                  color: "white",
                  backgroundColor: "#150845",
                  padding: "5px 10px",
                  textAlign: "center",
                  width: "50%",
                  margin: "auto",
                }}
              >
                Next
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "space-around",
              }}
            >
              <span style={{ fontWeight: "800", fontSize: "1.5rem" }}>
                Available Subjects
              </span>
              <div
                style={{
                  width: "100%",
                  height: "30vh",
                  overflowY: "scroll",
                }}
              >
                {subjects.map((el) => {
                  return (
                    <>
                      <div
                        onClick={() => {
                          pickCount(el.text);
                          setTempSub(el.text);
                        }}
                        style={{
                          fontFamily: "Irish Grover",
                          color: "white",
                          backgroundColor: "#150845",
                          padding: "5px 10px",
                          textAlign: "center",
                          margin: "10px",
                          borderRadius: "5px",
                        }}
                      >
                        {el.text}
                      </div>
                    </>
                  );
                })}
              </div>
              <div
                style={{ height: "30vh", width: "100%", overflowY: "scroll" }}
              >
                <span style={{ fontWeight: "800", fontSize: "1.5rem" }}>
                  Selected Subjects
                </span>
                <div>
                  {selectedSubjects.map((el) => {
                    return (
                      <>
                        <div
                          style={{
                            fontFamily: "Irish Grover",
                            color: "white",
                            backgroundColor: "#dbb921",
                            padding: "5px 10px",
                            textAlign: "center",
                            margin: "10px",
                            color: "#150845",
                            borderRadius: "5px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                          }}
                        >
                          <span>{el}</span>
                          <span>
                            <img
                              src={close}
                              alt="close"
                              height="16"
                              width="16"
                              onClick={() => {
                                setSubjects({
                                  selectedSubjects: selectedSubjects.filter(
                                    function (value) {
                                      return value !== el;
                                    }
                                  ),
                                });
                              }}
                            />
                          </span>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto",
                  gap: "5px",
                }}
              >
                <input
                  value={tempSub}
                  type="text"
                  placeholder="Subject"
                  style={{
                    fontFamily: "Irish Grover",
                    border: "1px solid #150845",
                    padding: "5px 5px",
                    height: "7vh",
                    borderRadius: "5px",
                    fontSize: "1.5rem",
                    margin: "5px 0px",
                    color: "#150845",
                    backgroundColor: "white",
                  }}
                />
                <select
                  style={{
                    fontFamily: "Irish Grover",
                    border: "1px solid #150845",
                    padding: "5px 5px",
                    height: "7vh",
                    borderRadius: "5px",
                    fontSize: "1.5rem",
                    margin: "5px 0px",
                    color: "#150845",
                    backgroundColor: "white",
                  }}
                  onChange={(e) => setTempSub(`${tempSub} [${e.target.value}]`)}
                >
                  <option value="Class">Class</option>
                  <option value="Jss One">Jss One</option>
                  <option value="Jss Two">Jss Two</option>
                  <option value="Jss Three">Jss Three</option>
                  <option value="Sss One">Sss One</option>
                  <option value="Sss Two">Sss Two</option>
                  <option value="Sss Three">Sss Three</option>
                </select>
                <span
                  onClick={() => {
                    setSubjects({
                      selectedSubjects: [...selectedSubjects, tempSub ],
                    });
                    setTempSub("")
                  }}
                  style={{
                    color: "white",
                    backgroundColor: "#150845",
                    width: "fit-content",
                    padding: "10px",
                  }}
                >
                  Okay
                </span>
              </div>
              <br />
              <div
                onClick={() => {
                  setTogglePage(!togglePage);
                }}
                style={{
                  fontFamily: "Irish Grover",
                  color: "white",
                  backgroundColor: "#150845",
                  padding: "5px 10px",
                  textAlign: "center",
                  width: "50%",
                  margin: "auto",
                }}
              >
                Back
              </div>
              <br />
              <br />
              <br />
              <br />
              <Button
                onClick={(e) => {
                  _signUp(e);
                }}
              >
                Done
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default StaffOnboardForm;
