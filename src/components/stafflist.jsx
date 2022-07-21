import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AdminBottomNavReg from "../Admin/bottomnavreg";
import leftarrow from "../svg/left-arrow.svg";
import axios from "axios";
import { api } from "../strings";
import Swal from "sweetalert2";

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

const StaffList = () => {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    axios
      .get(`${api}/staffs/get`)
      .then((res) => {
        setStaffs(res.data.data);
      })
      .catch((error) => {
        Swal.fire({
          title: "Oops 😔",
          text: error.response.data.data,
        });
      });
  });
  const navigate = useNavigate();
  return (
    <>
      <ScreenWrapper>
        <div
          style={{
            width: "100%",
            height: "5vh",
            textAlign: "left",
            position: "relative",
            marginTop: "0px",
          }}
        >
          <span onClick={() => navigate(-1)}>
            <img
              style={{ borderRadius: "5px" }}
              src={leftarrow}
              alt="pointer"
            />
          </span>
        </div>

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
          <div>
            <h3 style={{ fontFamily: "Irish Grover" }}>List of Staff</h3>
          </div>
          {staffs.map((staff) => {
            return (
              <>
                <div style={{ width: "100%", margin: "auto" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:"auto auto",
                      justifyContent: "space-around",
                      alignItems: "flex-start",
                      width: "100%",
                      textAlign: "left",
                      borderRadius: "7px",
                      padding: "5px",
                      boxShadow: "-7px 7px 14px rgba(248, 141, 43, 0.07)",
                    }}
                  >
                    <div style={{width: "100%"}}>
                    <img
                      style={{ borderRadius: "5px" }}
                      src={staff.profilepicture}
                      alt="profile"
                      height="200px"
                      width="150px"
                    />
                    </div>
                    <div style={{width:"100%"}}>
                    <p>
                      <h3 style={{ fontFamily: "Irish Grover", textTransform: "uppercase", textAlign:"right" }}>
                        {staff.firstname} {staff.lastname}
                      </h3>
                      <ul>
                        <li>{staff.role}</li>
                        <li>{staff.email}</li>
                        <li>{staff.phonenumber}</li>
                        <li>Subjects</li>
                        <ul>
                          {staff.subjects.map((sub) => {
                            return (
                              <>
                                <li>{sub}</li>
                              </>
                            );
                          })}
                        </ul>
                      </ul>
                    </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <AdminBottomNavReg route="/admin/staff" />
        </div>
      </ScreenWrapper>
    </>
  );
};

export default StaffList;
