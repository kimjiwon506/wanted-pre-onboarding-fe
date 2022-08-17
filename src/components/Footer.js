import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <FooterStyle>
      <button onClick={() => {window.location.href = '/'}}>회원가입</button>
      <button onClick={() => {window.location.href = '/signin'}}>로그인</button>
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 50px;
  padding: 0;
  button {
    all:unset;
    cursor: pointer;
    position: relative;
    &:nth-child(2) {
      margin-left: 20px;

      &:before {
        content: " ";
        width: 1px;
        height: 13px;
        position: absolute;
        background-color: #cccccc;
        left: -11px;
        top: 1px;
      }
    }
  }
`;

export default Login;
