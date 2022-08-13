import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Join, Login, Todo } from './pages'

const initialFormData = {
  email: "",
  pw: "",
  pwCheck: "",
  loginEmailCheck: "",
  loginPwCheck: "",
};
export const FormContext = createContext({
  formData: initialFormData,
  setFormData: () => {},
});

function App() {
  const [formData, setFormData] = useState(initialFormData);
  return (
    <BrowserRouter>
      <WrapStyle>
        <FormContext.Provider value={{ formData, setFormData }}>
          <Header />
          <Routes>
              <Route exact path="/" element={<Join />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/todo" element={<Todo />}></Route>
          </Routes>
          <Footer />
        </FormContext.Provider>
      </WrapStyle>
    </BrowserRouter>
  );
}

const WrapStyle = styled.div`
  max-width: 420px;
  margin: 0 auto;
`;

export default App;
