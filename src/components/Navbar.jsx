import {
  AppBar,
  Box,
  Stack,
  Toolbar,
  IconButton,
  Switch,
  Container,
  Link,
  Typography,
} from "@mui/material";
import {
  AccountCircle,
  ShoppingCart,
  WbSunny,
  NightlightRound,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import Cart from "./Cart";
import axios from "axios";

export default function Navbar({ mode, setMode }) {
  const [cart, setCart] = useState(false);

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(" http://localhost:9000/cart").then((res) => setItems(res.data));
  }, [items]);

  return (
    <Stack sx={{ marginBottom: "60px", height: "10px" }}>
      <AppBar position="fixed" sx={{ bgcolor: "#000" }} elevation={0}>
        <Container maxWidth="xl">
          <Toolbar>
            <Link
              href="/"
              underline="none"
              sx={{
                fontFamily: "Oswald",
                fontSize: { xs: "15px", sm: "25px", md: "30px" },
                fontWeight: 500,
                cursor: "pointer",
                color: "#FFF",
              }}
            >
              eCommerce
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconButton
                size="small"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={() => setCart(!cart)}
                onClose={() => setCart(false)}
              >
                <ShoppingCart />
                <Typography
                  variant="span"
                  display="block"
                  position="absolute"
                  top={0}
                  right={0}
                  fontSize="14px"
                  fontWeight={500}
                  bgcolor="#FFF"
                  borderRadius="50%"
                  width="17px"
                  height="17px"
                  lineHeight="17px"
                  textAlign="center"
                  color="#000"
                  fontFamily="Oswald"
                >
                  {items ? items.length : 2}
                </Typography>
              </IconButton>
            </Box>
            <Box>
              <IconButton
                size="small"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box bgcolor="#212121" borderRadius={5} ml={1} mr={1}>
              <IconButton size="small" color="inherit">
                {mode === "light" ? <NightlightRound /> : <WbSunny />}
              </IconButton>
              <Switch
                onChange={() => setMode(mode === "light" ? "dark" : "light")}
              />
            </Box>
          </Toolbar>
          {cart && (
            <Box
              position="absolute"
              right={{ xs: 18, sm: 20, md: 150 }}
              top={60}
              width={{ xs: "90%", sm: 400, md: 380 }}
            >
              <Cart />
            </Box>
          )}
        </Container>
      </AppBar>
    </Stack>
  );
}
