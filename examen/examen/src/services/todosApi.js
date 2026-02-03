import { useState } from "react";

const [datos_api, SetDatos] = useState([]);
export function getTodos() {
  async function leerDatos() {
    SetDatos = await fetch("http://localhost:3001/todos").then((r) => r.json());
  }
  return leerDatos;
}

export function createTodo(title, prioridad) {
  let maxId = Math.max(...datos_api.map((a) => a.id));
  maxId += 1;

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
      createdAt: { Date },
    }),
  });
  
}

export function updateTodo(id, data) {}

export function deleteTodo(id) {}
