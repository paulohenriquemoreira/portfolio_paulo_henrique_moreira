import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Renderiza a aplicação React dentro do elemento raiz definido no HTML.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
