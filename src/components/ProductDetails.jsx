import {
  Box,
  Stack,
  Typography,
  Container,
  Button,
  Link,
  Avatar,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const baseURL = "https://fakestoreapi.com/products";

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const params = useParams();

  // Add To Cart
  const saveCart = () => {
    fetch("http://localhost:9000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product: product, quantity: quantity }),
    });
  };

  useEffect(() => {
    axios
      .get(`${baseURL}/${params.productId}`)
      .then((res) => setProduct(res.data));
  });

  return (
    <Box
      flex={{ sm: 5, xl: 5 }}
      sx={{
        height: "calc(100vh - 70px)",
        overflow: "auto",
        padding: { sx: 0, lg: "100px 0" },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "column", lg: "row" }}
          alignItems="center"
          textAlign={{ xs: "center", sm: "center", lg: "left" }}
        >
          <Box mr={5}>
            <Avatar src={product.image} alt="Product Image" />
          </Box>
          <Stack direction="column" spacing={0}>
            <Typography
              variant="h5"
              fontFamily="Oswald"
              mb={2}
              color="orangered"
              fontSize={{ xs: "15px", sm: "22px", lg: "25px" }}
              fontWeight={500}
            >
              {product.title}
            </Typography>
            <Typography
              variant="body1"
              fontFamily="Oswald"
              mb={2}
              color="#7F1832"
              fontSize={{ xs: "15px", sm: "18px" }}
              textAlign="left"
            >
              {product.description}
            </Typography>
            <Typography
              textAlign={{ xs: "center", sm: "right" }}
              color="red"
              fontSize={18}
              fontFamily="Oswald"
              fontWeight={500}
              mb={2}
            >
              {Math.ceil(product.price * quantity)}$
            </Typography>
            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              margin={{ xs: "auto", sm: 0 }}
            >
              <Button
                onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
                variant="contained"
              >
                -
              </Button>
              <Typography fontSize="18px" fontWeight={600}>
                {quantity}
              </Typography>
              <Button
                onClick={() => setQuantity(quantity + 1)}
                variant="contained"
              >
                +
              </Button>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button
                sx={{
                  marginTop: "25px",
                  marginBottom: "10px",
                  borderRadius: 2,
                  fontFamily: "Oswald",
                  fontSize: 15,
                  width: "45%",
                }}
                variant="contained"
                color="success"
                onClick={saveCart}
              >
                Add To Cart
              </Button>
              <Link
                width="45%"
                bgcolor="red"
                color="#FFF"
                borderRadius={2}
                underline="none"
                p="5px 0"
                textAlign="center"
                fontSize={18}
                fontFamily="Oswald"
                marginTop="25px"
                marginBottom="10px"
                href="/"
              >
                Back To Home
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
