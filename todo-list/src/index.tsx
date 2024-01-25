import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TodosProvider from "./context/todosContext";
import GlobalStyles from "./Globalstyles";
import { BrowserRouter as Router } from "react-router-dom";

<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
  rel="stylesheet"
></link>;

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
