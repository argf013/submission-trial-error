Feature('Liking Movies');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

// const firstCondition = "You don't have any Favorite Cafe or Restaurant";

Scenario('showing empty liked movies', ({ I }) => {
  I.seeElement('#movies');
  // I.see(firstCondition, '#movies');
});

// Scenario('liking one movie', ({ I }) => {
//   I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');

//   I.amOnPage('/');
// });