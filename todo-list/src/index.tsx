import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TodosProvider from "./context/todosContext";
import GlobalStyles from "./Globalstyles";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <TodosProvider>
      <Router>
        <App />
      </Router>
    </TodosProvider>
  </React.StrictMode>
);
