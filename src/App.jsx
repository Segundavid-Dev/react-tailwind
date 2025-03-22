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
  const [newInput, setNewInput] = useState("");
  const [tasks, setTask] = useState(initialTask);

  function handleSubmit(e) {
    e.preventDefault();
    setNewInput((newTask) => newTask);

    const submittedTaskObject = {
      id: Date.now(),
      tasks: newInput,
      status: "Active",
    };
    setTask([submittedTaskObject, ...tasks]);
    setNewInput("");
  }

  return (
    <div className="flex flex-col min-w-[30vw] sm:max-w-[40vw] md:max-w-[50vw] min-h-[100vh] items-center justify-center mx-auto mt-[-3rem] lg:mt-[-2rem]">
      <Header />
      <FormInput
        newInput={newInput}
        setNewInput={setNewInput}
        handleSubmit={handleSubmit}
      />
      <DisplayTask latestTask={tasks} />
      <FilterTask numOfTasks={tasks} />
    </div>
  );
}

function Header() {
  return (
    <div className="flex w-full items-center justify-between mt-[4rem] mb-[2rem]">
      <h1 className="text-4xl tracking-[.5rem] font-extrabold">TODO</h1>
      <img
        src="images/icon-sun.svg"
        alt="Sun Icon"
        className="cursor-pointer"
      />
    </div>
  );
}

function FormInput({ newInput, setNewInput, handleSubmit }) {
  return (
    <form className="w-full relative" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newInput}
        onChange={(e) => setNewInput(e.target.value)}
        placeholder="Create a new todo..."
        className="bg-[var(--input-background)] max-sm:h-[50vh] w-full pt-[15px] pb-[15px] pl-[4rem] border-none outline-none text-[14px] mb-[1rem]"
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

function Task({ task, id, status }) {
  const [checked, setChecked] = useState(false);

  if (task === "") return;

  function handleCheckedTask(id) {
    setChecked((checked) => !checked);
    console.log(checked);
    console.log(id);
    status = "completed";
    console.log(status);
  }

  return (
    <div
      className="pt-[15px] pb-[15px] pl-[4rem] border-[1px] border-gray-500
      text-[14px] relative"
      onClick={() => handleCheckedTask(id)}
    >
      <li
        className={`${
          checked && "line-through text-gray-400"
        } list-none cursor-pointer`}
      >
        {task}
      </li>
      <div
        className={`${
          checked
            ? "bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full cursor-pointer absolute left-3 top-3 w-6 h-6 flex items-center justify-center"
            : "absolute left-3 top-3 w-6 h-6 border-1 border-gray-500 rounded-full cursor-pointer"
        }`}
      >
        {checked && <img src="/images/icon-check.svg" alt="Icon check image" />}
      </div>
    </div>
  );
}

function FilterTask({ numOfTasks }) {
  const number = numOfTasks.length;
  return (
    <ul className="w-full bg-[var(--input-background)] p-[15px] border-[1px] border-gray-500 text-[14px] relative flex text-gray-500 items-center justify-between cursor-pointer">
      <li className="">{number} item left</li>
      <span className="flex gap-4">
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
      </span>
      <li>Clear competed</li>
    </ul>
  );
}

function FilterActive() {}

function FilterCompleted() {}
export default App;
