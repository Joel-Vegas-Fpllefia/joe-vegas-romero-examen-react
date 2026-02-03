import React, { useState } from "react";

function TodoItem({ createTodo } = props) {
  const [title, SetTitle] = useState("");
  const [prioridad, SetPrioridad] = useState("");
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Titulo"
        onChange={(e) => SetTitle(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Prioridad"
        onChange={(e) => SetPrioridad(e.target.value)}
      />
      <button onClick={() => createTodo(title, prioridad)}>AÑADIR TAREA</button>
    </div>
  );
}

export default TodoItem;
