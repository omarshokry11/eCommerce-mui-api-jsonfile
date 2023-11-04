import { Stack, Box, Typography, Avatar, Paper, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const total = cart
    .map((item) => Math.ceil(item.product.price * item.quantity))
    .reduce((curr, prev) => curr + prev, 0);

  const getAllCart = () => {
    axios.get("http://localhost:9000/cart").then((res) => setCart(res.data));
  };

  // Delete Product
  const deleteItem = (itemId) => {
    axios
      .delete(`http://localhost:9000/cart/${itemId}`)
      .then((res) => getAllCart(res.data));
  };

  useEffect(() => {
    getAllCart();
  }, []);

  return (
    <Box component={Paper} elevation={10} borderRadius="7px">
      <Stack
        direction="column"
        height={{ xs: "330px", sm: "425px" }}
        overflow="auto"
        p="10px 15px"
      >
        {cart.map((item, index) => (
          <Stack
            p="10px 0"
            direction="row"
            alignItems="center"
            borderBottom="1px solid #ccc"
          >
            <Box width={{ xs: "15%", sm: "14%" }} mr={2}>
              <Avatar
                src={item.product.image}
                alt="Product Image"
                width="10px !important"
                className="cart-img"
              />
            </Box>
            <Box width={{ xs: "85%", sm: "86%" }}>
              <Typography
                variant="h6"
                fontSize={14}
                fontWeight={700}
                fontFamily="Oswald"
              >
                {item.product.title
                  ? item.product.title.slice(0, 20) + "..."
                  : item.product.title}
              </Typography>
              <Typography
                variant="body2"
                color="gray"
                fontFamily="Oswald"
                fontSize={10}
              >
                {item.product.description
                  ? item.product.title.slice(0, 50) + "..."
                  : item.product.description}
              </Typography>
              <Typography
                variant="body2"
                fontWeight={500}
                fontSize={15}
                fontFamily="Oswald"
              >
                {item.quantity}
              </Typography>
              <Typography
                fontFamily="Oswald"
                variant="body1"
                color="#7f1832"
                fontSize={15}
                fontWeight={600}
                textAlign="right"
              >
                {Math.ceil(item.product.price * item.quantity)}
              </Typography>
              <Stack mt={1} spacing={2} direction="row" alignItems="center">
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    fontSize: "10px",
                    width: "30%",
                    fontFamily: "Oswald",
                    height: "20px",
                  }}
                  onClick={() => deleteItem(item.id)}
                >
                  Delete
                </Button>
              </Stack>
            </Box>
          </Stack>
        ))}
      </Stack>
      <Stack height={60} borderTop="1px solid #ccc">
        <Stack
          direction="row"
          spacing={1}
          position="absolute"
          right={20}
          bottom={15}
        >
          <Typography
            textAlign="right"
            variant="h6"
            fontWeight="bold"
            fontSize={17}
            fontFamily="Oswald"
          >
            Total:
          </Typography>
          <Typography
            fontSize={17}
            textAlign="right"
            variant="h6"
            fontWeight="bold"
            color="#7f1832"
            fontFamily="Oswald"
          >
            {total}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
