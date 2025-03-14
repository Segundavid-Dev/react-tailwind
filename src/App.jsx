import { useState } from "react";
import "./App.css";

const tasks = [
  {
    id: 1,
    task: "Complete React Course",
    completed: false,
  },
  {
    id: 2,
    task: "Jog every morning",
    completed: true,
  },
];

function App() {
  return (
    <div className="container">
      <Form />
      <DisplayToDo />
    </div>
  );
}

function Form() {
  const [input, setInput] = useState("");

  function handleClick(e) {
    e.preventDefault();
    console.log(input);
  }

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
        <button className="bg-white text-black p-[10px]" onClick={handleClick}>
          Enter
        </button>
      </form>
    </div>
  );
}

function Task({ task }) {
  return (
    <div>
      <p className="text-white">
        <span className="mr-1.5">
          <input type="checkbox" />
        </span>
        {task}
      </p>
    </div>
  );
}

function DisplayToDo() {
  return (
    <div>
      {tasks.map((individualTask) => (
        <Task key={individualTask.id} task={individualTask.task} />
      ))}
    </div>
  );
}

export default App;
