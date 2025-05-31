import { Container, Stack, Heading, Card, Flex } from "@chakra-ui/react";
import PhotoCard from "../layout/cards/PhotoCard";
import observatorySummer from "../../assets/images/observatorySummer.jpg";

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
      </Stack>
    </Container>
  );
};
export default OurObservatory;
