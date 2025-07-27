import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import step -1
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(

  <StrictMode>
  {/* step-2 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
