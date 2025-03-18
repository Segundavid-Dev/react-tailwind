import "./App.css";

const initialTask = [
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
  {
    id: 4,
    tasks: "Read for 1 hour",
    status: "Active",
  },
  {
    id: 5,
    tasks: "Pick up groceries",
    status: "Active",
  },
  {
    id: 6,
    tasks: "Complete Todo App on frontend Mentor",
    status: "Active",
  },
];

function App() {
  return (
    <div className="flex flex-col min-w-[30vw] sm:max-w-[40vw] md:max-w-[50vw] min-h-[100vh] items-center justify-center mx-auto">
      <Header />
      <FormInput />
      <DisplayTask />
      <Task />
    </div>
  );
}

function Header() {
  return (
    <div className="flex w-full items-center justify-between">
      <h1 className="text-4xl tracking-[.5rem] font-extrabold">TODO</h1>
      <img
        src="images/icon-sun.svg"
        alt="Sun Icon"
        className="cursor-pointer"
      />
    </div>
  );
}

function FormInput() {
  return (
    <div className="w-full relative">
      <input
        type="text"
        placeholder="Create a new todo..."
        className="bg-[var(--input-background)] w-full pt-[15px] pb-[15px] pl-[4rem] border-none outline-none text-[14px] mb-[1rem]"
      />
      <div className="absolute left-3 top-1.5 w-6 h-6 border-1 border-gray-500 rounded-full cursor-pointer"></div>
    </div>
  );
}

function DisplayTask() {
  return (
    <div className="w-full relative bg-[var(--input-background)]">
      {initialTask.map((task) => (
        <Task />
      ))}
    </div>
  );
}

function Task() {
  return (
    <div className="pt-[15px] pb-[15px] pl-[4rem] border-1 border-gray-500">
      <p>display Task</p>
    </div>
  );
}

export default App;
