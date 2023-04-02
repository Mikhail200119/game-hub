import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const scoreColor = score > 70 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge colorScheme={scoreColor} borderRadius={5}>
      {score}
    </Badge>
  );
};

export default CriticScore;
