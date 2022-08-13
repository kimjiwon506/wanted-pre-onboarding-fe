import React, { useEffect } from "react";
import styled from "styled-components";
import { FiChevronLeft } from "react-icons/fi";

const Header = () => {
  return (
    <HeaderStyle>
      <FiChevronLeft />
      <span>{window.location.pathname === '/' ? '회원가입' : '로그인'}</span>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 420px;
  min-height: 48px;
  margin: 0 auto;
  border-bottom: 1px solid #cccccc;
  background-color: #fff;

  > svg{
    cursor: pointer;
    width: 20px;
    height: 20px;
  } 
  > span {
    display: block;
    flex: 2;
    text-align: center;
  }
`;

export default Header;
