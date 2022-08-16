import axios from "axios";
import React, { useState, useCallback, useEffect } from "react";
import {
  FiXCircle,
  FiEdit3,
  FiArrowUpCircle,
  FiCheckCircle,
} from "react-icons/fi";
import { HiCubeTransparent } from "react-icons/hi";
import styled from "styled-components";

const TodoListItem = ({ todo, onRemove }) => {
  const { id, text, checked } = todo;
  const [checkEdit, setCheckEdit] = useState(false);
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmitEdit = useCallback(
    (e) => {
      e.preventDefault();
      setCheckEdit(false);
      todo.text = value;
    },
    [value]
  );

  const onSaveTodo = () => {
    localStorage.setItem("saveTodo", JSON.stringify(todo.text));
    JSON.parse(localStorage.getItem("saveTodo"));

    // localStorage.setItem(
    //   "saveTodo",
    //   JSON.stringify({ id: id, text: todo.text, isCompleted: false, userId: 1 })
    // );
    
    // JSON.parse(localStorage.getItem("saveTodo"));
    // axios.post(
    //   "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos",
    //   {
    //     id: id,
    //     text: text,
    //     isCompleted: false,
    //     userId: 1,
    //   },
    //   {
    //     headers: {
    //       Authorization: "Bearer access_token",
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
  };

  return (
    <TodoListItemStyle>
      {!checkEdit ? (
        <div className="todoTitle">{text}</div>
      ) : (
        <input className="todoTitleReWrite" type="text" onChange={onChange} />
      )}
      <div className="icons">
        {/* 기본 수정버튼 */}
        {!checkEdit && <FiEdit3 onClick={() => setCheckEdit(true)} />}
        {checkEdit && (
          <>
            {/* edit 확인버튼 */}
            <button style={{ all: "unset" }} onClick={onSubmitEdit}>
              <FiCheckCircle
                style={{
                  color: "green",
                }}
              />
            </button>
            {/* edit 취소버튼 */}
            <FiXCircle
              style={{
                color: "red",
              }}
              onClick={() => {
                setCheckEdit(false);
              }}
            />
          </>
        )}
        {checked ? (
          <FiArrowUpCircle className="FiArrowUpCircle checked" />
        ) : (
          <FiArrowUpCircle
            className="FiArrowUpCircle unChecked"
            onClick={onSaveTodo}
          />
        )}
        <FiXCircle className="delete" onClick={() => onRemove(id)} />
      </div>
    </TodoListItemStyle>
  );
};

const TodoListItemStyle = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 10px;

  border-radius: 6px;

  & + & {
    border-top: 1px solid #cccccc;
  }

  .todoTitle {
    flex: 1;
  }
  .icons {
    display: flex;
    width: 95px;
    justify-content: space-between;
    cursor: pointer;
    svg {
      width: 20px;
      height: 20px;
    }
  }
  .FiArrowUpCircle {
    &.checked {
      color: #cccccc;
    }
    &.unChecked {
    }
  }
  .delete {
    color: brown;
  }
  .todoTitleReWrite {
    flex: 1;
    border: 0;
    border-bottom: 1px solid #cccccc;
    height: 32px;
    &:focus {
      outline: none;
    }
  }
`;

export default TodoListItem;
