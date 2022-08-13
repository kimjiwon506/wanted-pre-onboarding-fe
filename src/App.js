import React, { createContext, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Join from "./pages/Join";

const initialFormData = {
  email: "",
  pw: "",
  pwCheck: "",
};
export const FormContext = createContext({
  formData: initialFormData,
  setFormData: () => {},
});

function App() {
  const [formData, setFormData] = useState(initialFormData);
  return (
    <WrapStyle>
      <FormContext.Provider value={{ formData, setFormData }}>
        <Header />
        <Join />
      </FormContext.Provider>
    </WrapStyle>
  );
}

const WrapStyle = styled.div`
  max-width: 420px;
  margin: 0 auto;
`;

export default App;
