import { Checkbox, FormControlLabel } from "@material-ui/core";
import { DeleteForeverOutlined } from "@material-ui/icons";

import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, completeTodo } from "../redux/actions/actions";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();

  //Todo time format

  const todoTime = new Date(parseInt(todo.time)).toDateString();

  return (
    <div
      className="todoCard"
      key={todo.id}
      style={
        todo.completed
          ? { backgroundColor: "green" }
          : { backgroundColor: "white" }
      }
    >
      <div className="todoCard__check">
        <FormControlLabel
          control={
            <Checkbox
              onClick={() => dispatch(completeTodo(todo.id))}
              name="checked"
              color="primary"
            />
          }
        />
      </div>

      <div className="todoCard__todoContainer">
        <div className="todoCard__time">{todoTime}</div>

        <div className="todoCard__title">
          <h2>{todo.todo.title}</h2>
        </div>
        <div className="todoCard__text">
          <p>{todo.todo.description ? todo.todo.descriptio : null}</p>
        </div>
      </div>
      <div className="todoCard__delete">
        <DeleteForeverOutlined
          style={{ fontSize: "35px" }}
          onClick={() => dispatch(removeTodo(todo.id))}
        />
      </div>
    </div>
  );
};

export default TodoCard;
