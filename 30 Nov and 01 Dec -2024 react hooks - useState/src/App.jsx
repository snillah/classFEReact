import { useEffect, useState } from "react";
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
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  // others toggle condition
  const [isShowExplnation, setIsShowExplnation] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("Mounting Only Once", data);
    fetchProductData();
    // empty dependency run single time
  }, []);

  useEffect(() => {
    console.log("Mounting and State Changes useEffett2", data);
    // dependency mention the state while affect the state it will render
  }, [data]);

  const handleCartData = (cart) => {
    console.log("cartData", cart);
  };

  function fetchProductData() {
    fetch("https://fakestoreapi.com/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log("api", data);
          setProducts(data);
        }
      })
      .catch((err) => {
        console.log("error while fetching", err);
      });
  }
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <NavBar />
      <div>
        <h1>React Hooks</h1>
        <p>
          React hook Explanation
          <button onClick={() => setIsShowExplnation(!isShowExplnation)}>
            {isShowExplnation ? "Hide" : "Show"}
          </button>
        </p>
        {/* Use State */}
        {isShowExplnation && (
          <>
            <center>
              <h3>UseState</h3>
              <span style={{ display: "block", fontSize: "32px" }}>{data}</span>
              <button onClick={() => setData(data + 1)}>+</button>
              <button onClick={() => setData(0)}>reset</button>
              <button onClick={() => setData(data - 1)}>-</button>
              <div>
                <br></br>
                <img src={photoUseState}></img>
              </div>
            </center>
            <center>
              <h3>UseEffect</h3>
              <p>before that we have to know 4 things</p>
              <p>Handling :object,array</p>
              <p>
                To expand a little further, here are some common examples.
                Starting with:
              </p>
              <p>const [theArray, setTheArray] = useState(initialArray);</p>

              <p>const [theObject, setTheObject] = useState(initialObject);</p>
              {/* Push element at end of array
                
                setTheArray(prevArray => [...prevArray, newValue])
                Push/update element at end of object
                
                setTheObject(prevState => ({ ...prevState, currentOrNewKey: newValue}));
                Push/update element at end of array of objects
                
                setTheArray(prevState => [...prevState, {currentOrNewKey: newValue}]);
                }</p> */}
              <h5>1.Initilizing</h5>
              <ul>
                <li>initial run State</li>
                <li>initial run Props</li>
              </ul>
              <h5>2.Mounting</h5>
              <ul>
                <li>it Runs, while loading time only</li>
              </ul>
              <h5>3.Updation</h5>
              <ul>
                <li>it Runs,- while loading time</li>
                <li>it Runs,- and state changing time also</li>
              </ul>
              <h5>4.Unmounting</h5>
              <p>Return ()</p>
              <span>If affect the state directly call in Normal function</span>
            </center>
          </>
        )}
        {toggle ? (
          <div>
            <h4>
              Expanation of Initialing, mounting , updation and unmounting
            </h4>
            <button onClick={handleToggle}>Hide</button>
            <Timer />
          </div>
        ) : (
          <div>
            <h1>See the Explation</h1>
            <p></p>
            <button onClick={handleToggle}>Show</button>
          </div>
        )}
        {/* use Effect mounting the fetch data */}
        <div className="card-components">
          {products.map((product, indx) => (
            <div key={indx}>
              <MuiCard data={product} cartUpdate={handleCartData} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

function Timer() {
  // iunitilization{setting stae amd props}
  const [initial, setInitial] = useState("Initial setting");
  const [mount, setMount] = useState("");
  const [updation, setUpdation] = useState("");
  const [unmount, setUnmount] = useState("");
  const [count, setCount] = useState(0);

  const timing = 2000;

  useEffect(() => {
    // mounting;
    console.log("Mounting the component");
    setMount("Mounting the component");
    // updation
    const interval = setInterval(() => {
      console.log("updation the component");
      setCount((prev) => prev + 1);
      setUpdation(`updation`);
    }, timing);

    // unmounting - for unmount use return
    return () => {
      console.log("Unmounting, we doesn't see that in the page while time is come to zero");
      setUnmount("Unmounting we doesn't, the time is come to zero");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h4>{initial}</h4>
      <p>Initial setting state amd props</p>
      <hr />
      <h4>{mount}</h4>
      <p>Mounting in initial </p>
      <hr />
      <h1>Timer :{count}</h1>
      <h4>
        {updation}:{count} for every {timing / 1000}sec{" "}
      </h4>
      <p>updation using setInterval its call every end of the time </p>
      <hr />
      <h4>{unmount}</h4>
      <p>UnMounting the component </p>
    </div>
  );
}

const MuiCard = ({ data = {}, cartUpdate = () => {} }) => {
  const [isBtnToggle, setIsBtnToggle] = useState(false);
  const [cartData, setCartData] = useState({});

  function handleAddToCourt(data) {
    setCartData(data);
    cartUpdate(data);
  }

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "gray" }}>
      <CardMedia
        sx={{ height: 140, objectFit: "contain" }}
        image={data.image}
        title={data.title || "green iguana"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography gutterBottom variant="h6" fontWeight="bold" component="div">
          {data.category}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {"Rs." + data.price}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button variant="contained" color="primary">
          Favor
        </Button> */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleAddToCourt(data)}
        >
          Add To CarT
        </Button>
      </CardActions>
    </Card>
  );
  1;
};

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
            <div>Product Items</div>
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
