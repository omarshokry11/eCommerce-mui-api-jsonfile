import { Stack, createTheme, ThemeProvider, Box } from "@mui/material";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Porducts from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Dropdown from "./components/Dropdown";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    axios.get(api_url).then((res) => setProducts(res.data));
  };

  const getCategories = () => {
    axios.get(`${api_url}/categories`).then((res) => setCategories(res.data));
  };

  const getProductsCategory = (catName) => {
    axios
      .get(`${api_url}/category/${catName}`)
      .then((res) => setProducts(res.data));
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    getProducts();
    getCategories();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      {loading ? (
        <Stack position="absolute" top="50%" left={{ xs: "45%", sm: "50%" }}>
          <CircularProgress
            variant="determinate"
            sx={{
              color: (theme) =>
                theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
            }}
            size={40}
            thickness={4}
            value={100}
          />
          <CircularProgress
            variant="indeterminate"
            disableShrink
            sx={{
              color: (theme) =>
                theme.palette.mode === "light" ? "#7F1832" : "#308fe8",
              animationDuration: "1000ms",
              position: "absolute",
              left: 0,
              [`& .${circularProgressClasses.circle}`]: {
                strokeLinecap: "round",
              },
            }}
            size={40}
            thickness={4}
          />
        </Stack>
      ) : (
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Router>
            <Navbar setMode={setMode} mode={mode} />
            <Stack direction="row">
              <Sidebar
                getProductsCategory={getProductsCategory}
                getProducts={getProducts}
                categories={categories}
              />
              <Box sx={{ display: { sx: "block", sm: "none" } }}>
                <Dropdown
                  getProductsCategory={getProductsCategory}
                  getProducts={getProducts}
                  categories={categories}
                />
              </Box>
              <Routes>
                <Route path="/" element={<Porducts products={products} />} />
                <Route path="/:productId" element={<ProductDetails />} />
              </Routes>
            </Stack>
          </Router>
        </Box>
      )}
    </ThemeProvider>
  );
}
