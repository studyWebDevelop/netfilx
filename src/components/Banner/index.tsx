import { useBanner, useMoviePlayingOne } from "./hooks/useBanner";
import DefaultBanner from "./components/DefaultBanner";
import PlayingMovieBanner from "./components/PlayMovieBanner";

const Banner = () => {
  const { isClick, selectedMovie, handlePlayMovie } = useBanner();
  const { data: movieOne } = useMoviePlayingOne();

  return (
    <>
      {isClick && selectedMovie ? (
        <PlayingMovieBanner {...(selectedMovie as any)} />
      ) : (
        <DefaultBanner
          {...movieOne}
          handlePlayMovie={() => handlePlayMovie(movieOne)}
        />
      )}
    </>
  );
};

export default Banner;
