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
  invalidEmail: "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.",
  invalidPw: "8~16자 영문 대 소문자, 숫자를 사용하세요.",
  invalidPwCheck: "비밀번호가 일치하지 않습니다.",
};

const FormInput = ({ id, label, placeholder, errorData, setErrorData }) => {
  const checkRegex = () => {
    let result;
    const value = formData[id];
    if(value.length === 0){
      result = 'required'
    } else if (id === "email"){
      result = EMAIL_REGEX.test(value) ? true : "invalidEmail";
    }else if (id === "pw"){
      result = PW_REGEX.test(value) ? true : "invalidPw";
    }else if (id === "pwCheck"){
      result = "pw".value !== "pwCheck".value ? 'invalidPwCheck' : true
    }
    setErrorData({ ...errorData, [id]: result })
  }

  const { formData, setFormData } = useContext(FormContext);

  // console.log(formData[id]);
  
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
