import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TodosProvider from "./context/todosContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </React.StrictMode>
);
