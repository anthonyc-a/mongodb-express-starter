import axios from "axios";

const Todo = ({ id, title, description, modified }: any) => {
  const handleDelete = async (listingId: any) => {
    await axios.delete(`http://localhost:5000/todos/delete/${listingId}`);
  };

  return (
    <li>
      <h3>{title}</h3>
      <span>{description}</span>
      <h4
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete entry
      </h4>
    </li>
  );
};

export default Todo;
