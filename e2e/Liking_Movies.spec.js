/* eslint-disable codeceptjs/no-pause-in-scenario */
const assert = require('assert');
const { pause } = require('codeceptjs');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

const firstCondition = 'You dont have any Favorite Cafe or Restaurant';

Scenario('showing empty liked resto', ({ I }) => {
  pause();
  I.seeElement('#movies');
  I.see(firstCondition, '#movies');
});

Scenario('liking one resto', async ({ I }) => {
  pause();
  I.see(firstCondition, '#movies');

  I.amOnPage('/');
  // jika tidak menggunakan pause error
  I.seeElement('.movie-item');
  const firstFilm = locate('.movie-item__header a').first();
  const firstFilmTitle = await I.grabTextFrom('.movie__title');
  I.click(firstFilm);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.movie-item');
  const likedFilmTitle = await I.grabTextFrom('.movie__title');

  assert.strictEqual(firstFilmTitle, likedFilmTitle);
});

Scenario('unliking one resto', async ({ I }) => {
  I.see(firstCondition, '#movies');

  I.amOnPage('/');
  I.seeElement('.movie-item');
  const firstFilm1 = locate('.movie-item__header a').first();
  const firstFilmTitle1 = await I.grabTextFrom('.movie__title');
  I.click(firstFilm1);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.movie-item');
  const likedFilmTitle1 = await I.grabTextFrom('.movie__title');

  assert.strictEqual(firstFilmTitle1, likedFilmTitle1);
  I.click(firstFilm1);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.see(firstCondition, '#movies');
  const likedEmpty = await I.grabTextFrom('#movies');
  assert.strictEqual(likedEmpty, firstCondition);
});
