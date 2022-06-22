import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Select } from "semantic-ui-react";
import styled from "styled-components";
import leftarrow from "../svg/left-arrow.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavigatorRouter from "../screens/Navigator";


const ScreenWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
`;
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
  margin-top: 5vh;
`;

const termOptions = [
  { key: "m", text: "First", value: "First" },
  { key: "f", text: "Second", value: "Second" },
  { key: "o", text: "Third", value: "Third" },
];

const TermConfig = () => {
  const [seniorfee, setSeniorFee] = useState("");
  const [juniorfee, setJuniorFee] = useState("");
  const [term, setTerm] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  const _configTerm = (e) =>{
    e.preventDefault()
    const payload = {
      seniorfee,
      juniorfee,
      termbegins: startDate,
      term
    }

    console.log(payload);
    navigate(-1)
  }
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
            <h3 style={{ fontFamily: "Irish Grover" }}>Term Configuration</h3>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "80vh",
            }}
          >
            <div style={{width: "80%"}}>
              <Form
                style={{
                  textAlign: "left",
                  fontSize: "1.5rem",
                }}
              >
                <Form.Group widths={2}>
                  <Form.Field
                    style={{ fontFamily: "Irish Grover" }}
                    control={Select}
                    label="Term"
                    options={termOptions}
                    placeholder="Term"
                    onChange={(e) => setTerm(e.target.textContent)}
                  />
                  <Form.Input
                    style={{ fontFamily: "Irish Grover" }}
                    label="School Fees (Junior)"
                    type="number"
                    placeholder="N8,500"
                    value={juniorfee}
                    onChange={(e) => {
                      setJuniorFee(e.target.value);
                    }}
                  />
                  <Form.Input
                    style={{ fontFamily: "Irish Grover" }}
                    label="School Fees (Senior)"
                    placeholder="N9,000"
                    type="number"
                    value={seniorfee}
                    onChange={(e) => {
                      setSeniorFee(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Field
                  style={{ fontFamily: "Irish Grover" }}
                  label="Next Term Begins"
                  placeholder="Date Of Birth"
                />
                <DatePicker
                  label="Date Of Birth"
                  selected={startDate}
                  onChange={(Date) => setStartDate(Date)}
                />

                <Button
                  type="submit"
                  onClick={(e) => {
                    _configTerm(e);
                  }}
                >
                  Config
                </Button>
              </Form>
            </div>
          </div>
          <NavigatorRouter />
        </div>
      </ScreenWrapper>
    </>
  );
};

export default TermConfig;
