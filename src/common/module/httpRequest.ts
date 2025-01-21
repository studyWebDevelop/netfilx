import axios from "axios";

const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_MOVIE_API,
  params: {
    api_key: import.meta.env.VITE_MOVIE_API_KEY,
    language: "ko-KR",
  },
});

export { httpRequest };
