import React from "react";
import styled from "styled-components";
import download from "../svg/download.svg";

const Button = styled.span`
  border-radius: 7px;
  padding: 10px 15px;
  color: #150845;
  background-color: #dbb921;
  width: fit-content;
  margin: 10px;
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const OneClass = () => {
  return (
    <>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            columnGap: "50px",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/images/profile.jpg"
            height="50px"
            width="50px"
            alt="profile"
            style={{ borderRadius: "10px", padding: "5px" }}
          />
          <span>Joshua Makindele</span>
        </div>
        <div style={{ display: "block" }}>
          <span>Results</span>
          <table style={{ width: "100%" }}>
            <thead>
              <th>Subject</th>
              <th>1st CA</th>
              <th>2nd CA</th>
              <th>Exam</th>
              <th>Total</th>
              <th>Grade</th>
            </thead>
            <tbody>
              <tr>
                <td>Maths</td>
                <td>20</td>
                <td>20</td>
                <td>56</td>
                <td>96</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Eng</td>
                <td>20</td>
                <td>20</td>
                <td>56</td>
                <td>96</td>
                <td>A</td>
              </tr>
              <tr>
                <td>B.Sci</td>
                <td>20</td>
                <td>20</td>
                <td>56</td>
                <td>96</td>
                <td>A</td>
              </tr>
              <tr>
                <td>B.Tech</td>
                <td>20</td>
                <td>20</td>
                <td>56</td>
                <td>96</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Agric</td>
                <td>20</td>
                <td>20</td>
                <td>56</td>
                <td>96</td>
                <td>A</td>
              </tr>
              <tr>
                <td>S.Stu</td>
                <td>20</td>
                <td>20</td>
                <td>56</td>
                <td>96</td>
                <td>A</td>
              </tr>
              <tr>
                <td>PHE</td>
                <td>20</td>
                <td>20</td>
                <td>56</td>
                <td>96</td>
                <td>A</td>
              </tr>
              <tr>
                <td>CCA</td>
                <td>20</td>
                <td>20</td>
                <td>56</td>
                <td>96</td>
                <td>A</td>
              </tr>
              <tr>
                <td>B.Stu</td>
                <td>20</td>
                <td>20</td>
                <td>56</td>
                <td>96</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Oral</td>
                <td>20</td>
                <td>20</td>
                <td>56</td>
                <td>96</td>
                <td>A</td>
              </tr>
              <tr>
                <td>CRK</td>
                <td>20</td>
                <td>20</td>
                <td>56</td>
                <td>96</td>
                <td>A</td>
              </tr>{" "}
              <tr>
                <td>Comp</td>
                <td>20</td>
                <td>20</td>
                <td>56</td>
                <td>96</td>
                <td>A</td>
              </tr>{" "}
              <tr>
                <td>Civic</td>
                <td>20</td>
                <td>20</td>
                <td>56</td>
                <td>96</td>
                <td>A</td>
              </tr>{" "}
            </tbody>
          </table>
        </div>
      </div>
      <textarea
        placeholder="Comment"
        style={{
          fontFamily: "Irish Grover",
          borderBottom: "1px solid black",
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          outlineColor: "none",
          width: "90%",
          padding: "3px",
          margin: "10px",
        }}
      ></textarea>

      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "auto auto",
          columnGap:"40vw",
         alignItems: "center"
        }}
      >
        <Button>Comment</Button>

        <img src={download} alt="download" />
      </div>
    </>
  );
};

export default OneClass;
