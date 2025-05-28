import "./App.css";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import { Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import MenuIcon from "@mui/icons-material/Menu";
import { Provider } from "./components/ui/provider";

function App() {
  return (
    <Provider>
      <Header />
      <Home />
    </Provider>
  );
}

export default App;
