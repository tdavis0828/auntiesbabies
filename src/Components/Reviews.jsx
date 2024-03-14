import { StyledReviews } from '../Styles/HomeStyleSheet';

function Reviews() {
  return (
    <StyledReviews>
      <h2 className="review-header">Comments from the community</h2>
      <div className="review-container one">
        <p>
          "For any parents that are looking for a great daycare for their
          children without a doubt this is a great daycare to enroll them in.
          Shanita runs a very safe, clean, fun, and responsible daycare."
        </p>
        <p> - Parent</p>
      </div>
      <div className="review-container two">
        <p>
          "The walls of Auntie's Babies are painted in bright colors and lined
          with books, educational toys and interactive materials of all kinds.
          Outside there's no shortage of play areas and equipment for children
          with different interests."
        </p>
        <p> - Bakersfield.com</p>
      </div>
      <div className="review-container three">
        <p>
          "The walls of Auntie's Babies are painted in bright colors and lined
          with books, educational toys and interactive materials of all kinds.
          Outside there's no shortage of play areas and equipment for children
          with different interests."
        </p>
        <p> - Bakersfield.com</p>
      </div>
    </StyledReviews>
  );
}

export default Reviews;
