import { useState } from "react";
import BtnDelete, {
  BtnActive,
  BtnCompleted,
  BtnEdit,
  BtnEdited,
} from "../icons/Icons";

const ToDo = ({ todo, toggleTask, removeTask }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [correctTask, setCorrectTask] = useState(todo.task);

  return (
    <div
      key={todo.id}
      className='itemTodo flex flex-row justify-between items-center w-full mb-3 bg-sky-600 p-3 rounded-lg'
    >
      <div
        className={
          todo.complete ? "line-through text-gray-400" : "no-underline"
        }
      >
        {isEditMode ? (
          <input
            className='b bg-blue-300'
            value={correctTask}
            onChange={(e) => setCorrectTask(e.target.value)}
          ></input>
        ) : (
          todo.task
        )}
      </div>
      <div className='wrapperBtn flex flex-row justify-between items-center'>
        <div
          className='btnDelete cursor-pointer hover:scale-150 duration-200'
          onClick={() => removeTask(todo.id)}
        >
          <BtnDelete />
        </div>
        <div
          className='btnActiveOrCompleted ml-5 cursor-pointer hover:scale-150 duration-200'
          onClick={() => toggleTask(todo.id)}
        >
          {todo.complete ? <BtnCompleted /> : <BtnActive />}
        </div>
        {isEditMode ? (
          <div
            className='btnEdited cursor-pointer ml-5 hover:scale-150 duration-200'
            onClick={() => {
              todo.task = correctTask;
              setIsEditMode(false);
            }}
          >
            <BtnEdited />
          </div>
        ) : (
          <div
            className='BtnEdit cursor-pointer ml-5 hover:scale-150 duration-200'
            onClick={() => setIsEditMode(true)}
          >
            <BtnEdit />
          </div>
        )}
      </div>
    </div>
  );
};

export default ToDo;
