//fix CaptionCarouselCardProjects captions
import {
  Card,
  Stack,
  Flex,
  Container,
  Heading,
  Button,
} from "@chakra-ui/react";
import CaptionCarouselProjects from "../layout/cards/CarouselCardProjects";
import CaptionCarousel from "../layout/cards/CarouselCard";
import memberAstroPhotosData from "../../assets/props/memberAstroPhotosData";
import {
  radioTelescopeProjectProps,
  humanSundialProjectProps,
} from "../../assets/props/projectsData";
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
            <CaptionCarouselProjects {...humanSundialProjectProps} />
            <Card.Title>{humanSundialProjectProps.title}</Card.Title>
            <Card.Description>{humanSundialProjectProps.text}</Card.Description>
            <Card.Footer>
              <Button>Buy a Brick</Button>
            </Card.Footer>
          </Card.Root>
          <Card.Root padding={2} gap={4} w={{ base: "100%", md: "100%" }}>
            <CaptionCarouselProjects {...radioTelescopeProjectProps} />
            <Card.Title>{radioTelescopeProjectProps.title}</Card.Title>
            <Card.Description>
              {radioTelescopeProjectProps.text}
            </Card.Description>
          </Card.Root>
          <Card.Root padding={2} gap={4} w={{ base: "100%", md: "100%" }}>
            <CaptionCarousel cards={memberAstroPhotosData} />
            <Card.Title>Member Astrophotography</Card.Title>
            <Card.Description>
              Photographs captured in Estes Park using an 11 inch
              Schmidt-Cassegrain telescope with an SBIG color CCD
            </Card.Description>
          </Card.Root>
          <Card.Root padding={2} gap={4} w={{ base: "100%", md: "100%" }}>
            <Card.Title>
              Asteroid Tracking with Estes Park High School Students
            </Card.Title>
            <Card.Description>
              Under the leadership of physics teacher, Todd Burke, students at
              the Estes Park High School have been participating in an
              international project designed to identify and track near earth
              asteroids. The US branch of the project is sponsored by the
              National Science Foundation (NSF) and uses robotic telescopes
              worldwide to capture multiple images of specific areas of the
              night sky on all clear nights. The images of specific areas are
              taken over several nights and supplied to students over the
              Internet. The students then examine the photographs for objects
              that have moved from night to night. Once an object is identified,
              its coordinates are plugged into software provided by the NSF to
              compute a preliminary track. Those objects that appear to have a
              track that will intersect the earth's orbit are then analyzed by
              professional astronomers to calculate a more refined track and
              assess potential danger of an impact.
            </Card.Description>
          </Card.Root>
          <Flex width={"100%"} justifyContent={"center"}>
            <Card.Root
              padding={2}
              gap={4}
              w={{ base: "100%", md: "100%" }}
              width={"40%"}
              maxW={800}
            >
              <Card.Title>Upcoming EPMO Projects</Card.Title>
              <Card.Description>
                <li>
                  Telescope Upgrade <li>Solar Walk</li>
                  <li>Supernova and Star Spectroscopy</li>
                  <li>Weather Station</li>
                  <li>All Sky Camera</li>
                </li>
              </Card.Description>
            </Card.Root>
          </Flex>
        </Flex>
      </Stack>
    </Container>
  );
};
export default Projects;
