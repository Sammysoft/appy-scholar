import React from "react";
import download from "../svg/download.svg";

const QuestionList = () => {
  return (
    <>
      <div style={{ width: "100%", margin: "auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            width: "100vw",
            height: "fit-content",
          }}
        >
          <div
            style={{
              height: "30vh",
              width: "30vw",
              borderRadius: "8px",
              backgroundColor: "whitesmoke",
              color: "#150845",
              margin: "10px",
              padding: "30px",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection:"column",
                justifyContent:"space-around",
                height: "80%",
              }}
            >
              Mathematics <br />
              [Sss One]<br/>
              <div
                style={{
                  backgroundColor: "#150845",
                  color: "white",
                  padding: "5px 10px",
                }}
              >
                Preview{" "}
              </div>
            </div>

            <div
              style={{
                display: "absolute",
                bottom: "0px",
                right: "0px",
                width:"100%",
                alignItems:"center",
                textAlign:"center",
                height: "fit-content",
              }}
            >
              <img src={download} alt="Question" />
            </div>
          </div>
          <div
            style={{
              height: "30vh",
              width: "30vw",
              borderRadius: "8px",
              backgroundColor: "whitesmoke",
              color: "#150845",
              margin: "10px",
              padding: "30px",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection:"column",
                justifyContent:"space-around",
                height: "80%",
              }}
            >
              English <br />
              [Sss One]<br/>
              <div
                style={{
                  backgroundColor: "#150845",
                  color: "white",
                  padding: "5px 10px",
                }}
              >
                Preview{" "}
              </div>
            </div>

            <div
              style={{
                display: "absolute",
                bottom: "0px",
                right: "0px",
                width:"100%",
                alignItems:"center",
                textAlign:"center",
                height: "fit-content",
              }}
            >
              <img src={download} alt="Question" />
            </div>
          </div>

          <div
            style={{
              height: "30vh",
              width: "30vw",
              borderRadius: "8px",
              backgroundColor: "whitesmoke",
              color: "#150845",
              margin: "10px",
              padding: "30px",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection:"column",
                justifyContent:"space-around",
                height: "80%",
              }}
            >
              Mathematics <br />
              [Sss Two]<br/>
              <div
                style={{
                  backgroundColor: "#150845",
                  color: "white",
                  padding: "5px 10px",
                }}
              >
                Preview{" "}
              </div>
            </div>

            <div
              style={{
                display: "absolute",
                bottom: "0px",
                right: "0px",
                width:"100%",
                alignItems:"center",
                textAlign:"center",
                height: "fit-content",
              }}
            >
              <img src={download} alt="Question" />
            </div>
          </div>

          <div
            style={{
              height: "30vh",
              width: "30vw",
              borderRadius: "8px",
              backgroundColor: "whitesmoke",
              color: "#150845",
              margin: "10px",
              padding: "30px",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection:"column",
                justifyContent:"space-around",
                height: "80%",
              }}
            >
              Mathematics <br />
              [Sss Three]<br/>
              <div
                style={{
                  backgroundColor: "#150845",
                  color: "white",
                  padding: "5px 10px",
                }}
              >
                Preview{" "}
              </div>
            </div>

            <div
              style={{
                display: "absolute",
                bottom: "0px",
                right: "0px",
                width:"100%",
                alignItems:"center",
                textAlign:"center",
                height: "fit-content",
              }}
            >
              <img src={download} alt="Question" />
            </div>
          </div>

          <div
            style={{
              height: "30vh",
              width: "30vw",
              borderRadius: "8px",
              backgroundColor: "whitesmoke",
              color: "#150845",
              margin: "10px",
              padding: "30px",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection:"column",
                justifyContent:"space-around",
                height: "80%",
              }}
            >
              Economics <br />
              [Sss Two]<br/>
              <div
                style={{
                  backgroundColor: "#150845",
                  color: "white",
                  padding: "5px 10px",
                }}
              >
                Preview{" "}
              </div>
            </div>

            <div
              style={{
                display: "absolute",
                bottom: "0px",
                right: "0px",
                width:"100%",
                alignItems:"center",
                textAlign:"center",
                height: "fit-content",
              }}
            >
              <img src={download} alt="Question" />
            </div>
          </div>

          <div
            style={{
              height: "30vh",
              width: "30vw",
              borderRadius: "8px",
              backgroundColor: "whitesmoke",
              color: "#150845",
              margin: "10px",
              padding: "30px",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection:"column",
                justifyContent:"space-around",
                height: "80%",
                width:"100%"
              }}
            >
              Biology<br />
              [Sss One]<br/>
              <div
                style={{
                  backgroundColor: "#150845",
                  color: "white",
                  padding: "5px 10px",
                }}
              >
                Preview{" "}
              </div>
            </div>

            <div
              style={{
                display: "absolute",
                bottom: "0px",
                right: "0px",
                width:"100%",
                alignItems:"center",
                textAlign:"center",
                height: "fit-content",
              }}
            >
              <img src={download} alt="Question" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionList;
