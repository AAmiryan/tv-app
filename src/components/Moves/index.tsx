import { useCallback, useEffect, useState } from "react";

import { Container, MovesDescriptionContainer } from "./styled";
import type { IFeatured, IHomeData, ITrendingItem } from "../../types";
import RecommendedMovie from "../RecommendedMovie";
import TrendingNow from "../TrendingNow";
import VideoPlayer from "../VideoPlayer";
import { sortByLastClicked } from "../../helpers";

const Moves: React.FC = () => {
  const [data, setData] = useState<IHomeData>();
  const [sortedMoves, setSortedMoves] = useState<ITrendingItem[]>([]);
  const [selectedMove, setSelectedMove] = useState<ITrendingItem | IFeatured>();
  const [showVideo, setShowVideo] = useState(false);
  const [hasClickedMovie, setHasClickedMovie] = useState(false);
  const [timeoutId, setTimeoutId] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const selectedId =
    typeof window !== "undefined" ? sessionStorage.getItem("id") : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const resData: IHomeData = await response.json();
        setData(resData);
      } catch (err) {
        console.error(err);
      }
    };
    void fetchData();
  }, []);

  useEffect(() => {
    if (!data) return;

    const trending = data.TendingNow ?? [];
    const limitedTrending = trending.slice(0, 50);
    const sorted = sortByLastClicked(limitedTrending);

    setSortedMoves(sorted);

    if (!selectedId) {
      setSelectedMove(data.Featured);
      setShowVideo(false);
      setHasClickedMovie(false);
    } else {
      const selectedMovie = trending.find((item) => item.Id === selectedId);
      if (selectedMovie) {
        setSelectedMove(selectedMovie);
        if (!hasClickedMovie) {
          setShowVideo(false);
          setHasClickedMovie(false);
        }
      } else {
        setSelectedMove(data.Featured);
        setShowVideo(false);
        setHasClickedMovie(false);
      }
    }
  }, [data, selectedId]);
  const handleMovieSelect = useCallback(
    (movie: ITrendingItem) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      sessionStorage.setItem("id", movie.Id);
      setSelectedMove(movie);
      setShowVideo(false);
      setHasClickedMovie(true);

      const id = setTimeout(() => {
        setShowVideo(true);
      }, 2000);

      setTimeoutId(id);
    },
    [timeoutId]
  );

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const isTrendingItem = (
    move: IFeatured | ITrendingItem | undefined
  ): move is ITrendingItem => {
    return move !== undefined && "VideoUrl" in move;
  };

  const currentVideoUrl = isTrendingItem(selectedMove)
    ? selectedMove.VideoUrl
    : undefined;

  const shouldShowVideo =
    showVideo && isTrendingItem(selectedMove) && hasClickedMovie;

  return (
    <MovesDescriptionContainer
      bgImage={shouldShowVideo ? undefined : selectedMove?.CoverImage}
    >
      <VideoPlayer videoUrl={currentVideoUrl} isVisible={shouldShowVideo} />

      <Container>
        <RecommendedMovie selectedMoves={selectedMove} />
        <TrendingNow
          data={sortedMoves}
          setSetSelectedMoves={handleMovieSelect}
        />
      </Container>
    </MovesDescriptionContainer>
  );
};

export default Moves;
