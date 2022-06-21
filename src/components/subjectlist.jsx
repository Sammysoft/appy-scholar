import React from "react";
import styled from "styled-components";
import { subjects } from "../data";

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
  return (
    <>
      <div
        style={{
          padding: "10px",
          width: "90%",
          display: "grid",
          alignItems: "center",
          justifyContent: "space-around",
          gridTemplateColumns: "auto auto",
          gap: "15px",
          height: "70vh",
          borderRadius: "8px",
          boxShadow: "-7px 7px 14px rgba(248, 141, 43, 0.07)",
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <textarea placeholder="Add Subject"></textarea>
        <Button>Add</Button>
      </div>
    </>
  );
};

export default SubjectList;
