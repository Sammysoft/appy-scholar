import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "semantic-ui-react";
import styled from "styled-components";



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


const AuthForm = () => {
  const navigate = useNavigate()
  const [schoolname, setSchoolName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {}, []);

  const _login = (e) => {
    e.preventDefault();
    const payload = {
      schoolname,
      password,
      email,
    };

    console.log(payload);

    navigate("/dashboard")
  };
  return (
    <>
      <Form
        style={{
          textAlign: "left",
          fontSize: "1.5rem",

        }}
      >
        <Form.Group widths={2}>
          <Form.Input
          style={{  fontFamily: "Irish Grover"}}
            label="School Name"
            placeholder="School Name"
            value={schoolname}
            onChange={(e) => {
              setSchoolName(e.target.value);
            }}
          />
          <Form.Input
           style={{  fontFamily: "Irish Grover"}}
            label="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Input
           style={{  fontFamily: "Irish Grover"}}
            label="Password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Checkbox label="I agree to the Terms and Conditions" />

        <Button
          type="submit"
          onClick={(e) => {
            _login(e);
          }}
        >
          Login
        </Button>

      </Form>
    </>
  );
};

export default AuthForm;
