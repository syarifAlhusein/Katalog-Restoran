/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Liking Restaurants', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurants');

  I.waitForElement('.restaurant-item-title a');

  const firstRestaurant = locate('.restaurant-item-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const likeRestaurantTitle = await I.grabTextFrom('.restaurant-item-title');
  assert.strictEqual(firstRestaurantTitle, likeRestaurantTitle);
});

Scenario('Unliking Restaurant', async ({ I }) => {
  I.seeElement('.restaurants');

  I.waitForElement('.restaurant-item-title a');

  const firstRestaurant = locate('.restaurant-item-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');

  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('.restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item-title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(likedRestaurantTitle);

  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.dontSeeElement('.restaurant-item');
});
