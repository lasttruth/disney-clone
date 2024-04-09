import { Axios } from "axios";

const movieBaseUrl = "https://www.themoviedb.org/3";
const api_key = "71398aebd08ebc41983dbb5e0cba9af7";

const getTrendingVideos = Axios.get(
  this.movieBaseUrl + "/trending/all/day?api+key" + api_key
);

export default getTrendingVideos;
