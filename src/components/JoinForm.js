import React, { useState, useContext } from "react";
import styled from "styled-components";
import FormInput from "./FormInput";
import { FormContext } from "../App";
import axios from "axios";

const initialErrorData = {
  id: "",
  pw: "",
  pwCheck: "",
};

const Form = () => {
  const [errorData, setErrorData] = useState(initialErrorData);
  const { formData } = useContext(FormContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "/auth/signup",
        {
          email: formData.email,
          password: formData.pw,
        },
        
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        localStorage.setItem("loginKey", JSON.stringify(response.data));
        window.location.href = "/login";
      })

      .catch((response) => {
        console.log("Error!");
      });
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <FormInput
        id="email"
        label="이메일"
        placeholder="이메일을 입력하세요"
        errorData={errorData}
        setErrorData={setErrorData}
      />
      <FormInput
        id="pw"
        label="비밀번호"
        placeholder="비밀번호를 입력하세요"
        errorData={errorData}
        setErrorData={setErrorData}
      />
      <FormInput
        id="pwCheck"
        label="비밀번호 확인"
        placeholder="비밀번호를 입력하세요"
        errorData={errorData}
        setErrorData={setErrorData}
      />
      <ButtonStyle
        type="submit"
        disabled={
          !(
            errorData.email === true &&
            errorData.pw === true &&
            errorData.pwCheck === true
          )
        }
      >
        가입하기
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

export default Form;
