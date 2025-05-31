import CaptionCarousel from "../layout/cards/CarouselCard";
import PhotoCard from "../layout/cards/PhotoCard";
import observatoryWinter from "../../assets/images/observatoryWinter.jpg";
import observatoryExploring from "../../assets/images/observatoryExploring.jpg";
import {
  Button,
  Card,
  Heading,
  Container,
  Flex,
  Stack,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Container pt="8">
      <Stack gap={{ mdDown: "4", md: "10" }}>
        <Heading size="3xl">Home</Heading>

        <Flex
          justify="center"
          alignItems="center"
          gap={4}
          wrap="wrap"
          direction={{ base: "column", md: "row" }}
        >
          <PhotoCard src={observatoryWinter} alt="Observatory in winter" />
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
        <Flex justify="center" alignItems="center">
          <PhotoCard src="" />
        </Flex>

        <Flex
          justify="center"
          alignItems="center"
          gap={4}
          wrap="wrap"
          direction={{ base: "column", md: "row" }}
        >
          <Card.Root padding={2} gap={4} w={{ base: "100%", md: "48%" }}>
            <Card.Title mt="2">Reserve Your Night Under the Stars</Card.Title>
            <Card.Description>
              Join us for an unforgettable stargazing experience at our
              volunteer-run observatory. Enjoy short films, a guided astronomy
              talk, and telescope viewing through our 16” dome. Meetups vary by
              season, and visits last about 1.5 to 2 hours.
            </Card.Description>
            <Card.Description>
              Spots are limited, and reservations help us prepare the best
              experience for you. Admission is free, donations are appreciated
              and support local science students.
            </Card.Description>
            <Card.Footer>
              <Button>Make a reservation</Button>
            </Card.Footer>
          </Card.Root>
          <Card.Root
            maxH={"450px"}
            padding={2}
            gap={4}
            w={{ base: "100%", md: "48%" }}
          >
            <CaptionCarousel />
          </Card.Root>
        </Flex>
        <Flex
          justify="center"
          alignItems="center"
          gap={4}
          wrap="wrap"
          direction={{ base: "column", md: "row" }}
        >
          <PhotoCard
            src={observatoryExploring}
            alt="Observatory with children learning"
          />
          <Card.Root padding={2} gap={4} w={{ base: "100%", md: "48%" }}>
            <Card.Title>Support the Observatory</Card.Title>
            <Card.Description>
              The Estes Park Memorial Observatory runs entirely on donations
              through the Angels Above Foundation, a 501(c)(3) nonprofit. Every
              dollar goes directly toward maintaining and improving the
              observatory—our team is 100% volunteer-based.
            </Card.Description>
            <Card.Description>
              Ways to Give: Donate via PayPal – Easy, secure, and fully
              tax-deductible. Buy a Brick – Personalize a piece of our Human
              Sundial Project. Visit our gift shop for EPMO tees, mugs, and
              more.
            </Card.Description>
            <Card.Description>
              Your support helps inspire wonder, curiosity, and science
              education in our community.
            </Card.Description>
            <Card.Footer>
              <Button>Learn More</Button>
            </Card.Footer>
          </Card.Root>
        </Flex>
      </Stack>
    </Container>
  );
};
export default Home;
