



function NavBar({countProduct=0}) {
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

  export default NavBar