import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./feature/todo/todoSlice";
function App() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };

  const displayTodo = useSelector((state) => state.todos);

  return (
    <>
      <h2>selfmade todo</h2>

      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="enter a TASK"
        />

        <button type="submit">add task</button>
      </form>
      <div>
        {displayTodo.map((todo) => (
          <li key={todo.id}>
            <p>{todo.todoName}</p>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </div>
    </>
  );
}

export default App;
