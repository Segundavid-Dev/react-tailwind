import { useState } from "react";
import "./App.css";

let initialTask = [
  {
    id: 1,
    tasks: "Completed online Javascript Course",
    status: "completed",
  },
  {
    id: 2,
    tasks: "Jog around the park 3x",
    status: "Active",
  },
  {
    id: 3,
    tasks: "10 minutes meditation",
    status: "Active",
  },
];

function App() {
  const [newTask, setNewTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setNewTask((newTask) => newTask);

    const submittedTaskObject = {
      id: Date.now(),
      tasks: newTask,
      status: "Active",
    };
    initialTask = [...initialTask, submittedTaskObject];
    console.log(initialTask);
  }

  return (
    <div className="flex flex-col min-w-[30vw] sm:max-w-[40vw] md:max-w-[50vw] min-h-[100vh] items-center justify-center mx-auto">
      <Header />
      <FormInput
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
      <DisplayTask latestTask={initialTask} />
      <FilterTask />
    </div>
  );
}

function Header() {
  return (
    <div className="flex w-full items-center justify-between mb-[2rem]">
      <h1 className="text-4xl tracking-[.5rem] font-extrabold">TODO</h1>
      <img
        src="images/icon-sun.svg"
        alt="Sun Icon"
        className="cursor-pointer"
      />
    </div>
  );
}

function FormInput({ newTask, setNewTask, handleSubmit }) {
  return (
    <form className="w-full relative" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Create a new todo..."
        className="bg-[var(--input-background)] w-full pt-[15px] pb-[15px] pl-[4rem] border-none outline-none text-[14px] mb-[1rem]"
      />
      <div className="absolute left-3 top-3 w-6 h-6 border-1 border-gray-500 rounded-full cursor-pointer"></div>
    </form>
  );
}

function DisplayTask({ latestTask }) {
  return (
    <div className="w-full relative bg-[var(--input-background)]">
      {latestTask.map((task) => (
        <Task
          task={task.tasks}
          key={task.id}
          status={task.status}
          id={task.id}
        />
      ))}
    </div>
  );
}

function Task({ task }) {
  return (
    <div className="pt-[15px] pb-[15px] pl-[4rem] border-[1px] border-gray-500 text-[14px] relative">
      <li className="list-none">{task}</li>
      <div className="absolute left-3 top-3 w-6 h-6 border-1 border-gray-500 rounded-full cursor-pointer"></div>
    </div>
  );
}

function FilterTask() {
  return (
    <ul className="w-full bg-[var(--input-background)] p-[15px] border-[1px] border-gray-500 text-[14px] relative flex text-gray-500 items-center justify-between cursor-pointer">
      <li className="">5 items left</li>
      <span className="flex gap-4">
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
      </span>
      <li>Clear competed</li>
    </ul>
  );
}

export default App;
