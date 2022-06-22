import React from "react";
import TodoItem from "./TodoItem";

const todos = [
  { id: 1, title: "Start run", isComplited: false },
  { id: 2, title: "Read book ", isComplited: false },
  { id: 3, title: "Walken ", isComplited: false },
];

const Home = () => {
  return (
    <div className='home'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Home;
