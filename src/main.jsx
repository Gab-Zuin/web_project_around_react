import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../../web_project_around_react/src/components/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
