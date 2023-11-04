import {
  Stack,
  Drawer,
  Box,
  Button,
  IconButton,
  ButtonGroup,
  Typography,
  styled,
  InputBase,
} from "@mui/material";
import {
  WhatsApp,
  Facebook,
  Instagram,
  LinkedIn,
  YouTube,
  Menu,
  Close,
  Search as SearchIcon,
} from "@mui/icons-material";
import { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "5px",
  backgroundColor: "gray",
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  width: "12%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#FFF",
  width: "85%",
  marginLeft: "25px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 0),
  },
}));

export default function Dropdown({
  getProductsCategory,
  getProducts,
  categories,
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Box position="absolute" right={10} top={5} zIndex={10000}>
        {isDrawerOpen ? (
          <Box position="absolute" right={10} top={5}>
            <Close color="red" onClick={() => setIsDrawerOpen(false)} />
          </Box>
        ) : (
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="logo"
            onClick={() => setIsDrawerOpen(true)}
          >
            <Menu color="red" />
          </IconButton>
        )}
      </Box>
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        <Box
          p={2}
          width="100%"
          height={470}
          textAlign="center"
          role="presentation"
        >
          <Box mt={5} mb={2}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon color="#FFF" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <Stack direction="column" spacing={2}>
            <Button
              variant="contained"
              color="error"
              sx={{
                minWidth: { sm: "180px", md: "220px", lg: "290px" },
              }}
              onClick={() => {
                getProducts();
              }}
            >
              All
            </Button>
            {categories.map((cat) => {
              return (
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    minWidth: { sm: "180px", md: "220px", lg: "290px" },
                  }}
                  key={cat}
                  onClick={() => {
                    getProductsCategory(cat);
                  }}
                >
                  {cat}
                </Button>
              );
            })}
          </Stack>
          <Box mt={2}>
            <Typography
              fontFamily="Oswald"
              variant="h5"
              fontSize="18px"
              fontWeight={500}
              mb={1}
              bgcolor="#ccc"
              borderRadius={5}
              width="170px"
              margin="10px auto"
              padding="2px 0"
              textAlign="center"
            >
              Contact US
            </Typography>
            <ButtonGroup>
              <IconButton size="small">
                <Facebook />
              </IconButton>
              <IconButton size="small">
                <Instagram />
              </IconButton>
              <IconButton size="small">
                <WhatsApp />
              </IconButton>
              <IconButton size="small">
                <LinkedIn />
              </IconButton>
              <IconButton size="small">
                <YouTube />
              </IconButton>
            </ButtonGroup>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
