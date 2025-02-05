import Review from "./Review";
import styles from "./Reviews.module.scss";

const Reviews = ({ reviews }) => {
  const renderReviews = reviews.map((review) => (
    <Review
      key={review._id}
      name={review.name}
      review={review.review}
      image={review.image}
    />
  ));

  return (
    <section className={styles.reviews}>
      <div className={styles.heading}>
        <span>ALGUNS DEPOIMENTOS DOS NOSSOS CLIENTES</span>
      </div>
      <div className={styles.content}>{renderReviews}</div>
    </section>
  );
};

export default Reviews;
