import { Card, Image } from "@chakra-ui/react";

const PhotoCard = ({ src, alt }) => {
  return (
    <Card.Root w={{ base: "100%", md: "48%" }} overflow="hidden" p={2}>
      <Image rounded="md" src={src} alt={alt} />
    </Card.Root>
  );
};
export default PhotoCard;
