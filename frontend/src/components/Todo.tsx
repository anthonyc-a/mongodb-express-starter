import axios from "axios";

const Todo = ({ id, title, description, modified }: any) => {
  const handleDelete = async (listingId: any) => {
    await axios.post(`http://localhost:5000/todos/delete/${listingId}`);
  };

  return (
    <li>
      <h3>{title}</h3>
      <span>{description}</span>
      <span>{modified}</span>
      <h3
        onClick={() => {
          handleDelete(id);
        }}
      >
        x
      </h3>
    </li>
  );
};

export default Todo;
