import "./App.css";

function App() {
  return (
    <div className="flex flex-col w-[30vw] min-h-[100vh] items-center justify-center mx-auto">
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
        className="bg-[var(--input-background)] w-full pt-[10px] pb-[10px] pl-[4rem] border-none outline-none text-[14px]"
      />
      <div className="absolute left-3 top-1.5 w-6 h-6 border-1 border-gray-500 rounded-full cursor-pointer"></div>
    </div>
  );
}

function DisplayTask() {}

function Task() {}

export default App;
