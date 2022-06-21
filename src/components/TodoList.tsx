import { Todo } from "../model";
import "../styles/style.css";
import SingleTodo from "./SingleTodo";
type Props = {
  todos: Todo[];
  completedTasks: Todo[];
  setCompletedTasks: React.Dispatch<React.SetStateAction<Todo[]>>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList: React.FC<Props> = ({ todos, setTodos, setCompletedTasks }) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active Tasks</span>{" "}
        {todos.map(
          (todo, i) =>
            !todo.isDone && (
              <SingleTodo
                index={i}
                todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setTodos}
              />
            )
        )}
      </div>
      <div className="todos remove">
        <span className="todos__heading">Comptated Tasks</span>{" "}
        {todos.map(
          (todo, i) =>
            todo.isDone && (
              <SingleTodo
                index={i}
                todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setTodos}
              />
            )
        )}
      </div>
    </div>
  );
};

export default TodoList;
