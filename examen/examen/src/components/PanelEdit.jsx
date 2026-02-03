import { useState } from "react";

export default function PanelEdit(datoEdit, updateTodo) {
  const [title, SetTitle] = useState(datoEdit ? datoEdit.title : "");
  const [completed, Setcompleted] = useState(
    datoEdit ? datoEdit.completed : "",
  );
  const [priority, Setpriority] = useState(datoEdit ? datoEdit.completed : "");
  return (
    <div key={datoEdit.id}>
      <input
        type="text"
        name=""
        id=""
        value={title}
        onChange={(e) => SetTitle(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        value={completed}
        onChange={(e) => Setcompleted(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        value={priority}
        onChange={(e) => Setpriority(e.target.value)}
      />

      <button
        onClick={(e) => updateTodo(datoEdit.id, title, completed, priority)}
      >
        Guardar
      </button>
    </div>
  );
}
