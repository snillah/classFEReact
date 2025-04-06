import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Taskhome from "./components/taskapp/taskhome";

function App() {

  return (
    <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route  path="/taskapp" element={<Taskhome/>}></Route>
    </Routes>

  );
}

export default App;

