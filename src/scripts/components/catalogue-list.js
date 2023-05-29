/* eslint-disable linebreak-style */
import './catalogue-item';

class CatalogueList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._restaurants.forEach((restaurant) => {
      const restaurantElementItem = document.createElement('catalogue-item');
      restaurantElementItem.restaurant = restaurant;
      this.appendChild(restaurantElementItem);
    });
  }
}
customElements.define('catalogue-list', CatalogueList);
