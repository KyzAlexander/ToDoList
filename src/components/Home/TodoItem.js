import React from "react";

const TodoItem = ({ todo }) => {
  return <div className='todoItem'>{todo.title}</div>;
};
export default TodoItem;
