import { useSearchMovieData, useSearchMovie } from "./hooks/useSearchMovie";
import type { ISearchMovieDetail } from "./interface/SearchMovieDetail.interface";
import st from "./SearchMovie.module.scss";

const SearchMovie = () => {
  const { keyword } = useSearchMovie();
  const { data: searchResults } = useSearchMovieData(String(keyword));

  return (
    <section className={st.container}>
      {searchResults && searchResults.length > 0 ? (
        <div className={st.searchContainer}>
          {searchResults.map((movie: ISearchMovieDetail) => {
            if (movie.backdrop_path !== null && movie.media_type !== "person") {
              const movieImageUrl =
                "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;

              return (
                <div className={st.movieDetailWrapper}>
                  <div className={st.moviePosterWrapper}>
                    <img
                      className={st.moviePoster}
                      src={movieImageUrl}
                      alt="poster"
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <div className={st.noResultContainer}>
          <div className={st.noResultText}>
            <p>찾고자하는 검색어 "{keyword}"에 맞는 영화가 없습니다.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default SearchMovie;
