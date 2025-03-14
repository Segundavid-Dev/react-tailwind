import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todos, SetTodos] = useState([]);

  function handleAddTasks(e) {
    e.preventDefault();
    console.log(input);
    SetTodos((todos) => [...todos, input]); //Add task to list
    setInput(""); // clear input field
    console.log(todos);
  }

  return (
    <div className="container">
      <Form input={input} setInput={setInput} handleAddTasks={handleAddTasks} />
      <DisplayToDo todos={todos} />
    </div>
  );
}

function Form({ input, setInput, handleAddTasks }) {
  return (
    <div>
      <h1 className="text-center text-4xl pb-2">TODO APP</h1>
      <form className="flex gap-10 mt-2.5">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter todo..."
          className="border-2 border-white pt-2 pb-2 pr-10 pl-2"
        />
        <button
          className="bg-white text-black p-[10px]"
          onClick={handleAddTasks}
        >
          Enter
        </button>
      </form>
    </div>
  );
}

function DisplayToDo({ todos }) {
  return (
    <ul className="mt-5 w-80">
      {todos.map((todo) => (
        <li className="text-white">{todo}</li>
      ))}
    </ul>
  );
}

export default App;
