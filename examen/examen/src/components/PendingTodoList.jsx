import { useState } from "react";

function PendingTodoList({
  userClientApi,
  editUserFilter,
  deleteTodo,
} = props) {
  const [edit, SetEdit] = useState(false);
  const [title, SetTitle] = useState("");
  const [completed, SetCompleted] = useState("");
  const [priority, SetPrioridad] = useState("");
  return (
    <>
      {userClientApi.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.title}</p>
            <p>{user.completed}</p>
            <p>{user.priority}</p>
            <p>{user.createdAt}</p>
            <button onClick={() => editUserFilter(user.id)}>Editar</button>
            <button onClick={() => deleteTodo(user.id)}>Eliminar</button>
          </div>
        );
      })}
    </>
  );
}

export default PendingTodoList;
