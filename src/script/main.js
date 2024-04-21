import "./component/movie-list";
import movieController from "./controller/movie-controller.js";

const main = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const sectionSearch = document.querySelector("#section-search");
    const movieListNow = document.querySelector("#movie-list-now");
    const movieListSearch = document.querySelector("#movie-list-search");
    const movieListPopular = document.querySelector("#movie-list-popular");
    const inputMovie = document.querySelector("#inputMovie");
    const submitSearch = document.querySelector("form");

    movieController.getMovieNow(movieListNow);
    movieController.getMoviePopular(movieListPopular);

    submitSearch.addEventListener("submit", function (event) {
      event.preventDefault();
      const movieResult = inputMovie.value;
      sectionSearch.removeAttribute("hidden");
      movieController.searchMovie(movieResult, movieListSearch);
    });
  });
};

export default main;
