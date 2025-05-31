import { Box, Stack, Heading, Container, Flex } from "@chakra-ui/react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <Box borderTopWidth={1} direction="row" marginTop={10}>
      <Container px={"40px"} padding={3}>
        <Flex justifyContent={"space-between"}>
          <Stack align="flex-start">
            <Heading size="lg">About</Heading>
            <Link style={{ textDecoration: "underline" }} to="/home">
              Home
            </Link>
            <Link style={{ textDecoration: "underline" }} to="/aboutus">
              About Us
            </Link>
            <Link
              //   text-align="left"
              style={{ textDecoration: "underline" }}
              to="/ourobservatory"
            >
              Our Observatory
            </Link>
          </Stack>
          <Stack align="flex-start">
            <Heading size="lg">Visit</Heading>
            <Link style={{ textDecoration: "underline" }} to="/visit">
              Visit
            </Link>
            <Link style={{ textDecoration: "underline" }} to="/projects">
              Projects
            </Link>
            <Link
              //   text-align="left"
              style={{ textDecoration: "underline" }}
              to="/volunteer"
            >
              Volunteer
            </Link>
          </Stack>
          <Stack align="flex-start">
            <Heading size="lg">Contact</Heading>
            <Link style={{ textDecoration: "underline" }} to="/contact">
              Contact
            </Link>
            <Link style={{ textDecoration: "underline" }} to="/donate">
              Donate
            </Link>
            <Link
              //   text-align="left"
              style={{ textDecoration: "underline" }}
              to="/resources"
            >
              Resources
            </Link>
          </Stack>{" "}
        </Flex>
      </Container>
    </Box>
  );
};
export default Footer;
