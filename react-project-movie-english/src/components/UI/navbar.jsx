import React from "react";
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
  import Badge from "@mui/material/Badge";
  import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
  

function NavBar({ countProduct = 0 }) {
    const navigate = useNavigate();
    return (
            <Box sx={{ display: 'flex' }}>
              <AppBar component="nav">
                <Toolbar>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                  >
                    MUI
                  </Typography>
                  <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                      <Button variant=""  sx={{ color: '#00000' }} onClick={()=>navigate('/')}>
                        Home
                      </Button>
                      <Button  sx={{ color: '#00000' }} onClick={()=>navigate('/taskapp')}>
                        Task
                      </Button>
                      <Button  sx={{ color: '#00000' }} onClick={()=>navigate('/')}>
                        Stats
                      </Button>
                      <Button  sx={{ color: '#00000' }} onClick={()=>navigate('/')}>
                        Add
                      </Button>
                  </Box>
                </Toolbar>
              </AppBar>
              </Box>
    );
  }
  
  export default NavBar