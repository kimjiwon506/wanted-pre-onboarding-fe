import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <FooterStyle>
      <li>회원가입</li>
      <li>로그인</li>
    </FooterStyle>
  );
};

const FooterStyle = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 50px;
  padding: 0;
  li {
    list-style: none;
    font-size: 14px;
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
