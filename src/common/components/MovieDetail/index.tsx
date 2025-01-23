import Modal from "../Modal";
import type { IMovieDetail } from "../MovieRow/interface/MovieDetail.interface";
import st from "./MovieDetail.module.scss";

interface MovieDetailProps extends IMovieDetail {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MovieDetail = ({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setIsModalOpen,
}: MovieDetailProps) => {
  return (
    <Modal className={st.container}>
      <span
        className={st.modalCloseButton}
        onClick={() => setIsModalOpen(false)}
      >
        X
      </span>
      <img
        className={st.modalPosterImage}
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt="poster"
      />
      <div className={st.modalContent}>
        <p className={st.modalDetails}>
          <span className={st.boldText}>추천 영화 </span>
          {release_date ? release_date : first_air_date}
        </p>

        <h2 className={st.title}>{title ? title : name}</h2>
        <p className={st.rate}>
          평점 <span>{Number(vote_average).toFixed(1)}</span>
        </p>
        <p className={st.overview}>{overview}</p>
      </div>
    </Modal>
  );
};

export default MovieDetail;
