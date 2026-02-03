import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PendingTodoList from "./components/PendingTodoList";
import TodoItem from "./components/TodoItem";
import PanelEdit from "./components/PanelEdit";
function App() {
  // estados donde almacenaremos los datos
  const [userClientApi, setClientApi] = useState([]);
  // en este estado definimos si se abre una pestaña para editar el usuario o no
  const [panelEdit, SetPanelEdit] = useState(false);
  const [datoEdit, SetDatoEdit] = useState([]);

  // Cargamos todos los datos de todos
  useEffect(() => {
    async function take_users() {
      setClientApi(
        await fetch("http://localhost:3001/todos").then((r) => r.json()),
      );
    }
    take_users();
  }, []);

  function createTodo(title, prioridad) {
    let maxId = Math.max(...userClientApi.map((a) => a.id));
    maxId += 1;
    maxId = maxId.toString();
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: maxId,
        title: title,
        completed: false,
        priority: prioridad,
        createdAt: "03/02/2026",
      }),
    });
    setClientApi([
      ...userClientApi,
      {
        id: maxId,
        title: { title },
        completed: false,
        priority: { prioridad },
        createdAt: "03/02/2026",
      },
    ]);
  }
  function editUserFilter(id) {
    SetDatoEdit(userClientApi.filter((user) => user.id === id));
    SetPanelEdit(true);
  }
  function updateTodo(id, title, completed, priority) {
    id_string = id.toString();
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: id_string,
        title: title,
        completed: completed,
        priority: priority,
        createdAt: Date,
      }),
    });
    const list_edit = userClientApi.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          id: id_string,
          title: title,
          completed: completed,
          priority: priority,
          createdAt: Date,
        };
      }
      return user;
    });
    setClientApi(list_edit);
  }

  function deleteTodo(id) {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
    });
    setClientApi(userClientApi.filter((user) => user.id != id));
  }
  console.log(userClientApi);
  return (
    <>
      {!panelEdit && (
        <>
          <PendingTodoList
            userClientApi={userClientApi}
            editUserFilter={editUserFilter}
            deleteTodo={deleteTodo}
          />
          <TodoItem createTodo={createTodo}></TodoItem>
        </>
      )}
      {panelEdit && (
        <>
          <PanelEdit updateTodo={updateTodo} datoEdit={datoEdit}></PanelEdit>
        </>
      )}
    </>
  );
}

export default App;
