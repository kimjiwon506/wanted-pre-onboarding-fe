import './App.css';
import React from "react";
import styled from "styled-components";
import Header from './components/Header';
import Join from './pages/Join';

function App() {
  return (
    <WrapStyle>
      <Header />
      <Join /> 
    </WrapStyle>
  );
}

const WrapStyle = styled.div`
  max-width: 420px;
  margin: 0 auto;
`

export default App;
