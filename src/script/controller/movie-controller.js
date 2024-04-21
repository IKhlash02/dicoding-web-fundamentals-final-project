const apiKey = "api_key=2174d146bb9c0eab47529b2e77d6b526";
const baseUrl = "https://api.themoviedb.org/3";

const renderResult = (results, movieElement) => {
  movieElement.movies = results;
};

const fallbackResult = (message, movieElement) => {
  movieElement.renderError(message);
};

const getMovieNow = async (movieElement) => {
  try {
    const responseNow = await fetch(`${baseUrl}/movie/now_playing?${apiKey}`);
    const responseNowJson = await responseNow.json();
    const resultsNow = responseNowJson.results;

    renderResult(resultsNow, movieElement);
  } catch (error) {
    fallbackResult(error, movieElement);
  }
};

const getMoviePopular = async (movieElement) => {
  try {
    const responsePopular = await fetch(`${baseUrl}/movie/popular?${apiKey}`);
    const responsePopularJson = await responsePopular.json();
    const resultsPopular = responsePopularJson.results;

    renderResult(resultsPopular, movieElement);
  } catch (error) {
    fallbackResult(error, movieElement);
  }
};

const searchMovie = async (search, movieSearch) => {
  try {
    const response = await fetch(`${baseUrl}/search/movie?query=${search}&include_adult=false&language=en-US&page=1&${apiKey}`);
    const responseJson = await response.json();
    const results = responseJson.results;

    renderResult(results, movieSearch);
  } catch (error) {
    fallbackResult(error);
  }
};

export default {
  getMovieNow,
  getMoviePopular,
  searchMovie,
};
