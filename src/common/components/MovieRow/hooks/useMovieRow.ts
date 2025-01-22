import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import { movieRow } from "../../../../service/fetchMovie";

const queryKey = createQueryKeys("movieRow", {
  movieUrl: (url: string) => [url],
});

const useMovieRow = (url: string) => {
  return useQuery({
    ...queryKey.movieUrl(url),
    queryFn: () => movieRow(url),
    staleTime: 1000,
  });
};

export { useMovieRow };
