import { httpRequest } from "../common/module/httpRequest";
import { requests } from "../common/module/requestUrls";

const movieNowPlaying = async () => {
  const response = await httpRequest.get(requests.fetchNowPlaying);
  return response.data;
};

const movieDetails = async (id: number) => {
  const response = await httpRequest.get(`/movie/${id}`, {
    params: {
      append_to_response: "videos",
    },
  });
  return response.data;
};

export { movieNowPlaying, movieDetails };
