import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Select, Dropdown } from "semantic-ui-react";
import styled from "styled-components";
import { subjects } from "../data";

const genderOptions = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

const marriageOptions = [
  { key: "m", text: "Married", value: "Married" },
  { key: "f", text: "Single", value: "Single" },
  { key: "o", text: "Divorced", value: "Divorced" },
];
const roleOptions = [
  { key: "m", text: "Staff", value: "Staff" },
  { key: "f", text: "Class Master", value: "Class Master" },
];
const classOptions = [
  { key: "m", text: "Jss One", value: "Jss One" },
  { key: "f", text: "Jss Two", value: "Jss Two" },
  { key: "jj", text: "Jss Three", value: "Jss Three" },
  { key: "k", text: "Sss One", value: "Sss One" },
  { key: "l", text: "Sss Two", value: "Sss Two" },
  { key: "g", text: "Sss Three", value: "Sss Three" },
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

const StaffOnboardForm = () => {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [showClass, setShowClass] = useState(false);
  const [classRole, setClassRole] = useState("")
  const [maritalStatus, setMaritalStatus] = useState("");
  const [role, setRole] = useState("");
  const [subject, setSubjects] = useState({ selectedSubjects: [] });

  const { selectedSubjects } = subject;

  const _signUp = (e) => {
    e.preventDefault();

    const payload = {
      firstname,
      lastname,
      gender,
      role,
      maritalStatus,
      classRole
    };

    console.log(payload);
    navigate("/admin/staff/list");
  };

  return (
    <>
      <div>
        <Form
          style={{
            textAlign: "left",
            fontSize: "1.5rem",
            fontFamily: "Irish Grover",
          }}
        >
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
              control={Select}
              label="Marital Status"
              options={marriageOptions}
              placeholder="Married"
              onChange={(e) => setMaritalStatus(e.target.textContent)}
            />
          </Form.Group>
          <Form.Field
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
            control={Select}
            label="Role"
            options={roleOptions}
            placeholder="Staff"
            onChange={(e) => {
              setRole(e.target.textContent);
              if (e.target.textContent === "Class Master") {
                setShowClass(true);
              }
            }}
          />
          {showClass === true ? (
            <>
              <Form.Field
                style={{ fontFamily: "Irish Grover" }}
                control={Select}
                label="Class"
                options={classOptions}
                placeholder="Class"
                onChange={(e) => {
                  setClassRole(e.target.textContent);
                    // setRole(`Class Master [${e.target.textContent}]`)
                    setShowClass(false)
                }}
              />
            </>
          ) : (
            <></>
          )}
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

export default StaffOnboardForm;
