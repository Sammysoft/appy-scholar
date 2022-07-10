import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import star from "../svg/star.svg";
import {
  Junior,
  Science,
  ScienceElect,
  Arts,
  ArtsElect,
  Commerce,
  CommerceElect,
} from "../data";

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

const OnboardForm = () => {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  // const [subject, setSubjects] = useState({ selectedSubjects: [] });
  // const [togglePage, setTogglePage] = useState(false);
  // const [subjects, setSubject] = useState([]);
  const [gender, setGender] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [showSubject, setShowSubject] = useState(Boolean);
  const [subjectCategory, setSubjectCategory] = useState([]);
  const [subjectElectives, setSubjectElectives] = useState([]);
  const [subjects, setSubjects] = useState({ selectedSubjects: [] });
  const [category, setCategory] = useState("");
  const [selectableDrawer, setSelectableDrawer] = useState(false);
  const [toggleElectives, setToggleElectives] = useState(false);

  let coreSubjects = [];
  coreSubjects.push(subjectCategory);

  const { selectedSubjects } = subjects;

  const _signUp = (e) => {
    e.preventDefault();

    const payload = {
      firstname,
      lastname,
      gender,
      studentClass,
    };

    console.log(payload);
    navigate(-1);
  };

  return (
    <>
      {toggleElectives === true ? (
        <>
          <div
            style={{
              position: "absolute",
              bottom: "-20px",
              width: "100%",
              left: "0px",
              backgroundColor: "#dbb921",
              borderTopRight: "8px",
              borderTopLeft: "8px",
              height: "30vh",
              borderTopLeftRadius: "30px",
              borderTopRightRadius: "30px",
              display: "grid",
              gridTemplateColumns: "auto auto",
              padding: "15px",
              gap: "10px",
            }}
          >
            <span>{category}</span>
            <span>Electives</span>
            {subjectElectives.map((electives) => {
              return (
                <>
                  <div
                    onClick={() => {
                      setSubjects({
                        selectedSubjects: [...selectedSubjects, electives],
                      });
                    }}
                    style={{
                      backgroundColor: "#150845",
                      color: "white",
                      padding: "5px 10px",
                      height: "fit-content",
                    }}
                  >
                    {electives}
                  </div>
                </>
              );
            })}
          </div>
        </>
      ) : (
        <></>
      )}
      <div>
        {/* <Button
            onClick={(e) => {
              _signUp(e);
            }}
          >
            Done
          </Button> */}
        {selectableDrawer === true ? (
          <>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "space-around",
                height: "90vh",
              }}
            >
              <span>
                <img src={star} alt="star" height="14" width="14" />
                <img src={star} alt="star" height="14" width="14" />
                <img src={star} alt="star" height="14" width="14" />
              </span>
              <span
                style={{
                  fontWeight: "800",
                  fontSize: "1rem",
                  color: "#150845",
                }}
              >
                Core {category} Subjects
              </span>
              <div style={{ height: "80vh", overflowY: "scroll" }}>
                {selectedSubjects.map((subject) => {
                  return (
                    <>
                      <div
                        style={{
                          backgroundColor: "#150845",
                          color: "white",
                          padding: "5px 10px",
                          margin: "5px",
                          borderRadius: "6px",
                        }}
                      >
                        {subject}
                      </div>
                    </>
                  );
                })}
                {console.log(selectedSubjects)}
              </div>
                <span
                onClick={()=>{setSelectableDrawer(false)}}
                  style={{
                    backgroundColor: "#150845",
                    color: "white",
                    padding: "10px 15px",
                    fontWeight: "600",
                    fontSize: "1rem",
                    marginBottom:"10vh"
                  }}
                >
                  Go Back
                </span>
              <div
                onClick={() => {
                  setToggleElectives(!toggleElectives);
                }}
                style={{
                  position: "absolute",
                  padding: "5px 10px",
                  bottom: "5px",
                  right: "0px",
                  color: "white",
                  backgroundColor: "#150845",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                }}
              >
                {category} Electives
              </div>
              <Button
                onClick={() => {
                  _signUp();
                }}
              >
                Done
              </Button>
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
              <span
                style={{
                  fontWeight: "800",
                  fontSize: "1.5rem",
                  color: "#150845",
                }}
              >
                Bio Data Form
              </span>
              <div
                style={{
                  width: "65%",
                  height: "25vh",
                  position: "relative",
                  borderRadius: "50%",
                  backgroundImage: `url(/images/profile.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                  margin: "auto",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    backgroundColor: "#150845",
                    padding: "5px 10px",
                    color: "white",
                    fontFamily: "Irish Grover",
                    borderRadius: "7px",
                    bottom: "10px",
                    right: "-5px",
                  }}
                >
                  Add Picture
                </span>
              </div>
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
                placeholder="Student name"
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
                Class
              </label>
              <select
                onChange={(e) => {
                  setStudentClass(e.target.value);
                  if (
                    e.target.value === "Jss One" ||
                    e.target.value === "Jss Two" ||
                    e.target.value === "Jss Three"
                  ) {
                    setShowSubject(false);
                  } else {
                    setShowSubject(true);
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
                <option value="Jss One">JssOne</option>
                <option value="Jss Two">JssTwo</option>
                <option value="Jss Three">JssThree</option>
                <option value="Sss One">SssOne</option>
                <option value="Sss Two">SssTwo</option>
                <option value="Sss Three">SssThree</option>
              </select>
              {showSubject === true ? (
                <>
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
                    Specialization
                  </label>
                  <select
                    onClick={(e) => {
                      if (e.target.value === "Arts") {
                        setSubjectCategory(Arts);
                        setSubjectElectives(ArtsElect);
                        setCategory("Arts");
                        setSubjects({ selectedSubjects: Arts });
                        console.log(Arts);
                      } else if (e.target.value === "Science") {
                        setSubjectCategory(Science);
                        setSubjectElectives(ScienceElect);
                        setCategory("Science");
                        setSubjects({ selectedSubjects: Science });
                        console.log(Science);
                      } else if (e.target.value === "Commerce") {
                        setSubjectCategory(Commerce);
                        setSubjectElectives(CommerceElect);
                        setCategory("Commerce");
                        setSubjects({ selectedSubjects: Commerce });
                        console.log(Commerce);
                      } else {
                        setSubjectCategory(Junior);
                        console.log(Junior);
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
                    <option value="Arts">Arts</option>
                    <option value="Science">Science</option>
                    <option value="Commerce">Commerce</option>
                  </select>
                  <span
                    onClick={() => {
                      setSelectableDrawer(true);
                    }}
                    style={{
                      padding: "10px  10px",
                      fontSize: "1.5rem",
                      color: "white",
                      backgroundColor: "#150845",
                    }}
                  >
                    Pick Subjects
                  </span>
                </>
              ) : (
                <></>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default OnboardForm;
