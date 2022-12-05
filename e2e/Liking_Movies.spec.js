Feature('Liking Movies');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked movies', ({ I }) => {
  I.seeElement('#movies');
  I.see('Tidak ada film untuk ditampilkan', '#movies');
});