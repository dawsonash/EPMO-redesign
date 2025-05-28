import { Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <Box borderBottomWidth="1px" w="100vw" px="16px" pb="8px">
      <Flex justify="space-between">
        <Heading size="lg" color="white">
          Estes Park Memorial Observatory
        </Heading>
        <IconButton aria-label="Open menu" color="white" bg="0">
          <MenuIcon fontSize="large" />
        </IconButton>
      </Flex>
    </Box>
  );
};

export default Header;
