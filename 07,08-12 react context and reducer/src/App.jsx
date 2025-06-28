import { useEffect, useState } from "react";
import "./App.css";
// import Button from './components/button/button'
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
import UserAreaa from "./components/OTT-user";

function App() {
  const [otgData, setOtgData] = useState("data passing");
  return (
    <div>
      <User data={otgData}setOtg={setOtgData}/>
    </div>
  );
}

export default App;

function User({data,setOtg=()=>{}}) {
  return (
    <div>
      <h1>User</h1>
      <UserAreaa data={data} setOtg={setOtg} />
    </div>
  );
}
