/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-unresolved, import/extensions
import CONFIG from '../global/config';

class CatalogueItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const {
      id, name, description, pictureId: gambar, city, rating,
    } = this._restaurant;
    const { BASE_IMAGE_URL } = CONFIG;
    this.innerHTML = /* html */ `
      <article class="catalogue-item">
        <img class="catalogue-item-thumbnail lazyload" tabindex="0" data-src="${BASE_IMAGE_URL + gambar}" alt="${name}">
        <div class="catalogue-item-rating" tabindex="0" aria-label="Rating Bintang ${rating}"><i class="fa-solid fa-star star"></i>${rating}</div>
        <div class="catalogue-item-address" tabindex="0" aria-label="Alamat kota ${city}"><i class="fa-solid fa-location-dot address"></i>Kota ${city}</div>
        <div class="catalogue-item-content">
        <h4 class="catalogue-item-title"><a href="#/detail/${id}">${name}</a></h4>
        <p class="catalogue-item-descriptions" tabindex="0">${description.slice(0, 200)}...</p>
        </div>
      </article>
    `;
  }
}
customElements.define('catalogue-item', CatalogueItem);
