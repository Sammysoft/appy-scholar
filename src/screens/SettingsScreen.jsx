/* eslint-disable */

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import Swal from "sweetalert2";
import star from "../svg/star.svg";
import send from "../svg/send.svg";
import { storage } from "../firebase";
import axios from "axios";
import { api } from "../strings";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";

import { v4 } from "uuid";
import { Navigate } from "react-router-dom";

const ScreenWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
`;

const SettingsScreen = () => {
  const pick = useRef("");
  const [toggle, setToggle] = useState("");
  const [password, setPassword] = useState(null);
  const [confirmpassword, setConfirmPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const [phonenumber, setPhonenumber] = useState();
  const [picture, setPicture] = useState("/images/profile.jpg");
  const [firstname, setFirstname] = useState("");
  const [maritalstatus, setMaritalStatus] = useState("");
  const [gender, setGender] = useState("");
  const [profilepicture, setProfilePicture] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [pickFile, setPickFile] = useState(null);
  const [imageLoad, setImageLoad] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const id = window.location.pathname.slice(-24);
  const Navigate = useNavigate();

  useEffect(() => {
    setToggle("User");
  }, []);

  const uploadFile = () => {
    setImageLoad(true);
    if (pickFile == null) {
      return null;
    } else {
      const imageRef = ref(getStorage(), `staffs/${pickFile.name + v4()}`);
      const uploadTask = uploadBytesResumable(imageRef, pickFile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + Math.round(progress) + "% done");
          setUploadStatus(`Uploading ${Math.round(progress)}% done`);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              setUploadStatus("Upload Paused");
              break;
            case "running":
              console.log("Upload is running");
              // setUploadStatus("Uploading...");
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

  const _checkPassword = (pass1, pass2) => {
    setLoading(true);
    if (pass1 !== pass2) {
      Swal.fire({
        title: "Password Mismatch 😒",
        text: "Make sure your password is the same",
      });
      setToggle("User");
    } else if ((pass1 === pass2 && pass1 !== null) || username !== null) {
      const payload = {
        username,
        password,
        profilepicture,
        gender,
        firstname,
        lastname,
        maritalstatus,
        email,
      };
      console.log(payload);

      axios
        .post(`${api}/staffs/update/${id}`, payload)
        .then((res) => {
          Navigate("/auth");
          Swal.fire({
            title: `Welcome onboard ${res.data.data.username} 🎊🎊`,
            text: "Enjoy the best of your time 🤗🤗🤗",
          });
        })
        .catch((error) => {
          Swal.fire({
            title: "Oops 😞",
            text: error.response.data.data,
          });
        });
    }
  };

  return (
    <>
      <ScreenWrapper>
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
          <div
            style={{
              width: "100vw",
              backgroundImage: `url("/images/background.jpg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "30vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <h3 style={{ fontFamily: "Irish Grover", color: "white" }}>
                Account Settings
              </h3>
            </div>
            <div
              style={{
                width: "200px",
                height: "200px",
                position: "relative",
                borderRadius: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
              }}
            >
              {imageLoad === true ? (
                <>
                  <div>
                    <Loader active inline="centered" />
                    <span style={{ opacity: 0.9, color: "white" }}>
                      {uploadStatus}
                    </span>
                  </div>
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
                        Change Picture
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
          </div>
          <div
            style={{
              height: "50vh",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              overflowY: "scroll",
              margin: "10vh 0px",
              position: "relative",
              alignItems: "left",
            }}
          >
            {toggle === "Bio" ? (
              <>
                <div
                  style={{
                    width: "60%",
                    margin: "auto",
                    textAlign: "left",
                    color: "#150845",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      textAlign: "center",
                      padding: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      fontSize: "1.5rem",
                    }}
                  >
                    <span>
                      <img src={star} alt="star" height="20" />
                    </span>
                    <span>Bio Settings</span>
                    <span>
                      <img src={star} alt="star" height="20" />
                    </span>
                  </div>
                  <input
                    type="text"
                    value={profilepicture}
                    style={{ display: "none" }}
                  />
                  <label>First Name</label>
                  <input
                    value={firstname}
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                    type="text"
                    placeholder="First Name"
                    style={{
                      padding: "15px",
                      border: "2px solid #150845",
                      borderRadius: "5px",
                      fontFamily: "Irish Grover",
                      marginBottom: "5vh",
                      color: "#150845",
                    }}
                  />
                  <label>Last Name</label>
                  <input
                    value={lastname}
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                    type="text"
                    placeholder="Last Name"
                    style={{
                      padding: "15px",
                      border: "2px solid #150845",
                      borderRadius: "5px",
                      fontFamily: "Irish Grover",
                      marginBottom: "5vh",
                      color: "#150845",
                    }}
                  />
                  <label>Marital Status</label>
                  <select
                    value={maritalstatus}
                    onChange={(e) => {
                      setMaritalStatus(e.target.value);
                    }}
                    style={{
                      padding: "15px",
                      border: "2px solid #150845",
                      borderRadius: "5px",
                      fontFamily: "Irish Grover",
                      marginBottom: "5vh",
                      color: "#150845",
                      backgroundColor: "white",
                    }}
                  >
                    <option value="Married">Married</option>
                    <option value="Single">Single</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Engaged">Engaged</option>
                  </select>
                  <label>Gender</label>
                  <select
                    value={gender}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                    style={{
                      padding: "15px",
                      border: "2px solid #150845",
                      borderRadius: "5px",
                      fontFamily: "Irish Grover",
                      marginBottom: "5vh",
                      color: "#150845",
                      backgroundColor: "white",
                    }}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <label>Phone Number</label>
                  <input
                    value={phonenumber}
                    onChange={(e) => {
                      setPhonenumber(e.target.value);
                    }}
                    type="text"
                    placeholder="+234 90 123 456 78"
                    style={{
                      padding: "15px",
                      border: "2px solid #150845",
                      borderRadius: "5px",
                      fontFamily: "Irish Grover",
                      marginBottom: "5vh",
                      color: "#150845",
                    }}
                  />
                  <label>Email</label>
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="text"
                    placeholder="name@gmail.com"
                    style={{
                      padding: "15px",
                      border: "2px solid #150845",
                      borderRadius: "5px",
                      fontFamily: "Irish Grover",
                      marginBottom: "5vh",
                      color: "#150845",
                    }}
                  />
                  <div style={{ width: "100%", textAlign: "center" }}>
                    <span
                      onClick={() => {
                        setToggle(null);
                      }}
                      style={{
                        color: "white",
                        backgroundColor: "#150845",
                        padding: "5px 10px",
                      }}
                    >
                      Back
                    </span>
                  </div>
                </div>
              </>
            ) : toggle === "User" ? (
              <>
                {" "}
                <div
                  style={{
                    width: "60%",
                    margin: "auto",
                    textAlign: "left",
                    color: "#150845",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      textAlign: "center",
                      padding: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      fontSize: "1.5rem",
                    }}
                  >
                    <span>
                      <img src={star} alt="star" height="20" />
                    </span>
                    <span>User Settings</span>
                    <span>
                      <img src={star} alt="star" height="20" />
                    </span>
                  </div>
                  <label>User Name</label>
                  <input
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    type="text"
                    placeholder="Username"
                    style={{
                      padding: "15px",
                      border: "2px solid #150845",
                      borderRadius: "5px",
                      fontFamily: "Irish Grover",
                      marginBottom: "5vh",
                      color: "#150845",
                    }}
                  />
                  {/* <label>Old Password</label>
                  <input
                    type="password"
                    placeholder="Secret"
                    style={{
                      padding: "15px",
                      border: "2px solid #150845",
                      borderRadius: "5px",
                      fontFamily: "Irish Grover",
                      marginBottom: "5vh",
                      color: "#150845",
                    }}
                  /> */}
                  <label>New Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="New Secret"
                    style={{
                      padding: "15px",
                      border: "2px solid #150845",
                      borderRadius: "5px",
                      fontFamily: "Irish Grover",
                      marginBottom: "5vh",
                      color: "#150845",
                    }}
                  />
                  <label>Confirm Password</label>
                  <input
                    value={confirmpassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                    type="password"
                    placeholder="Confirm New Secret"
                    style={{
                      padding: "15px",
                      border: "2px solid #150845",
                      borderRadius: "5px",
                      fontFamily: "Irish Grover",
                      marginBottom: "5vh",
                      color: "#150845",
                    }}
                  />
                  <div style={{ width: "100%", textAlign: "center" }}>
                    <span
                      onClick={() => {
                        setToggle(null);
                      }}
                      style={{
                        color: "white",
                        backgroundColor: "#150845",
                        padding: "5px 10px",
                      }}
                    >
                      Back
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div style={{ width: "100%" }}>
                  <div style={{ height: "25vh" }}>
                    <div
                      onClick={() => {
                        setToggle("Bio");
                      }}
                      style={{
                        width: "80%",
                        textAlign: "center",
                        padding: "20px",
                        display: "flex",
                        margin: "auto",
                        alignItems: "center",
                        justifyContent: "space-around",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        borderRadius: "8px",
                      }}
                    >
                      <span>
                        <img src={star} alt="star" height="20" />
                      </span>
                      <span>Bio Settings</span>
                      <span>
                        <img src={star} alt="star" height="20" />
                      </span>
                    </div>
                  </div>
                  <div>
                    <div
                      onClick={() => {
                        setToggle("User");
                      }}
                      style={{
                        width: "80%",
                        textAlign: "center",
                        padding: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        fontSize: "1.5rem",
                        margin: "auto",
                        cursor: "pointer",
                        borderRadius: "8px",
                      }}
                    >
                      <span>
                        <img src={star} alt="star" height="20" />
                      </span>
                      <span>User Settings</span>
                      <span>
                        <img src={star} alt="star" height="20" />
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div
            style={{
              width: "40px",
              height: "40px",
              padding: "40px",
              borderRadius: "50%",
              position: "fixed",
              bottom: "5px",
              display: "flex",
              justifyContent: "center",
              right: "5px",
              backgroundColor: "#dbb921",
              alignItems: "center",
            }}
          >
            <span
              onClick={() => {
                _checkPassword(password, confirmpassword);
              }}
            >
              <img src={send} alt="send" />
            </span>
          </div>
        </div>
      </ScreenWrapper>
    </>
  );
};

export default SettingsScreen;
