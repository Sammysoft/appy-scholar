import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Loader } from "semantic-ui-react";
import Swal from "sweetalert2";
import { api } from "../strings";
import axios from "axios";

const Button = styled.div`
  border-radius: 7px;
  padding: 2vh 10vw;
  color: black;
  background-color: #f2e980;
  margintop: 20vh;
  font-size: 1.5rem;
  font-weight: 500;
`;

const SubjectList = () => {
  const [subject, setSubject] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(Boolean);

  const _addSubject = (e) => {
    setLoading(true);
    const payload = {
      subject,
    };
    axios
      .post(`${api}/subjects/add`, payload)
      .then((res) => {
        console.log(res);
        setLoading(false)
        Swal.fire({
          timer:1000,
          title:"Added",
          text:"You have added a new subject "
        })
      })
      .catch((err) => {
        console.log(err.response);
        Swal.fire({
          title: "Oops",
          text: err.response.data.msg,
        });
      });
  };

  useEffect(() => {
    setLoading(true)
    axios.get(`${api}/subjects`).then((res) => {
      setSubjects(res.data.data);
    });
    setLoading(false)
  }, [subjects]);

  return (
    <>
      {loading === true ? (
        <>
          <div
            style={{
              width: "100%",
              display: "flex",
              height: "60vh",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Loader active inline="centered" />
          </div>
        </>
      ) : (
        <>
          {subjects.length === 0 ? (
            <>
              <div
                style={{
                  width: "100%",
                  height: "70vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                No subjects available yet!
                <br />
                Add a new subject
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  padding: "10px",
                  width: "100%",
                  display: "grid",
                  alignItems: "center",
                  justifyContent: "space-around",
                  gridTemplateColumns: "auto auto",
                  gap: "15px",
                  height: "70vh",
                  borderRadius: "8px",
                  boxShadow: "-7px 7px 14px rgba(248, 141, 43, 0.07)",
                  overflowY:"scroll"
                }}
              >
                {subjects.map((el) => {
                  return (
                    <>
                      <div
                        style={{
                          textAlign: "center",
                          padding: "10px",
                          backgroundColor: "#150845",
                          color: "white",
                          borderRadius: "5px",
                        }}
                      >
                        {el.text}
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          )}
        </>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <textarea
          style={{
            border: "1px solid #150845",
            padding: "5px 5px",
            height: "5vh",
            borderRadius: "5px",
            fontFamily: "Irish Grover",
          }}
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          placeholder="Add Subject"
        ></textarea>
        <select
          style={{
            padding: "5px 5px",
            width: "40%",
            height: "5vh",
            fontFamily: "Irish Grover",
            border: "1px solid #150845",
            borderRadius: "5px",
            backgroundColor: "white",
          }}
          onChange={(e) => {
            setSubject(`${subject} [${e.target.value}]`);
          }}
        >
          <option value={"Jss One"}>Jss One</option>
          <option value="Jss Two">Jss Two</option>
          <option value="Jss Three">Jss Three</option>
          <option value="Sss One">Sss One</option>
          <option value="Sss Two">Sss Two</option>
          <option value="Sss Three">Sss Three</option>
        </select>
      </div>
      <br />
      <Button
        onClick={(e) => {
          _addSubject(e);
        }}
      >
        Add
      </Button>
    </>
  );
};

export default SubjectList;
