//add contact form once created
import {
  Container,
  Box,
  Flex,
  Heading,
  Stack,
  Card,
  Button,
} from "@chakra-ui/react";
import PhotoCard from "../layout/cards/PhotoCard";
import observatoryExploring from "../../assets/images/observatoryExploring.jpg";
import ThomasConnollyPlaque from "../../assets/images/ThomasConnollyPlaque.jpg";
import ChristianConnollyPlaque from "../../assets/images/ChristianConnollyPlaque.jpg";

const AboutUs = () => {
  return (
    <Container pt={"8"}>
      <Stack gap={{ mdDown: "4", md: "10" }}>
        <Heading size={"3xl"}>About Us</Heading>
        <Flex
          justify="center"
          alignItems="center"
          gap={4}
          wrap="wrap"
          direction={{ base: "column", md: "row" }}
        >
          <Card.Root padding={2} gap={4} w={{ base: "100%", md: "48%" }}>
            <Card.Description pb={2}>
              The Estes Park Memorial Observatory (EPMO) is a community resource
              dedicated to fostering scientific education of children in Estes
              Park and serving as an educational venue for the community and
              visitors. EPMO holds events throughout the year in conjunction
              with the local school system, the Estes Valley Astronomical
              Society and the Rocky Mountain National Park.
            </Card.Description>
            <Card.Title>Goals</Card.Title>
            <Card.Description>
              <li>
                To interest kids K-12th grade in math, physics and science{" "}
                <li>To use astronomy as a tool to accomplish these goals</li>
                <li>To make learning a fun experience</li>
                <li>To promote critical thinking about really big things</li>
              </li>
            </Card.Description>
          </Card.Root>
          <PhotoCard
            src={observatoryExploring}
            alt="Learning outside the observatory"
          />
        </Flex>
        <Flex align={"flex-start"} w={"100%"} px={{ sm: 2, md: 4 }}>
          <Heading size={"4xl"}>Angels Above Foundation</Heading>
        </Flex>
        <Flex
          justify="center"
          alignItems="center"
          gap={4}
          wrap="wrap"
          direction={{ base: "column", md: "row" }}
        >
          <PhotoCard src={ThomasConnollyPlaque} alt="Thomas Connolly Plaque" />
          <Card.Root padding={2} gap={4} w={{ base: "100%", md: "48%" }}>
            <Card.Title>Angels Above Foundation</Card.Title>
            <Card.Description>
              The Angels Above Foundation, Inc (AAF). is the operating entity of
              the Estes Park Memorial Observatory (EPMO). The foundation is a
              501c3 corporation dedicated to science education of children and
              the public in general. Donations made to the Foundation are 100%
              tax deductible. All monies donated to the Foundation are used for
              improvements to the observatory and conduct of the observatory's
              goals. No member of the board of directors or associated with the
              Angels Above Foundation receives monetary compensation.
            </Card.Description>
            <Card.Footer>
              <Button>Donate</Button>
            </Card.Footer>
          </Card.Root>
        </Flex>
        <Flex
          justify="center"
          alignItems="center"
          gap={4}
          wrap="wrap"
          direction={{ base: "column", md: "row" }}
        >
          <Card.Root padding={2} gap={4} w={{ base: "100%", md: "48%" }}>
            <Card.Title>History of the Angels Above Foundation</Card.Title>
            <Card.Description>
              The Angels Above Foundation (AAF) is the operating entity of the
              Estes Park Memorial Observatory. It came about as a result of Mike
              and Carole Connolly and Michele Johnson wishing to build an
              observatory in honor of Mike and Carole’s children and Michele’s
              siblings, Thomas and Christian Connolly who died July 2, 2005 in a
              traffic accident. The reason for building an observatory is that
              the Connolly’s all have a background in science, math and
              astronomy. Specifically, Mike, a retired engineer from Lockheed
              Martin Corporation, spent many a night with his children viewing
              stars and planets. Because of this family interest and the tragic
              death of Thomas and Christian, the concept of a memorial
              observatory came into being.
            </Card.Description>
            <Card.Description>
              The IRS designated the AAF as a 501 c3 public charity in January
              2007. The observatory was built in 2008/9 on land donated by the
              Estes Park R-3 School District using funds primarily from a
              bequest of the Connolly family as well as donations from
              individuals and businesses in support of the observatory. The Town
              of Estes Park was also a substantial contributor to the project.
              Once the construction was completed the building was given back to
              the school and a long term lease established between the AAF and
              the school district for use of the building.
            </Card.Description>
            <Card.Description>
              In exchange for the observatory being offered to school district
              students and the general public as an educational resource, the
              school district maintains the building and pays the utilities
              while the AAF is responsible for the telescope equipment and all
              the intellectual property associated with the observatory. The AAF
              is responsible for the day to day operation and all the programs
              put on by observatory.
            </Card.Description>
            <Card.Description>
              The idea of the collaboration between the observatory foundation
              and the school district came about based on a similar agreement
              between the Little Thompson Science Foundation and the Little
              Thompson School District in Berthoud Colorado. That agreement
              resulted in the building of the Little Thompson Observatory (LTO)
              in the late 90,s. The Connolly family visited the LTO back then
              and all agreed that the observatory was a wonderful gift for the
              school and community.
            </Card.Description>
          </Card.Root>
          <PhotoCard
            src={ChristianConnollyPlaque}
            alt="Christian Connolly plaque"
          />
        </Flex>
        <Flex
          justify="center"
          alignItems="center"
          gap={4}
          wrap="wrap"
          direction={{ base: "column", md: "row" }}
        >
          <Card.Root padding={2} gap={4} w={{ base: "100%", md: "48%" }}>
            <Card.Title>Angels Above Board of Directors</Card.Title>
            <Card.Description>
              Mike Connolly, President and co-founder of the project, Aerospace
              Engineer (retired)
            </Card.Description>
            <Card.Description>
              Michele Johnson, Vice-President, project co-founder and Estes Park
              resident
            </Card.Description>
            <Card.Description>
              Mary Ann Varanka-Martin, PhD, Director, Estes Park High School
              Science Teacher (retired)
            </Card.Description>
            <Card.Description>
              David Parker, P.C., Director, Attorney for the Foundation
            </Card.Description>
            <Card.Description>
              RDee Sherrill, Ph.D., Director, Nuclear Chemist (retired), Estes
              Park resident
            </Card.Description>
            <Card.Description>
              Robert Johnson, Ph.D., Director, Biochemist (retired), Estes Park
              resident
            </Card.Description>
            <Card.Description>
              David Hemphill, Director, Estes Park Tax Service, Estes Park
              resident
            </Card.Description>
            <Card.Description>
              Todd Burke, Director, Physics Teacher, Estes Park High School
            </Card.Description>
            <Card.Description>
              Meinte Veldhuis, Director, President Little Thompson Science
              Foundation
            </Card.Description>
            <Card.Description>
              Michael Prochoda, MD, Director, Ophthalmologist Estes Park Medical
              Center
            </Card.Description>
          </Card.Root>
          {/* add contact form here */}
        </Flex>
      </Stack>
    </Container>
  );
};
export default AboutUs;
