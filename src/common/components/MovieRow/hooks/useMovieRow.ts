import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import { movieRow } from "../../../../service/fetchMovie";
import { useState } from "react";
import type { IMovieDetail } from "../interface/MovieDetail.interface";

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

const useMovieOne = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movieDetailData, setMovieDetailData] = useState<IMovieDetail>();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // setter를 내보내기 하는 것은 개방 폐쇠 원칙에 위반되는 행동임..
  return {
    isModalOpen,
    movieDetailData,
    setIsModalOpen,
    setMovieDetailData,
    handleOpenModal,
  };
};

export { useMovieRow, useMovieOne };
