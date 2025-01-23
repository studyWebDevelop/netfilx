import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import { movieDetail } from "../../../service/fetchMovie";

const queryKey = createQueryKeys("movie", {
  movieDetail: (id: number) => [id],
});

const useDetailMovie = (id: number) => {
  return useQuery({
    ...queryKey.movieDetail(id),
    queryFn: () => movieDetail(id),
  });
};

export { useDetailMovie };
