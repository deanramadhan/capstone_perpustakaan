import CONFIG from '../../globals/config';

const createRestaurantDetail = (restaurant) => `
    <div id="contentdetail" class="contentdetail">
        <img class="image_detail" crossorigin="anonymous" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
        <div class="restaurant_info_detail">
                <h2 class="detail_title">${restaurant.name}</h2>
            <div class="info_list">
                <h4>Kota</h4>
                <p class="info_city">${restaurant.city}<p>
                <h4>Alamat</h4>
                <p class="info_address">${restaurant.address}<p>
                <h4>Rating</h4>
                <p class="info_rate">⭐${restaurant.rating}/5<p>
                <h4>Deskripsi</h4>
                <p class="info_desc">${restaurant.description}</p>
            </div>
            <h2 class="detail_title">Menu</h2>
            <div class="restaurant_menu">
                <div class="foods_detail">
                <h4 class="menu_title">Foods</h4>
                <ul>
                    ${restaurant.menus.foods.map((food) => `<li class="list">${food.name}</li>`).join('')}
                </ul>
                </div>
                <div class="drinks_detail">
                <h4 class="menu_title">Drinks</h4>
                <ul>
                    ${restaurant.menus.drinks.map((drink) => `<li class="list">${drink.name}</li>`).join('')}</p>
                </ul>
                </div>
            </div>
            <p tabindex="0" class="reviews_title">Customer Reviews</p>
            <div class="reviews">
                ${restaurant.customerReviews.map((review) => `
          <div tabindex="0" class="resto_reviews">
            <p tabindex="0" class="name_customer">${review.name}</p>
            <p tabindex="0" class="review_customer">${review.review}</p>
            <p tabindex="0" class="review_date">${review.date}</p>
          </div>
        `).join('')}
                </div>
            </div>
        </div>
    

    <section class="input_section" id="addReview" tabindex="0">
    <div class="form_review">
      <h2>Add Review</h2>
      <form id="inputReview">
        <div class="input">
          <label for="inputName">Name</label>
          <input
            id="inputName"
            name="inputName"
            type="text"
            required
            placeholder="Name..."
          />
        </div>
        <div class="input">
          <label for="inputReview">Review</label>
          <textarea
            name="inputReview"
            id="inputReview"
            placeholder="Review..."
            required
          ></textarea>
        </div>
        <button id="ReviewSubmit" type="submit">Add Review</button>
      </form>
    </div>
  </section>
  </div>

    `;

const createRestaurantItem = (r) => `
  <div class="card" id="${r.id}">
    <a href="/#/detail/${r.id}" class="card-myimg">
      <img src="https://restaurant-api.dicoding.dev/images/medium/${r.pictureId}" class="card-myimg" crossorigin="anonymous" alt="${r.name}" />
      <div class="card-myresto">
        <div class="card-myhead">
        <svg class="mycard-arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
          <div class="rat-mycard">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 card__thumb">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <p>${r.rating}</p>
          </div>
          <div class="card__header-text">
            <h3 class="card-mytitle">${r.name}</h3>
            <span class="card-stye">${r.city}</span>
          </div>
        </div>
        <div class="mydetails-card">
          <p class="mydect-card">${r.description}</p>
        </div>
      </div>
    </a>
  </div>
    `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItem,
  createRestaurantDetail,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
