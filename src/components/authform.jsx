import axios from "axios";
import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { Form } from "semantic-ui-react";
import Swal from "sweetalert2";
import styled from "styled-components";
import { api } from "../strings";

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
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const _login = (e) => {
    setLoading(true);
    e.preventDefault();
    const payload = {
      password,
      email,
    };
    axios
      .post(`${api}/auth`, payload)
      .then((res) => {
        localStorage.setItem("appy-token", res.data.token);
        navigate("/dashboard");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          title: "Oops 😥",
          text: error.response.data.data,
        });
      });
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
            style={{ fontFamily: "Irish Grover" }}
            label="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Input
            style={{ fontFamily: "Irish Grover" }}
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
          {loading === true ? (
            <>
              <span>
                <Loader active inline="centered" />
              </span>
            </>
          ) : (
            <>Login</>
          )}
        </Button>
      </Form>
    </>
  );
};

export default AuthForm;
