import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source-api';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenterr from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div tabindex="0" class="content">
          <div id="restaurant-detail" class="restaurant-detail">
          </div>
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantDetailContainer = document.querySelector('#restaurant-detail');
    restaurantDetailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    LikeButtonPresenterr.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
