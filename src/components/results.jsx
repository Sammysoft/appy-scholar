import React from "react";

const Results = () => {
  return (
    <>
      <div style={{ width: "100%" }}>
        <header>
          <div
            style={{
              padding: "10px",
              fontWeight: "800",
              fontSize: "2.5rem",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            OLADELE GROUP OF SCHOOLS
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "5px",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              textTransform: "capitalize",
            }}
          >
            <div style={{ width: "30%" }}>
              <img
                src="/images/profile.jpg"
                alt="profile"
                width="100%"
                height="100%"
              />
            </div>
            <div style={{ width: "70%", padding: "20px", fontSize: "1rem" }}>
              <div style={{ padding: "0px 10px" }}>
                <span style={{ fontWeight: "700" }}>Name:</span> Abraham Mercy
                Comfort
              </div>
              <br />
              <div style={{ padding: "0px 10px" }}>
                <span style={{ fontWeight: "700" }}>Class:</span> Jss Three
              </div>
              {/* <br />
              <div style={{ padding: "0px 10px" }}>
                <span style={{ fontWeight: "700" }}>Term:</span> First Terminal
                Examination
              </div>
              <br />
              <div style={{ padding: "0px 10px" }}>
                <span style={{ fontWeight: "700" }}>Year:</span> 2021/2022
              </div> */}
              <br />
              <hr />
              <div style={{ padding: "0px 10px" }}>
                <span style={{ fontWeight: "700" }}>Total:</span> 1300 of 1400
              </div>
              <br />
              <div style={{ padding: "0px 10px" }}>
                <span style={{ fontWeight: "700" }}>Average:</span> 95%
              </div>
              <br />

              <div style={{ padding: "0px 10px" }}>
                <span style={{ fontWeight: "700" }}>Position:</span> 1st of 73
              </div>
              <br />
              <div style={{ padding: "0px 10px" }}>
                <span style={{ fontWeight: "700" }}>Performance: </span>{" "}
                Distinction
              </div>
            </div>
          </div>
        </header>
        <section>
          <table style={{width:"100%", fontSize:"1.5rem"}}>
              <thead>
                <th style={{textAlign:"left"}}>
                  Subjects
                </th>
                <th style={{textAlign:"left"}}>1st CA (20%)</th>
                <th style={{textAlign:"left"}}>2nd CA (20%)</th>
                <th style={{textAlign:"left"}}>Exam (60%)</th>
                <th style={{textAlign:"left"}}>Total (100%)</th>
                <th style={{textAlign:"left"}}>Grade (A)</th>
              </thead>
              <tbody>
                <tr>
                  <td>Mathematics</td>
                  <td>20</td>
                  <td>15</td>
                  <td>57</td>
                  <td>92</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>English</td>
                  <td>20</td>
                  <td>15</td>
                  <td>57</td>
                  <td>92</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>Geography</td>
                  <td>20</td>
                  <td>15</td>
                  <td>57</td>
                  <td>92</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>Economics</td>
                  <td>20</td>
                  <td>15</td>
                  <td>57</td>
                  <td>92</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>Biology</td>
                  <td>20</td>
                  <td>15</td>
                  <td>57</td>
                  <td>92</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>Physics</td>
                  <td>20</td>
                  <td>15</td>
                  <td>57</td>
                  <td>92</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>Agric Science</td>
                  <td>20</td>
                  <td>15</td>
                  <td>57</td>
                  <td>92</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>Chemistry</td>
                  <td>20</td>
                  <td>15</td>
                  <td>57</td>
                  <td>92</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>Data Processing</td>
                  <td>20</td>
                  <td>15</td>
                  <td>57</td>
                  <td>92</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>Civic Education</td>
                  <td>20</td>
                  <td>15</td>
                  <td>57</td>
                  <td>92</td>
                  <td>A</td>
                </tr>
              </tbody>
          </table>
        </section>
        <footer style={{fontSize: "1rem", padding :"10px"}}>
          <div>Class Master: <i>Keep it up and do not relent</i></div><br/>
          <div>Principal: <i>Don't jeopardize this giant stude</i></div>
        </footer>
      </div>
      <div style={{position:"absolute", top:"5px", right:"5px"}}>
        <img src="/images/ogslogo.png" alt="oladele" width="400px" height="350px"/>
      </div>
    </>
  );
};
export default Results;
