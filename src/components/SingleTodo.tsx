import { Todo } from "../model";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteForever, MdDoneAll } from "react-icons/md";
import "../styles/style.css";
import { useEffect, useRef, useState } from "react";
import useSound from "use-sound";

type Props = {
  todo: Todo;
  todos: Todo[];
  index: number;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const SingleTodo: React.FC<Props> = ({ todo, index, setTodos, todos }) => {
  const [eidt, setEdit] = useState(false);
  const [eidtTodo, setEditToto] = useState(todo.todo);

  const [play] = useSound("/sounds/click.mp3", { volume: 0.5 });

  const submitEdit = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    const editTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, todo: eidtTodo } : todo
    );
    setTodos(editTodos);
    setEdit(false);
    localStorage.setItem("todos", JSON.stringify(editTodos));
  };
  const handleDone = (id: string) => {
    const donoTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(donoTodos);
    localStorage.setItem("todos", JSON.stringify(donoTodos));

    play();
  };
  const handleDelete = (id: string) => {
    const deletedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodos);
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("todos", JSON.stringify(deletedTodos));
    play();
  };
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [eidt]);
  return (
    <form className="todos__single" onSubmit={(e) => submitEdit(e, todo.id)}>
      <span
        style={todo.isDone ? { textDecoration: "line-through" } : {}}
        className="todos__single--text"
      >
        {eidt ? (
          <input
            ref={inputRef}
            className="todo__single__edit"
            onChange={(e) => setEditToto(e.target.value)}
            value={eidtTodo}
            type="text"
          />
        ) : (
          todo.todo
        )}
      </span>
      <div>
        <span
          className="icon"
          onClick={() => {
            !eidt && !todo.isDone && setEdit(true);
            play();
          }}
        >
          <AiOutlineEdit title="Edit" />
        </span>
        <span onClick={() => handleDelete(todo.id)} className="icon">
          <MdDeleteForever title="Delete" />
        </span>
        <span onClick={() => handleDone(todo.id)} className="icon">
          <MdDoneAll title="Complate" />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
