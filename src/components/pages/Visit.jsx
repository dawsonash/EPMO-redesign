//add googleCalendar component
import { Stack, Container, Flex, Heading, Card } from "@chakra-ui/react";

const Visit = () => {
  return (
    <Container pt={"8"}>
      <Stack gap={{ mdDown: "4", md: "10" }}>
        <Heading size={"3xl"}>Visit</Heading>
        <Flex align={"flex-start"} w={"100%"} px={{ sm: 2, md: 4 }}>
          <Heading size={"4xl"}>Schedule</Heading>
        </Flex>
        <Flex
          justify="center"
          alignItems="center"
          gap={4}
          wrap="wrap"
          direction={{ base: "column", md: "row" }}
        >
          <Card.Root>
            <Card.Title>put google calendar here</Card.Title>
          </Card.Root>
        </Flex>
        <Flex
          justify="center"
          alignItems="center"
          gap={4}
          wrap="wrap"
          direction={{ base: "column", md: "row" }}
        >
          <Card.Root>
            <Card.Title>put schedule CTA here</Card.Title>
          </Card.Root>
        </Flex>
        <Flex align={"flex-start"} w={"100%"} px={{ sm: 2, md: 4 }}>
          <Heading size={"4xl"}>Session Details</Heading>
        </Flex>
        <Flex
          justify="center"
          alignItems="center"
          gap={4}
          wrap="wrap"
          direction={{ base: "column", md: "row" }}
        >
          <Card.Root padding={2} gap={4} w={{ base: "100%", md: "100%" }}>
            <Card.Title>Private Stargazing</Card.Title>
            <Card.Description>
              A few hours before your visit, you will receive a text or call to
              confirm if the weather is suitable for stargazing. On the night of
              your visit, we will meet at the observatory around sunset, which
              varies with the time of year. In April, sunset is near 7:00 pm,
              while in June, it can approach 9:00 pm. Once at the observatory,
              please plan for a 1.5 to 2-hour visit.
            </Card.Description>
            <Card.Description>
              During your visit, we offer a variety of activities, including
              videos, an introductory astronomy lecture, and stargazing. We
              start with a tour of the observatory, followed by a couple of
              short movies to set the mood for space exploration. We then
              provide a brief introduction to astronomy and show you on our star
              wall some of the objects we hope to see through our 16” RC dome
              telescope. To ensure everyone has a good experience, we limit the
              dome visit to 14 people at a time. We generally observe for about
              an hour or more, depending on guests’ interests and weather
              conditions.
            </Card.Description>
            <Card.Description>
              There is no charge for the visit, but we operate on visitor
              donations and souvenir sales. Think of your observatory visit as
              akin to spending a couple of hours at a movie theater. We are an
              all-volunteer 501(c)(3) public charity, and all donations are
              tax-deductible. Your contributions help maintain the observatory
              and support the Estes Park High School Science programs. In the
              last four years, we have donated over $40,000 in college
              scholarships for our high school science students.
            </Card.Description>
          </Card.Root>
        </Flex>
        <Flex
          justify="center"
          alignItems="center"
          gap={4}
          wrap="wrap"
          direction={{ base: "column", md: "row" }}
        >
          <Card.Root padding={2} gap={4} w={{ base: "100%", md: "100%" }}>
            <Card.Title>Open House Night</Card.Title>
            <Card.Description>
              In conjunction with the Estes Valley Astronomical Society’s
              monthly meeting, volunteers of the EPMO conduct the observatory
              open house nights, which are free to all, and no reservations are
              necessary. The evening starts with a tour of the facility and an
              introduction to the night’s viewing with a demonstration of the
              observatory’s star wall. We discuss objects we will later view
              with the telescope and point out their locations on our star wall.
              Depending on the number of visitors, we may also set up telescopes
              outside the observatory to supplement the main telescope in the
              dome. Of course, the viewing depends on the night sky, and if it
              is unfavorable, we can show educational videos in our warm room.
            </Card.Description>
            <Card.Description>
              The Open House Nights for 2025 are:
            </Card.Description>
            <Card.Description>
              <li>
                Saturday, March 29th, 7:00 pm
                <li>Saturday, April 26th, 7:00 pm</li>
                <li>Saturday, May 31st, 7:00 pm</li>
              </li>
            </Card.Description>
          </Card.Root>
        </Flex>
        <Flex
          justify="center"
          alignItems="center"
          gap={4}
          wrap="wrap"
          direction={{ base: "column", md: "row" }}
        >
          <Card.Root padding={2} gap={4} w={{ base: "100%", md: "100%" }}>
            <Card.Title>
              Rocky Mountain National Park Astronomy Programs
            </Card.Title>
            <Card.Description>
              Observe the night sky with the help of a park ranger and expert
              volunteer astronomers. Rocky Mountain National Park offers
              bi-weekly Astronomy in the Park programs from June through August.
              A traditional astronomy program is conducted in the Park-n-Ride at
              Bear Lake every other week. It includes a 20 to 30-minute
              interpretive presentation by park rangers, followed by a night of
              observing by local astronomers and park volunteers. Dress warm,
              bring binoculars and a flashlight.
            </Card.Description>
            <Card.Description>
              The 2025 Dates for the Traditional Viewing Program are:
              <li>
                <strong>June 27</strong>
              </li>
              <li>
                <strong>July 18</strong>
              </li>
              <li>
                <strong>July 25 </strong>
              </li>
              <li>
                <strong>August 15</strong>
              </li>
              <li>
                <strong>August 22</strong>
              </li>
            </Card.Description>
            <Card.Description>
              Every other week, the “The Story Behind the Moon & the Stars”
              program will incorporate star lore and activities for families.
              The program will include a constellation tour and viewing with
              binoculars, the naked eye, and possibly telescopes. This program
              will take place at the Moraine Park Visitor Center in the RMNP and
              will last approximately 1 & 1/2 hours.
            </Card.Description>
            <Card.Description>
              Stories Behind the Moon & Stars 2025 Dates
              <li>
                <strong>June 3</strong>
              </li>
              <li>
                <strong>July 1</strong>
              </li>
              <li>
                <strong>July 29</strong>
              </li>
            </Card.Description>
          </Card.Root>
        </Flex>
        <Flex
          justify="center"
          alignItems="center"
          gap={4}
          wrap="wrap"
          direction={{ base: "column", md: "row" }}
        >
          <Card.Root padding={2} gap={4} w={{ base: "100%", md: "100%" }}>
            <Card.Title>This month's EMPO & EVAS Astronomy Lecture</Card.Title>
            <Card.Description>
              The Estes Park Memorial Observatory (EPMO) in conjunction with the
              Estes Valley Astronomical Society (EVAS) holds a joint meeting
              every month that features a lecture on an astronomy topic followed
              by a viewing session. The meetings open with a short discussion of
              the current EVAS business. A short presentation about a star
              currently visible in the night sky precedes the formal lecture for
              the evening. Invited speakers who work in the field of astronomy
              or aerospace generally give the lectures.
            </Card.Description>
          </Card.Root>
        </Flex>
      </Stack>
    </Container>
  );
};
export default Visit;
