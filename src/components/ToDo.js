import BtnDelete from "../icons/Icons";

const ToDo = ({ todo, toggleTask, removeTask }) => {
  return (
    <div
      key={todo.id}
      className='itemTodo flex flex-row justify-between items-center cursor-pointer w-full mb-3 bg-sky-600 p-3 rounded-lg'
    >
      <div
        className={todo.complete ? "line-through" : "no-underline"}
        onClick={() => toggleTask(todo.id)}
      >
        {todo.task}
      </div>
      <div
        className='btnDelete ml-3 cursor-pointer'
        onClick={() => removeTask(todo.id)}
      >
        <BtnDelete />
      </div>
    </div>
  );
};

export default ToDo;
