import React, { useState, useContext } from "react";
import { FormContext } from "../App";
import styled from "styled-components";
import FormInput from "../components/FormInput";
import axios from "axios";

const initialErrorData = {
  loginEmailCheck: "",
  loginPwCheck: "",
};

const Login = () => {
  const [errorData, setErrorData] = useState(initialErrorData);
  const { formData } = useContext(FormContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: formData.loginEmailCheck,
      password: formData.loginPwCheck,
    };
    axios
      .post(
        "/auth/signin",
        data,
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        localStorage.setItem("loginKey", response.data.access_token);
         window.location.href = "/todos";
      })
      .catch((response) => {
        console.log("Error!");
        window.location.href="/auth/signup"
      });
  };

  return (
    <>
      <h3>로그인</h3>
      <FormStyle onSubmit={handleSubmit}>
        <FormInput
          id="loginEmailCheck"
          label="가입하신 이메일 입력"
          placeholder="가입하신 이메일을 입력하세요"
          errorData={errorData}
          setErrorData={setErrorData}
        />
        <FormInput
          id="loginPwCheck"
          label="비밀번호"
          placeholder="가입하신 비밀번호를 입력하세요"
          errorData={errorData}
          setErrorData={setErrorData}
        />
        <ButtonStyle
          type="submit"
          disabled={
            !(
              errorData.loginEmailCheck === true &&
              errorData.loginPwCheck === true
            )
          }
        >
          로그인하기
        </ButtonStyle>
      </FormStyle>
    </>
  );
};

const FormStyle = styled.form`
  margin-top: 30px;
`;
const ButtonStyle = styled.button`
  width: calc(100% - 20px);
  margin: 30px 10px 0 10px;
  padding: 10px 0;
  border-radius: 4px;
  border: 0;
  background: black;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  color: white;
  font-weight: bold;
  &:disabled {
    background-color: #cccccc;
    cursor: default;
  }
`;

export default Login;
