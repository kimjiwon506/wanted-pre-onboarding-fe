import React, { useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import { FormContext } from "../App";

// 회원가입 인풋
const EMAIL_REGEX = new RegExp(
  '^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
);
const PW_REGEX = new RegExp('^[a-zA-Z0-9]{8,16}$')

const ERROR_MSG = {
  required: "필수 정보입니다.",
  invalidEmail: "@ 포함해 주세요.",
  invalidPw: "8자 이상 입력해주세요.",
  invalidPwCheck: "비밀번호가 일치하지 않습니다.",
};

const FormInput = ({ id, label, placeholder, errorData, setErrorData }) => {
  const checkRegex = () => {
    let result;
    const value = formData[id];
    if(value.length === 0){
      result = 'required'
    } else if (id === "email" || id === "loginEmailCheck"){
      result = EMAIL_REGEX.test(value) ? true : "invalidEmail";
    }else if (id === "pw" || id === "loginPwCheck"){
      result = PW_REGEX.test(value) ? true : "invalidPw";
    }else if (id === "pwCheck"){
      //TODO:비밀번호와 비밀번호 확인이 일치하지 않을경우 문구
      result = "pw".value === "pwCheck".value ? true : 'invalidPwCheck'
    }
    setErrorData({ ...errorData, [id]: result })
  }

  const { formData, setFormData } = useContext(FormContext);

  
  return (
    <>
      <FormInputStyle>
        <label htmlFor="" className="label">
          {label}
        </label>
        <input
          id={id}
          className="input"
          placeholder={placeholder}
          value={formData[id]}
          onChange={(e) => {
            setFormData({ ...formData, [id]: e.target.value })
          }}
          onBlur={checkRegex}
        />
        <div className="idMsg">{ERROR_MSG[errorData[id]]}</div>
      </FormInputStyle>
    </>
  );
};

const FormInputStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  .label {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .input {
    height: 27px;
    padding-left: 10px;
    border: 1px solid #cccccc;
  }
  .idMsg {
    margin-top: 10px;
    font-size: 12px;
    color: red;
  }
`;

export default FormInput;
