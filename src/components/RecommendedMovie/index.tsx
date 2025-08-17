import type { RecommendedMovieProps } from "../../types";
import {
  Button,
  ButtonContainer,
  Category,
  PrimaryButton,
  RecommendedContainer,
  Text,
  Title,
} from "./styled";
import { secondsToHms } from "../../helpers";

const RecommendedMovie: React.FC<RecommendedMovieProps> = ({
  selectedMoves,
}) => {
  return (
    <RecommendedContainer>
      <Category>{selectedMoves?.Category}</Category>
      <Title>{selectedMoves?.Title}</Title>
      <div className="textContainer">
        <Text>{selectedMoves?.ReleaseYear}</Text>
        <Text>{selectedMoves?.MpaRating}</Text>
        <Text>{secondsToHms(selectedMoves?.Duration || "")}</Text>
      </div>
      <Text style={{ color: "#F1F1F1", width: "100%" }}>
        {selectedMoves?.Description}
      </Text>
      <ButtonContainer>
        <Button>Play</Button>
        <PrimaryButton>More Info</PrimaryButton>
      </ButtonContainer>
    </RecommendedContainer>
  );
};

export default RecommendedMovie;
