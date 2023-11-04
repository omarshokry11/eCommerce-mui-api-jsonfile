import {
  Stack,
  Box,
  styled,
  InputBase,
  Button,
  Typography,
  IconButton,
  ButtonGroup,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  WhatsApp,
  Facebook,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "5px",
  backgroundColor: "gray",
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#FFF",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "10ch",
      "&:focus": {
        width: "14ch",
      },
    },
    [theme.breakpoints.up("md")]: {
      width: "24ch",
      "&:focus": {
        width: "24ch",
      },
    },
  },
}));

export default function Sidebar({
  getProductsCategory,
  getProducts,
  categories,
}) {
  return (
    <Box
      flex={{ sm: 2, xl: 1 }}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
        borderRight: "1px solid #EEE",
        height: "calc(100vh - 70px)",
      }}
      position="relative"
    >
      <Stack
        position="fixed"
        height="100%"
        direction="column"
        spacing={{ sm: 25, md: 7, lg: 15, xl: 25 }}
        p="25px 10px"
      >
        <Box>
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
        <Stack direction="column" spacing={3}>
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
      </Stack>
      <Box position="absolute" bottom={30} left={15}>
        <Typography
          fontFamily="Oswald"
          variant="h5"
          fontSize="18px"
          fontWeight={500}
          mb={1}
          bgcolor="#ccc"
          borderRadius={5}
          padding="3px 70px 3px 20px"
          width="fit-content"
        >
          Contact US
        </Typography>
        <ButtonGroup>
          <IconButton size="small" color="#7F1832 !important">
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
  );
}
