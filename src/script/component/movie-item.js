class MovieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: "open" });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDom.innerHTML = `
    <div class="d-flex flex-column" style="gap: 12px; width :150px">
      <img class="object-fit-cover rounded-1" src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" alt="" height="250px" width="150px" style="object-position: center;">
      <p style="color: var(--gray-400, #9CA3AF);
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin:  0px;">${this._movie.release_date}</p>
      <h4 style="color: var(--gray-900, #111827);
        margin: 0px;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;">${this._movie.title}</h4>
  </div>`;
  }
}

customElements.define("movie-item", MovieItem);
