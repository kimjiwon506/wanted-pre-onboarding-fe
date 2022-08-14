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
    axios
      .post(
        // "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/auth/signin",
        {
          email: formData.loginEmailCheck,
          password: formData.loginPwCheck,
        },
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        //TODO: /todo로 이동
        // window.location.href = '/todo'
      })
      .catch((response) => {
        console.log("Error!");
        window.location.href = '/todo'
      });
  };

  return (
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
