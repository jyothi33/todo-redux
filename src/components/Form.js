import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoCard from "./TodoCard";
import { addTodo, deleteAllCompletedTodos } from "../redux/actions/actions";

const Form = () => {
  let initialState = {
    title: "",
    description: "",
  };

  const [newTodo, setNewTodo] = useState(initialState);

  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state.todo);

  const handleInput = ({ target }) => {
    const { name, value } = target;
    console.log(name + " " + value);
    setNewTodo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(newTodo));
    setNewTodo(initialState);
  };

  const remainingTodos = todos?.filter((todo) => !todo.completed);
  return (
    <div className="form__container">
      <div className="form__left">
        <div className="form__right">
          <form action="" onSubmit={handleSubmit}>
            <input
              type="input"
              className="form__input"
              placeholder="What needs to be done?"
              value={newTodo.title}
              name="title"
              required
              onChange={handleInput}
            />

            {newTodo.title ? (
              <div className="form__input">
                <textarea
                  name="description"
                  className="form__input"
                  placeholder="Description"
                  value={newTodo.description}
                  onChange={handleInput}
                ></textarea>
              </div>
            ) : null}

            <div className="form__group">
              <button className="btn" type="submit">
                Add Todo
              </button>
            </div>
          </form>

          <div className="form__remaining">
            <p>Remaining Todos: {remainingTodos.length}</p>
          </div>

          <div className="form__buttons">
            <button
              className="btn"
              type="submit"
              onClick={() => dispatch(deleteAllCompletedTodos())}
            >
              Delete all completed Todos
            </button>
          </div>
        </div>
      </div>
      <div className="form__right">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Form;
