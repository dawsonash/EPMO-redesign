import { Card } from "@chakra-ui/react";

const BaseCard = ({ title, text }) => {
  return (
    <Card.Root w={{ base: "100%", md: "48%" }}>
      <Card.Header>
        <Card.Title>{title}</Card.Title>
      </Card.Header>

      <Card.Body>
        <Card.Description>{text}</Card.Description>
      </Card.Body>
    </Card.Root>
  );
};
export default BaseCard;
