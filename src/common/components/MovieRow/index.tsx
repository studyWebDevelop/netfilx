import clsx from "clsx";
import { useMovieOne, useMovieRow } from "./hooks/useMovieRow";
import st from "./MovieRow.module.scss";
import ModalPortal from "../../helpers/ModalPortal";
import MovieDetail from "../MovieDetail";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

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
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            1378: {
              slidesPerView: 6,
              slidesPerGroup: 6,
            },
            998: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
            625: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            0: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
        >
          <div id={id} className={st.moviePosters}>
            {movies?.map((movie: any) => (
              <SwiperSlide>
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
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
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
