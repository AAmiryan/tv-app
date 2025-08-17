export interface IFeatured {
  Id: string;
  Title: string;
  CoverImage: string;
  TitleImage: string;
  Date: string;
  ReleaseYear: string;
  MpaRating: string;
  Category: string;
  Duration: string;
  Description: string;
}

export interface ITrendingItem extends IFeatured {
  VideoUrl: string;
}

export interface IHomeData {
  Featured: IFeatured;
  TendingNow: ITrendingItem[];
}

export interface RecommendedMovieProps {
  selectedMoves: IFeatured | ITrendingItem | undefined;
}

export interface TrendingNowProps {
  setSetSelectedMoves: (movie: ITrendingItem) => void;
  data?: ITrendingItem[];
}

export interface VideoPlayerProps {
  videoUrl?: string;
  isVisible: boolean;
}
