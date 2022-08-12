import './App.css';
import React from "react";
import styled from "styled-components";
import Header from './components/Header';
import Form from './components/Form';

function App() {
  return (
    <WrapStyle>
      <Header />
      <Form />
    </WrapStyle>
  );
}

const WrapStyle = styled.div`
  max-width: 420px;
  margin: 0 auto;
`

export default App;
