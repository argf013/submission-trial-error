import CONFIG from '../../globals/config';

const createMovieDetailTemplate = (movie) => `
<h2 class="movie__title">${movie.restaurant.name}</h2>
<img class="lazyload movie__poster" src="${CONFIG.BASE_IMAGE_URL + movie.restaurant.pictureId}" alt="${movie.restaurant.name}" />
<div class="movie__info">
  <h3>Information</h3>
  <div class="restaurant__description"> 
  <h4>Description</h4>
  <p>${movie.restaurant.description}</p>
  </div>
  <div class="restaurant__menus"> 
  <div class="restaurant__menus__foods"> 
  <h4>Foods Menu</h4>
  ${movie.restaurant.menus.foods.map(({ name }) => `<p>${name}</p>`).join('')}
  </div>
  <div class="restaurant__menus__foods"> 
  <h4>Drinks Menu</h4>
  ${movie.restaurant.menus.drinks.map(({ name }) => `<p>${name}</p>`).join('')}
  </div>
  </div>
  <div class="restaurant__location">
  <div class="restaurant__location__city">
  <h4>City</h4>
  <p>${movie.restaurant.city}</p>
  </div>
  <div class="restaurant__location__address">
  <h4>Address</h4>
  <p>${movie.restaurant.address}</p>
  </div>
  </div>
  <h4>Rating</h4>
  <p>${movie.restaurant.rating} of 5</p>
  <div class="movie__overview">
  <h3>Review</h3>
  ${movie.restaurant.customerReviews
    .map(
      ({ name, date, review }) => `
    <p>Nama: ${name}</p>
    <p>Tanggal: ${date}</p>
    <p>Review: ${review}</p>
    <br />
    `,
    )
    .join('')}
  </div>
  </div>
`;

const createMovieItemTemplate = (movie) => `
  <div class="movie-item">
    <div class="movie-item__header">
    <a href="/#/detail/${movie.id}"><img class="lazyload movie-item__header__poster" alt="${movie.name}"
           src="${CONFIG.BASE_IMAGE_URL + movie.pictureId}"></a>
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${movie.rating}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
      <h3 class="movie__title">${movie.name}</h3>
      <p>${movie.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createMovieDetailTemplate,
  createMovieItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
