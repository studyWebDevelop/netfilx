import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router";
import { searchMovie } from "../../../service/fetchMovie";
import useDebounce from "../../../common/hooks/useDebounce";

const queryKey = createQueryKeys("movie", {
  searchMovie: (query: string) => [query],
});

const useSearchMovieData = (query: string) => {
  return useQuery({
    ...queryKey.searchMovie(query),
    queryFn: () => searchMovie(query),
  });
};

const useSearchMovie = () => {
  const navigate = useNavigate();

  const query = new URLSearchParams(useLocation().search);
  const keyword = useDebounce(String(query.get("q")), 500);

  const handleNavigateDetailPage = (movieId: number) => {
    navigate(`/${movieId}`);
  };

  return { keyword, handleNavigateDetailPage };
};

export { useSearchMovieData, useSearchMovie };
