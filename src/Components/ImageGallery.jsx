import { StyledImageGallery } from '../Styles/HomeStyleSheet';
import img1 from '../images/aakai-LA.jpg';
import img2 from '../images/abc-locks.jpg';
import img3 from '../images/active-kasen.jpg';
import img5 from '../images/backyard.jpg';
import img6 from '../images/benji-math.jpg';
import img7 from '../images/boys-building.jpg';
import img8 from '../images/braiding-bracelet-craft.jpg';
import img9 from '../images/cece-angel-water-play.jpg';
import img11 from '../images/lunch.jpg';
import img12 from '../images/together.jpg';
import img13 from '../images/yoga.jpg';
import img14 from '../images/car-vroom.jpg';
import img15 from '../images/swim-lessons.jpg';
import img16 from '../images/color.jpg';

function ImageGallery() {
  const imgArr = [
    img1,
    img2,
    img3,
    img5,
    img6,
    img7,
    img8,
    img9,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
  ];

  return (
    <StyledImageGallery>
      <div className="header-container">
        <h2>Activities For The Kiddos</h2>
      </div>
      <div className="gallery-container">
        {imgArr.map((img, i) => {
          return (
            <div key={i}>
              <img src={img} alt="/" />
            </div>
          );
        })}
      </div>
    </StyledImageGallery>
  );
}

export default ImageGallery;
