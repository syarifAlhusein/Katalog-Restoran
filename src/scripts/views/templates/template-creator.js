/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const { BASE_IMAGE_URL } = CONFIG;
const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item">
      <img class="restaurant-item-thumbnail lazyload" tabindex="0" data-src="${BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
      <div class="restaurant-item-rating" tabindex="0" aria-label="Rating Bintang ${restaurant.rating}"><i class="fa-solid"></i>⭐️${restaurant.rating}</div>
      <div class="restaurant-item-content">
        <h4 class="restaurant-item-title"><a class="restaurant-link" href="#/detail/${restaurant.id}">${restaurant.name}</a></h4>
        <p class="restaurant-item-descriptions" tabindex="0">${restaurant.description.slice(0, 200)}...</p>
      </div>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => {
  const {
    name, description, city, address, pictureId, rating,
  } = restaurant;

  return `
  <div class="detail">
    <h2 class="restaurant-title" id="restaurant-title" tabindex="0" aria-label="${name}">${name}</h2>
    <div class="restaurant-detail-section">
      <img class="restaurant-detail-image lazyload" tabindex="0" data-src="${BASE_IMAGE_URL + pictureId}" alt="${name}">
      <div class="restaurant-information">
      <h3>Rating</h3>
      <p tabindex="0" aria-label="rating bintang ${rating}"><i class="fa-regular"></i>⭐️ ${rating}</p>
        <h3>Alamat</h3>
        <p tabindex="0" aria-label="Alamat kota"><i class="fa-sharp fa-solid fa-location-dot"></i> Kota ${city}, ${address}</p>
        
        <h3>Deskripsi</h3>
        <p tabindex="0" aria-label="Deskripsi">${description}</p>
        <h3>Makanan</h3>
        <p tabindex="0" aria-label="Daftar Makanan">${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
        <h3>Minuman</h3>
        <p tabindex="0" aria-label="Daftar Minuman">${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</p>
      </div>
    </div>
    <div class="review-customer">
      <h3 tabindex="0">Review Customer</h3>
      <div class="list-review">
        ${restaurant.customerReviews.map((review) => createItemReviewerCustomer(review)).join('')}
      </div>
    </div>
  </div>
  `;
};

const createItemReviewerCustomer = (review) => /* html */ `
  <div class="item-reviewer">
  <i class="fa-solid fa-circle-user avatar-reviewer"></i>
  <div class="user-reviewer">
    <p tabindex="0" aria-label="${review.name}">${review.name}</p>
    <p tabindex="0" aria-label="${review.date}">${review.date}</p>
    <p tabindex="0" aria-label="${review.review}">${review.review}</p>
    <p tabindex="0"><br></p>
  </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate, createRestaurantDetailTemplate, createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate, createItemReviewerCustomer,
};
