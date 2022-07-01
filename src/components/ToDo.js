import BtnDelete, { BtnActive, BtnCompleted } from "../icons/Icons";

const ToDo = ({ todo, toggleTask, removeTask }) => {
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
        {todo.task}
      </div>
      <div className='wrapperBtn flex flex-row justify-between items-center'>
        <div
          className='btnDelete cursor-pointer'
          onClick={() => removeTask(todo.id)}
        >
          <BtnDelete />
        </div>
        <div
          className='btnActiveOrCompleted ml-5 cursor-pointer'
          onClick={() => toggleTask(todo.id)}
        >
          {todo.complete ? <BtnCompleted /> : <BtnActive />}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
