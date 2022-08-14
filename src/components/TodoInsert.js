import React, { useState, useCallback } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import styled from "styled-components";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );
  return (
    <TodoInsertStyle onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type={"submit"}>
        <HiOutlinePlus />
      </button>
    </TodoInsertStyle>
  );
};

const TodoInsertStyle = styled.form`
  display: flex;
  margin-bottom: 20px;
  input {
    flex: 1;
    height: 36px;
    border: 1px solid burlywood;
    outline: none;
    padding: 0 11px;
    border-radius: 6px;
  }
  button {
    all: unset;
    display: block;
    width: 50px;
    text-align: center;
    background: burlywood;
    border-radius: 6px;
    margin-left: 6px;
    svg {
      color: white;
      width: 22px;
      height: 22px;
    }
  }
  > div {
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #cccccc;
    cursor: pointer;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export default TodoInsert;
