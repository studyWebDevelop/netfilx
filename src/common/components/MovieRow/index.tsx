import clsx from "clsx";
import { useMovieOne, useMovieRow } from "./hooks/useMovieRow";
import st from "./MovieRow.module.scss";
import { scrollY } from "./utils";
import ModalPortal from "../../helpers/ModalPortal";
import MovieDetail from "../MovieDetail";

interface IMovieRow {
  id: string;
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

const MovieRow = ({ id, title, fetchUrl, isLargeRow }: IMovieRow) => {
  const { data: movies } = useMovieRow(fetchUrl);
  const {
    isModalOpen,
    handleOpenModal,
    setIsModalOpen,
    movieDetailData,
    setMovieDetailData,
  } = useMovieOne();

  return (
    <section className={st.container}>
      <h2>{title}</h2>
      <div className={st.sliderWrapper}>
        <div className={st.sliderArrowLeft} onClick={() => scrollY(id, "left")}>
          {"<"}
        </div>
        <div id={id} className={st.moviePosters}>
          {movies?.map((movie: any) => (
            <img
              key={movie.id}
              onClick={() => {
                handleOpenModal();
                setMovieDetailData(movie);
              }}
              className={clsx(
                st.moviePoster,
                isLargeRow && st.movieLargePoster
              )}
              src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
        <div
          className={st.sliderArrowRight}
          onClick={() => scrollY(id, "right")}
        >
          {">"}
        </div>
      </div>

      {isModalOpen && (
        <ModalPortal>
          <MovieDetail setIsModalOpen={setIsModalOpen} {...movieDetailData} />
        </ModalPortal>
      )}
    </section>
  );
};

export default MovieRow;
