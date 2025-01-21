import { useQuery } from "@tanstack/react-query";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { movieDetails, movieNowPlaying } from "../../../service/fetchMovie";

const queryKey = createQueryKeys("movie", {
  // query key를 movie로 그룹화 할 수 있음
  playingNow: null,
  movieDetails: (id: number) => [id],
});

const usePlayingNowMovie = () => {
  return useQuery({
    ...queryKey.playingNow,
    queryFn: () => movieNowPlaying(),
    staleTime: 1000,
  });
};

const useMoviePlayingOne = () => {
  const { data: playingMovie } = usePlayingNowMovie();

  const movieId =
    playingMovie?.results[
      Math.floor(Math.random() * (playingMovie?.results.length / 2))
    ].id;

  return useQuery({
    ...queryKey.movieDetails(movieId),
    queryFn: movieId ? () => movieDetails(movieId) : undefined,
    staleTime: 1000,
  });
};

export { usePlayingNowMovie, useMoviePlayingOne };
