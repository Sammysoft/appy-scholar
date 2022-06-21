import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Select } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
// import { subjects } from "../data";
import plus from "../svg/plus.svg";


const genderOptions = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];


const classOptions = [
  { key: "m", text: "JssOne", value: "JssOne" },
  { key: "f", text: "JssTwo", value: "JssTwo" },
  { key: "o", text: "JssThree", value: "JssThree" },
  { key: "s", text: "SssOne", value: "SssOne" },
  { key: "t", text: "SssTwo", value: "SssTwo" },
  { key: "e", text: "SssThree", value: "SssThree" },
];

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
  const navigate = useNavigate()
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [phonenumber] = useState("");
  const [gender, setGender] = useState("");
  // const [maritalStatus, setMaritalStatus] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  // const [subject, setSubjects] = useState({ selectedSubjects: [] });

  // const { selectedSubjects } = subject;

  const _signUp = (e) => {
    e.preventDefault();

    const payload = {
      firstname,
      lastname,
      gender,
      startDate,
    };

    console.log(payload);
    navigate(-1)
  };

  return (
    <>
      <div>
        <Form
          style={{
            textAlign: "left",
            fontSize: "1.5rem",
            fontFamily: "Irish Grover",
            // marginTop: "30vh",
          }}
        >
          <div
            style={{
              backgroundImage: `url(/images/user.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "40vh",
              border: "2px solid black",
              margin: "auto",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                alignItems: "center",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={plus} alt="plus" />
            </div>
          </div>
          <Form.Group widths="equal">
            <Form.Field
              style={{ fontFamily: "Irish Grover" }}
              control={Input}
              label="First Name"
              placeholder="Your name"
              value={firstname}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <Form.Field
              style={{ fontFamily: "Irish Grover" }}
              control={Input}
              label="Last Name"
              placeholder="Surname"
              value={lastname}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <Form.Field
              style={{ fontFamily: "Irish Grover" }}
              type="email"
              control={Input}
              label="Email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
              style={{ fontFamily: "Irish Grover" }}
              control={Select}
              label="Gender"
              options={genderOptions}
              placeholder="Gender"
              onChange={(e) => setGender(e.target.textContent)}
            />
            <Form.Field
              style={{ fontFamily: "Irish Grover" }}
              label="D.O.B"
              placeholder="Date Of Birth"
            />
            <DatePicker
              label="Date Of Birth"
              selected={startDate}
              onChange={(Date) => setStartDate(Date)}
            />
            <Form.Field
              style={{ fontFamily: "Irish Grover" }}
              control={Select}
              label="Class"
              options={classOptions}
              placeholder="Class"
              onChange={(e) => setGender(e.target.textContent)}
            />
          </Form.Group>

          {/* <Form.Field
            label="Subjects"
            style={{ fontFamily: "Irish Grover" }}
            placeholder="Date Of Birth"
          />
          <Dropdown
            placeholder="Subjects"
            fluid
            multiple
            search
            selection
            options={subjects}
            onChange={(e) => {
              setSubjects({
                selectedSubjects: [...selectedSubjects, e.target.textContent],
              });
            }}
          />
          <Form.Field
            style={{ fontFamily: "Irish Grover" }}
            placeholder="Date Of Birth"
          /> */}

          {/* <Form.Field
            style={{ fontFamily: "Irish Grover" }}
            control={Button}
            content="Sign Up"
            onClick={(e) => {
              _signUp(e);
            }}
          /> */}
        </Form>
        <br />
          <br />
          <Button
            onClick={(e) => {
              _signUp(e);
            }}
          >
            Done
          </Button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
      </div>
    </>
  );
};

export default OnboardForm;
