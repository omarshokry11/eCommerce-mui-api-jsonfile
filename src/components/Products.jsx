import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Link,
} from "@mui/material";

export default function Products({ products }) {
  return (
    <Box
      flex={{ sm: 5, xl: 5 }}
      sx={{
        height: "calc(100vh - 70px)",
        overflow: "auto",
        padding: "10px 20px",
      }}
    >
      <Grid container spacing="15px">
        {products.map((product) => (
          <Grid item xs={12} sm={6} lg={4} xl={3} key={product.id}>
            <Card elevation={5}>
              <CardMedia
                bgcolor="#FFF"
                component="img"
                image={product.image}
                alt="Product Image"
              />
              <CardContent
                sx={{ height: "120px", borderTop: "2px solid #7F1832" }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: {
                      xs: "17px",
                      sm: "14px",
                      lg: "14px",
                      xl: "17px",
                    },
                  }}
                  fontWeight={500}
                  fontFamily="Oswald"
                  textAlign="center"
                >
                  {product.title.length > 50
                    ? product.title.substr(0, 30) + "..."
                    : product.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "12px",
                      lg: "13px",
                      xl: "15px",
                    },
                  }}
                  fontWeight="normal"
                  fontFamily="Oswald"
                  color="gray"
                >
                  {product.description.length > 100
                    ? product.description.substr(0, 70) + "..."
                    : product.description}
                </Typography>
                <Typography
                  fontSize="17px"
                  fontWeight={500}
                  fontFamily="Oswald"
                  color="#7F1832"
                  textAlign="right"
                >
                  {product.price}$
                </Typography>
              </CardContent>
              <Link
                bgcolor="red"
                color="#FFF"
                borderRadius={2}
                underline="none"
                href={`/${product.id}`}
                width={{ xs: "94%", sm: "92%", lg: "94%" }}
                textAlign="center"
                p="5px"
                fontSize={18}
                fontFamily="Oswald"
                display="block"
                margin="10px"
                fontWeight={500}
              >
                Go To Cart
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
