/* eslint-disable */

import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import axios from "axios"
import DatePicker from "react-datepicker";
import styled from "styled-components";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import star from "../svg/star.svg";
import { api } from "./../strings";
import {
  Junior,
  Science,
  ScienceElect,
  Arts,
  ArtsElect,
  Commerce,
  CommerceElect,
} from "../data";
import { storage } from "../firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";

import { v4 } from "uuid";

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
  const pick = useRef("");

  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [imageLoad, setImageLoad] = useState(false);
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [gender, setGender] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [showSubject, setShowSubject] = useState(Boolean);
  const [subjectCategory, setSubjectCategory] = useState([]);
  const [subjectElectives, setSubjectElectives] = useState([]);
  const [picture, setPicture] = useState("/images/profile.jpg");
  const [subjects, setSubjects] = useState({ selectedSubjects: [] });
  const [category, setCategory] = useState("");
  const [selectableDrawer, setSelectableDrawer] = useState(false);
  const [toggleElectives, setToggleElectives] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [pickFile, setPickFile] = useState(null);

  let coreSubjects = [];
  coreSubjects.push(subjectCategory);

  const { selectedSubjects } = subjects;

  const _signUp = (e) => {
    e.preventDefault();

    const payload = {
      firstname,
      lastname,
      email,
      gender,
      studentClass,
      dateofbirth: startDate,
      profilePicture,
      subjects:selectedSubjects,
      phonenumber
    };

    console.log(payload);
    axios.post(`${api}/students/add`, payload).then((res)=>{
      let studentID = res.data.data._id
      axios.post(`${api}/subjects/add`, {firstname, lastname, subjects, studentID}).then((res=>{
        Swal.fire({
          title: "Fully registered  👍",
          text: res.data.data
        })
        navigate("/master/students");
      })).catch(error=>{
        Swal.fire({
          title:"Oops 😥",
          text: error.response.data.data
        })
      })
    }).catch(error=>{
      Swal.fire({
        title: "Oops 😥",
        text: error.response.data.data
      })
    })

  };

  const uploadFile = () => {
    setImageLoad(true);
    if (pickFile == null) {
      return null;
    } else {
      const imageRef = ref(getStorage(), `images/${pickFile.name + v4()}`);
      const uploadTask = uploadBytesResumable(imageRef, pickFile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          alert("Sorry, upload denied at the moment, Please try again later!");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            Swal.fire({
              text: "Successfully uploaded image to the cloud!",
              title: "Image uploaded 👍",
              timmer: 1500,
              position: "top-right",
            });
            setPicture(downloadURL);
            setProfilePicture(downloadURL);
            setImageLoad(false);
          });
        }
      );
    }
  };

  const handlePictureChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPicture(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
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
              </div>
              <span
                onClick={() => {
                  setSelectableDrawer(false);
                }}
                style={{
                  backgroundColor: "#150845",
                  color: "white",
                  padding: "10px 15px",
                  fontWeight: "600",
                  fontSize: "1rem",
                  marginBottom: "10vh",
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
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "auto",
                }}
              >
                {imageLoad === true ? (
                  <>
                    <Loader active inline="centered" />
                  </>
                ) : (
                  <>
                    <img
                      src={picture}
                      alt="profile"
                      height="100%"
                      width="100%"
                      style={{
                        borderRadius: "50%",
                        border: "4px solid #150845",
                        padding: "0px",
                      }}
                    />

                    {picture === "/images/profile.jpg" ? (
                      <>
                        <span
                          onClick={() => {
                            pick.current.click();
                          }}
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
                      </>
                    ) : (
                      <>
                        <span
                          onClick={() => {
                            uploadFile();
                          }}
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
                          Upload
                        </span>
                        <span
                          onClick={() => {
                            pick.current.click();
                          }}
                          style={{
                            position: "absolute",
                            backgroundColor: "#150845",
                            padding: "5px 10px",
                            color: "white",
                            fontFamily: "Irish Grover",
                            borderRadius: "7px",
                            bottom: "10px",
                            left: "-5px",
                          }}
                        >
                          Change
                        </span>
                      </>
                    )}
                  </>
                )}
                <input
                  onChange={(e) => {
                    handlePictureChange(e);
                    setPickFile(e.target.files[0]);
                  }}
                  ref={pick}
                  style={{ display: "none" }}
                  type="file"
                  accept="image/*"
                />
              </div>
              <label
                style={{
                  display:"none",
                  fontFamily: "Irish Grover",
                  textAlign: "left",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#150845",
                  paddingTop: "10px",
                }}
              >
                Image Url
              </label>
              <input
                style={{
                  display:"none",
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
                type="text"
                placeholder="Image URL"
                value={profilePicture}
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
                Date Of Birth
              </label>
              <style>
                {`.date-picker input {
               width: 100%;
               padding: 15px;
               border: 1px solid #150845;
               border-radius: 5px;
               font-family: Irish Grover;
               font-size: 1.5rem;
               color: #150845;
                 }`}
              </style>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                wrapperClassName="date-picker"
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
                placeholder="Gender"
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
                <option value="Gender">Gender</option>
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
                placeholder="Class"
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
                <option value="Class">Class</option>
                <option value="Jss One">Jss One</option>
                <option value="Jss Two">Jss Two</option>
                <option value="Jss Three">Jss Three</option>
                <option value="Sss One">Sss One</option>
                <option value="Sss Two">Sss Two</option>
                <option value="Sss Three">Sss Three</option>
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

                      } else if (e.target.value === "Science") {
                        setSubjectCategory(Science);
                        setSubjectElectives(ScienceElect);
                        setCategory("Science");
                        setSubjects({ selectedSubjects: Science });

                      } else if (e.target.value === "Commerce") {
                        setSubjectCategory(Commerce);
                        setSubjectElectives(CommerceElect);
                        setCategory("Commerce");
                        setSubjects({ selectedSubjects: Commerce });

                      } else {
                        setSubjectCategory(Junior);

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

export default OnboardForm;
