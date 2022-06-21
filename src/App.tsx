import React, { useEffect, useState } from "react";
import InputField from "./components/InputField";
import "./styles/App.css";
import { Todo } from "./model";
import TodoList from "./components/TodoList";
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([
        ...todos,
        { id: Date.now().toString(), todo: todo, isDone: false },
      ]);
      setTodo("");
      localStorage.setItem(
        "todos",
        JSON.stringify([
          ...todos,
          { id: Date.now().toString(), todo: todo, isDone: false },
        ])
      );
    }
  };
  useEffect(() => {
    const getTodos = localStorage.getItem("todos");
    if (getTodos) {
      setTodos(JSON.parse(getTodos));
    }
  }, []);
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        completedTasks={completedTasks}
        setCompletedTasks={setCompletedTasks}
      />
    </div>
  );
};

export default App;
