import "./App.css";
import React from "react";
import Todos from "./components/Todos";

function App() {
  return (
    <div className='App bg-gray-900 h-screen text-white flex justify-center text-2xl'>
      <Todos />
    </div>
  );
}

export default App;
