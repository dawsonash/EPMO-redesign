import { Card, Stack, Flex, Container, Heading } from "@chakra-ui/react";
import CaptionCarouselProjects from "../layout/cards/CarouselCardProjects";
import humanSundialProjectProps from "../../assets/props/projectsData";

const Projects = () => {
  return (
    <Container pt={"8"}>
      <Stack gap={{ mdDown: "4", md: "10" }}>
        <Heading size={"3xl"}>Projects</Heading>
        <Flex
          justify="center"
          alignItems="center"
          gap={4}
          wrap="wrap"
          direction={{ base: "column", md: "row" }}
        >
          <Card.Root padding={2} gap={4} w={{ base: "100%", md: "100%" }}>
            <CaptionCarouselProjects {...humanSundialProjectProps.image} />
            <Card.Title>{humanSundialProjectProps.title}</Card.Title>
            <Card.Description>{humanSundialProjectProps.text}</Card.Description>
          </Card.Root>
        </Flex>
      </Stack>
    </Container>
  );
};
export default Projects;
