const apikey = "e6a5872a3617ad29a400e3e2994e4bde";

const APIKEY = "143bebe5e619280a37d188e20fe3a5ad";

const requests = {
  fetchTreding: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetFlixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorroMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanticMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
};

export default requests;
