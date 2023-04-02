import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return null;
  }

  return (
    <>
      <List>
        {data.map((item) => (
          <ListItem key={item.id} paddingY="5px">
            <HStack>
              <Image
                borderRadius={10}
                boxSize="32px"
                src={getCroppedImageUrl(item.image_background)}
              />
              <Text fontSize="lg" key={item.id}>
                {item.name}
              </Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
