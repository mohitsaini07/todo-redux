import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

const App = () => {
  return (
    <>
      <h1 className="text-6xl uppercase text-white font-bold">
        Learn Redux Toolkit
      </h1>
      <AddTodo />
      <Todo />
    </>
  );
};

export default App;
