import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import step -1
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { LoginProvider } from "./components/pages/context-login/loginContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* step-2 */}
    <LoginProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LoginProvider>
  </StrictMode>
);
