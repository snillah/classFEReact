import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Button from './components/button/button'
import props from "./assets/props-desturct.png";
import propsDrilling from "./assets/propsdrilling.png";
//other
import photoUseState from "./assets/useState(0)().png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

function App() {
  const [data, setData] = useState(1);
  // const [data1,setData1]=useState(1)
  const [add, setAdd] = useState(0);
  const [multiple, setMultipleValue] = useState();
  // others toggle condition
  const [isShowExplnation, setIsShowExplnation] = useState(false);

  // useRef

  const inputRef = useRef({
    name:""
  });

  const handleAdd = () => {
    console.log("useRef=",inputRef);
    console.log("input value of Dom",inputRef.current?.children[1].value);
  };

  const handleAddfunc =useCallback(()=>{
    setAdd(add+1)
  },[add])

  const Multiply=useMemo(
    ()=>{
      
    },[Multiply])
  return (
    <div>
      <NavBar />
      <div>
        <h1>React Hooks</h1>
        <p>
          React hook Explanation
          optim
          <ul>
            <li>
              UseRef it will rerender it just store the Dom compoment in session storage, State won't render
            </li>
            <li>UseMomo = its handle when to trigger like a specific state changes means it will trigger, it contains function and state value

              <p>Return value give</p>
            </li>
            <li>UseCallBack = its handle when to trigger like a specific state changes means it will trigger, it contains function and state value

              <p>execute function</p>
            </li>
          </ul>
        </p>
      </div>
      <h1>Example for useRef</h1>
      <div
      ref={inputRef}
      >
        <h1>I stored the dom data in Ram using</h1>
      <input 
      type="text"
      // onChange={handleUpdateInput}
       />
       <button onClick={handleAdd}>add</button>
       </div>

      <div>
        <h1>useMemo</h1>
        <p>{`add state value: ${add}`}</p>
        <button onClick={handleAddfunc}>addition</button>
        <button >{Multiply}</button>
        <button></button>
      </div>

    </div>
  );
}

export default App;

function NavBar({ countProduct = 0 }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <div>useRef, routes</div>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cart List
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Badge badgeContent={countProduct} color="primary">
              <ShoppingCartIcon color="action" />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
