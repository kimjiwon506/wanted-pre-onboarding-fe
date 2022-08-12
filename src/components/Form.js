import React, { useState } from "react";
import styled from "styled-components";
import FormInput from './FormInput';


const Form = () => {
  const initialData = {
    email: '',
    pw: '',
    pwCheck: ''
  }
  const [errorData, setErrorData] = useState(initialData)
  return (
    <FormStyle>
      <FormInput id="email" label="이메일" placeholder="이메일을 입력하세요" errorData={errorData} setErrorData={setErrorData} />
      <FormInput id="pw" label="비밀번호" placeholder="비밀번호를 입력하세요" errorData={errorData} setErrorData={setErrorData} />
      <FormInput id="pwCheck" label="비밀번호 확인" placeholder="비밀번호를 입력하세요" errorData={errorData} setErrorData={setErrorData} />
      <ButtonStyle>가입하기</ButtonStyle>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin-top: 30px;
`;
const ButtonStyle = styled.button`
  all:unset;
  width: calc(100% - 20px);
  margin: 30px 10px 0 10px;
  padding: 10px 0;
  background-color: #cccccc;
  text-align: center;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  font-weight: bold;
`

export default Form;