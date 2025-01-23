import { useParams } from "react-router";
import st from "./DetailMovie.module.scss";
import { useDetailMovie } from "./hooks/useDetailMovie";

const DetailMovie = () => {
  const { movieId } = useParams();
  const { data: detailMovie, isLoading } = useDetailMovie(Number(movieId));

  return (
    <section className={st.container}>
      {isLoading ? (
        <div>...isLoading</div>
      ) : (
        <img
          className={st.posterImage}
          src={`https://image.tmdb.org/t/p/original/${
            detailMovie.backdrop_path || detailMovie.poster_path
          }`}
          alt="poster"
        />
      )}
    </section>
  );
};

export default DetailMovie;
