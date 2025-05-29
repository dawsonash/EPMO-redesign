import { Box, Flex, Heading, IconButton, Link, Stack } from "@chakra-ui/react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
const NavHeadingLink = ({ to, children }) => (
  <Link>
    <NavLink
      to={to}
      style={({ isActive }) => ({
        textDecoration: isActive ? "underline" : "none",
      })}
    >
      <Heading size="md">{children}</Heading>
    </NavLink>
  </Link>
);

const Header = () => {
  return (
    <Box borderBottomWidth="1px" w="100vw" px="16px" pb="8px">
      <Flex
        direction={{ base: "row", md: "column" }}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
        gap={4}
        paddingTop={{ mdDown: "40px" }}
      >
        <Box w="100%" textAlign={{ base: "left", md: "center" }}>
          <Heading size={{ mdDown: "2xl", md: "4xl" }}>
            Estes Park Memorial Observatory
          </Heading>
        </Box>
        <Box hideBelow="md" px="40px" w="100vw" maxW="8xl">
          <Stack direction="row" justify="space-between">
            <NavHeadingLink to="/home">Home</NavHeadingLink>
            <NavHeadingLink to="/ourobservatory">
              Our Observatory
            </NavHeadingLink>
            <NavHeadingLink to="/aboutus">About Us</NavHeadingLink>
            <NavHeadingLink to="/visit">Visit</NavHeadingLink>
            <NavHeadingLink to="/projects">Projects</NavHeadingLink>
            <NavHeadingLink to="/resources">Resources</NavHeadingLink>
            <NavHeadingLink to="/volunteer">Volunteer</NavHeadingLink>
            <NavHeadingLink to="/donate">Donate</NavHeadingLink>
            <NavHeadingLink to="/contact">Contact</NavHeadingLink>
          </Stack>
        </Box>

        <IconButton hideFrom="md" aria-label="Open menu" color="white" bg="0">
          <MenuIcon fontSize="large" />
        </IconButton>
      </Flex>
    </Box>
  );
};

export default Header;
