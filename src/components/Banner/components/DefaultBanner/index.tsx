import st from "./DefaultBanner.module.scss";

import { omitDescription } from "./utils";

interface IDefaultBanner {
  handlePlayMovie: () => void;
  title?: string;
  name?: string;
  original_name?: string;
  overview: string;
  backdrop_path: string;
}

const DefaultBanner = ({
  title,
  name,
  original_name,
  overview,
  backdrop_path,
  handlePlayMovie,
}: IDefaultBanner) => {
  return (
    <div
      className={st.banner}
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${backdrop_path}')`,
      }}
    >
      <div className={st.contentsWrapper}>
        <h1 className={st.title}>{title || name || original_name}</h1>
        <div className={st.buttonsWrapper}>
          <button
            type="button"
            className={st.playButton}
            onClick={handlePlayMovie}
          >
            재생
          </button>
          <button type="button" className={st.infoButton}>
            상세 정보
          </button>
        </div>
        <h1 className={st.bannerDescription}>{omitDescription(overview)}</h1>
      </div>
    </div>
  );
};

export default DefaultBanner;
