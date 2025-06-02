import {
  Container,
  Stack,
  Heading,
  Card,
  Flex,
  Image,
  Box,
} from "@chakra-ui/react";
import PhotoCard from "../layout/cards/PhotoCard";
import observatoryClassroom from "../../assets/images/observatoryClassroom.jpg";
import observatorySummer from "../../assets/images/observatorySummer.jpg";
import telescope from "../../assets/images/telescope.jpg";

const OurObservatory = () => {
  return (
    <Container pt={"8"}>
      <Stack gap={{ mdDown: "4", md: "10" }}>
        <Heading size={"3xl"}>Our Observatory</Heading>
        <Flex
          justify="center"
          alignItems="center"
          gap={4}
          wrap="wrap"
          direction={{ base: "column", md: "row" }}
        >
          <PhotoCard src={observatorySummer} alt="Observatory in winter" />
          <Card.Root padding={2} gap={4} w={{ base: "100%", md: "48%" }}>
            <Card.Title mt="2">Welcome</Card.Title>
            <Card.Description>
              The Estes Park Memorial Observatory (EPMO) is a community resource
              dedicated to fostering the scientific education of children in
              Estes Park and serving as an educational venue for the community
              and visitors. EPMO holds events throughout the year in conjunction
              with the local school system, the Estes Valley Astronomical
              Society, and the Rocky Mountain National Park.
            </Card.Description>
            <Card.Description>
              The observatory schedules private and group viewing sessions and
              hosts educational lectures on astronomy, cosmology,
              astrophotography, and special astronomical events such as comet
              fly-bys and more! We also have fun ongoing projects like our Human
              Sundial Project. EPMO is currently offering opportunities for
              volunteers. Just contact us to get involved and learn about our
              sky along the way! Can’t help? Donate to our Estes Park
              Observatory and come visit anytime!
            </Card.Description>
            <Card.Footer />
          </Card.Root>
        </Flex>
        <Flex align={"flex-start"} w={"100%"} px={{ sm: 2, md: 4 }}>
          <Heading size={"4xl"}>Equipment</Heading>
        </Flex>
        <Flex
          justify="center"
          alignItems="center"
          gap={4}
          wrap="wrap"
          direction={{ base: "column", md: "row" }}
        >
          <Card.Root
            gap={2}
            w={{ base: "100%", md: "48%" }}
            overflow="hidden"
            p={2}
          >
            <Image
              src={observatoryClassroom}
              alt="Classroom in observatory"
              rounded={"md"}
            />
            <Card.Title>Facility</Card.Title>
            <Card.Description>
              <Box spacing={2} styleType="disc" pl={4}>
                <li>60′ x 40′ warm room/conference area</li>
                <li>16′ diameter observatory dome</li>
                <li>Concrete & steel pier for telescope mount</li>
                <li>Small office, workshop, storage & lavatory</li>
                <li>Constellation star wall</li>
                <li>State-of-the-art audio/visual and Internet equipment</li>
              </Box>
            </Card.Description>
          </Card.Root>
          <Card.Root w={{ base: "100%", md: "48%" }} overflow="hidden" p={2}>
            <Image
              src={telescope}
              alt="Classroom in observatory"
              rounded="md"
            />
            <Card.Title>Telescope</Card.Title>
            <Card.Description>
              <li>
                16 inch Ritchey-Chretien f/8 Telescope
                <li>Paramount ME II Telescope Mount</li>
                <li>
                  SkyX Professional Edition Astronomy Software running on
                  state-of-the-art PC
                </li>
                <li>
                  Computer control of telescope, mount and dome, adaptable to
                  remote operation
                </li>
                <li>TV projection from telescope to classroom monitors</li>
              </li>
            </Card.Description>
          </Card.Root>
        </Flex>
      </Stack>
    </Container>
  );
};
export default OurObservatory;
