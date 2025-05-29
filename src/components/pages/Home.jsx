import BaseCard from "../layout/cards/BaseCard";
import PhotoCard from "../layout/cards/PhotoCard";
import { Heading, Container, Flex, Stack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container pt="32px">
      <Stack gap={{ mdDown: "24px", md: "32px" }}>
        <Heading size="3xl">Home</Heading>
        <Flex
          justify="center"
          alignItems="center"
          gap={4}
          wrap="wrap"
          direction={{ base: "column", md: "row" }}
        >
          <PhotoCard
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
            alt="Couch"
          />
          <BaseCard
            title="title"
            text="The Estes Park Memorial Observatory (EPMO) is a community resource dedicated to fostering the scientific education of children in Estes Park and serving as an educational venue for the community and visitors. EPMO holds events throughout the year in conjunction with the local school system, the Estes Valley Astronomical Society, and the Rocky Mountain National Park. 

The observatory schedules private and group viewing sessions and hosts educational lectures on astronomy, cosmology, astrophotography, and special astronomical events such as comet fly-bys and more! We also have fun ongoing projects like our Human Sundial Project. EPMO is currently offering opportunities for volunteers. Just contact us to get involved and learn about our sky along the way! Can’t help? Donate to our Estes Park Observatory and come visit anytime!"
          />
        </Flex>
      </Stack>
    </Container>
  );
};
export default Home;
