import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../image-url";

interface Props {
  onSelectedGenre: (selectedGenre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
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
              <Button
                onClick={() => onSelectedGenre(item)}
                variant="link"
                fontSize="lg"
                key={item.id}
              >
                {item.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
