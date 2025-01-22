import st from "./PlayingMovieBanner.module.scss";

interface IMovie {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
}

interface IPlayingMovieBanner {
  results?: IMovie[];
}
const PlayingMovieBanner = ({ results }: IPlayingMovieBanner) => {
  return (
    <div className={st.container}>
      <iframe
        src={`https://www.youtube.com/embed/${results?.[0].key}?controls=0&autoplay=1&mute=1&playlist=${results?.[0].key}`}
        className={st.iframe}
        allow="autoplay; fullscreen"
      />
    </div>
  );
};

export default PlayingMovieBanner;
