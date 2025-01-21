import { useMoviePlayingOne } from "./hooks/useBanner";

const Banner = () => {
  const { data } = useMoviePlayingOne();

  console.log(data);

  return <div></div>;
};

export default Banner;
