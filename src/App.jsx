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
      <h1 className="text-4xl tracking-[.5rem]">TODO</h1>
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
    <div>
      <p>hello</p>
    </div>
  );
}

function DisplayTask() {}

function Task() {}

export default App;
