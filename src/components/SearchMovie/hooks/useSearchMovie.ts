import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router";
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
  const getQueryKeyword = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = getQueryKeyword();
  const keyword = useDebounce(String(query.get("q")), 500);

  return { keyword };
};

export { useSearchMovieData, useSearchMovie };
