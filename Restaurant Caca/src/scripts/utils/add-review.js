import RestaurantSource from '../data/restaurant-source';
import cardReview from '../components/review';

const addReview = async ({ url, name, review }) => {
  const userInputData = {
    id: url,
    name,
    review,
  };

  const reviewContainer = document.querySelector('.card-review');
  const restaurant = await RestaurantSource.addReviewRestaurant(
    userInputData,
  );

  if (restaurant.customerReviews) {
    const newReviews = restaurant.customerReviews
      .map((reviewList) => cardReview(reviewList))
      .join('');

    reviewContainer.innerHTML += newReviews;

    window.location.reload(true);
  }
};

export default addReview;
