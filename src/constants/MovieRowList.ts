import { requests } from "../common/module/requestUrls";

export const MovieRowList = [
  {
    id: "trending",
    title: "지금 인기있는 영화",
    fetchUrl: requests.fetchTrending,
    isLargeRow: true,
  },
  {
    id: "topRated",
    title: "오늘의 대한민국 영화 TOP 10 영화",
    fetchUrl: requests.fetchTopRated,
  },
  {
    id: "actionMovie",
    title: "액션영화",
    fetchUrl: requests.fetchActionMovies,
  },
  {
    id: "comedyMovie",
    title: "코미디 영화",
    fetchUrl: requests.fetchComedyMovies,
  },
];
