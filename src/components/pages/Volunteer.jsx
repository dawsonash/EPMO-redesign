import { Card, Heading, Flex, Stack, Container } from "@chakra-ui/react";
import ContactForm from "../forms/ContactForm";

const Volunteer = () => {
  return (
    <Container pt={"8"}>
      <Stack gap={{ mdDown: "4", md: "10" }}>
        <Heading size={"3xl"}>Volunteer</Heading>
        <Flex align={"flex-start"} w={"100%"} px={{ sm: 2, md: 4 }}></Flex>
        <Card.Root padding={2} gap={4} w={{ base: "100%" }}>
          <Card.Title>
            Volunteer Opportunities at Estes Park Memorial Observatory
          </Card.Title>
          <Card.Description>
            The Estes Park Memorial Observatory operates through the generous
            contribution of time by a small number of volunteers. Such
            volunteers operate and maintain the dome, telescope and mount as
            well as the classroom, projector and computer systems within the
            observatory. Volunteers conduct private viewing sessions and from
            time-to-time lecture on observatory projects such as
            astrophotography. The volunteers also work with science teachers at
            the Estes Park Schools to assist in educational programs for
            students. The observatory can always use the help of additional
            volunteers and will train individuals on the operation of the
            observatory's equipment.
          </Card.Description>

          <Card.Description>
            If you are interested in volunteering, contact our Director, Mike
            Connolly.
          </Card.Description>
          <ContactForm />
        </Card.Root>
      </Stack>
    </Container>
  );
};
export default Volunteer;
