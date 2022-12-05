import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import { createMovieItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Favourite Restaurant</h2>
        <div id="movies" class="movies">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const movies = await FavoriteMovieIdb.getAllMovies();
    const moviesContainer = document.querySelector('#movies');
    console.log(movies);
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
      console.log(movie);
    });
  },
};

export default Like;
