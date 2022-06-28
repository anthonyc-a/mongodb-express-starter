import { useEffect, useState } from "react";
import axios from "axios";
import Todo from "./components/Todo";

const App = () => {
  const [data, setData] = useState([]);

  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const { title, description } = todo;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleSubmit = async (title: any, description: any) => {
    await axios.post("http://localhost:5000/todos/addTodo", {
      title: title,
      description: description,
    });
    window.location.reload();
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:5000/todos`);
      const json = await response.data;
      setData(json);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Todo name"
        value={title}
        name="title"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="Todo description"
        value={description}
        name="description"
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        onClick={() => {
          handleSubmit(title, description);
        }}
      >
        Add Todo
      </button>
      <div className="todos">
        <ul className="todo-list">
          {data.map((todo: any, id: any) => (
            <Todo
              key={id}
              id={todo._id}
              title={todo.title}
              description={todo.description}
              modified={todo.last_modified}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
