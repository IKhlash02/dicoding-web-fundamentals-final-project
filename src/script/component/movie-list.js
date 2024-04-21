import "./movie-item.js";

class MovieList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
      :host {
        display: flex;
        gap: 40px;
        overflow-x: auto;
        padding-bottom: 10px;
      }

      :host::-webkit-scrollbar {
        
        width: 5px; 
        height: 12px
      }
      
      :host::-webkit-scrollbar-track {
        background-color: #f1f1f1; 
      }
      
      :host::-webkit-scrollbar-thumb {
        background-color: #999; 
        border-radius: 5px; 
      }

      :host::-webkit-scrollbar-thumb:hover {
        background-color: #555;
      }
    </style>
  `;
    this.classList.add("d-flex", "px-3");
    this._movies.forEach((movie) => {
      const movieItemElement = document.createElement("movie-item");

      movieItemElement.movie = movie;
      this.shadowDOM.appendChild(movieItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = "";
    this.shadowDOM.innerHTML += `${message}`;
  }
}

customElements.define("movie-list", MovieList);
