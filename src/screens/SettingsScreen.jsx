import React, { useState, useEffect } from "react";
import styled from "styled-components";
import star from "../svg/star.svg";
import send from "../svg/send.svg";

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
  const [toggle, setToggle] = useState("");

  useEffect(() => {
    setToggle(toggle);
  }, [toggle]);

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
                backgroundImage: `url(/images/profile.jpg)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "200px",
                position: "relative",
              }}
            >
              <div
                style={{ position: "absolute", right: "15px", bottom: "10px" }}
              >
                <span
                  style={{
                    color: "white",
                    backgroundColor: "#150845 ",
                    padding: "5px 10px",
                    borderRadius: "8px",
                  }}
                >
                  Change
                </span>
              </div>
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
                  <label>First Name</label>
                  <input
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
                    <option>Married</option>
                    <option>Single</option>
                    <option>Divorced</option>
                    <option>Engaged</option>
                  </select>
                  <label>Gender</label>
                  <select
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
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  <label>Phone Number</label>
                  <input
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
                  <label>Old Password</label>
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
                  />
                  <label>New Password</label>
                  <input
                    type="password"
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
                <div style={{width:"100%"}}>
                  <div style={{height :"25vh"}}>
                  <div
                  onClick={()=>{setToggle("Bio")}}
                    style={{
                      width: "80%",
                      textAlign: "center",
                      padding: "20px",
                      display: "flex",
                      margin:"auto",
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
                  onClick={()=>{setToggle("User")}}
                    style={{
                      width: "80%",
                      textAlign: "center",
                      padding: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      fontSize: "1.5rem",
                      margin:"auto",
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
            <span>
              <img src={send} alt="send" />
            </span>
          </div>
        </div>
      </ScreenWrapper>
    </>
  );
};

export default SettingsScreen;
