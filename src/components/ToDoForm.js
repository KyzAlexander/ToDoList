import { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //отмена действия браузера
    addTask(userInput);
    setUserInput("");
  };

  const handleKeyPress = (e) => {
    // обрабатывает нажатие на Enter
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  return (
    <form className='addTasksForm mb-4 flex flex-row' onSubmit={handleSubmit}>
      <input
        className='text-gray-600 p-2 rounded-l-xl w-full'
        value={userInput}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder='Enter a task ...'
      ></input>
      <button className='btnSave bg-green-600 p-2 rounded-r-xl'>Save</button>
    </form>
  );
};

export default ToDoForm;
