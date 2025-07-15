import { Link } from "react-router-dom";
import {  useEffect ,useState } from "react";
import {
  heroImages,
  heroSlides,
  hero2Images,
  hero2Slides,
  cardData,
  groupedSlides
} from "../constant/data";

export default function Herosection() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const navMap = [0, 2, 4];
  const allImages = groupedSlides.flat();

    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allImages.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid p-0">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="position-relative">
                {/* Background image */}
                <img
                  src={img}
                  className="image1 d-block w-100 hero-zoom"
                  alt={`Slide ${index + 1}`}
                />

                {/* Optional overlay */}
                <div className="overlay"></div>

                <div
                  className="container position-absolute top-50 start-50 translate-middle text-white text-start px-5 px-sm-4 px-md-5 py-4 py-md-5"
                  style={{ zIndex: 2 }}
                >
                  <div className="maintext text-danger mb-2">
                    <i className="bi bi-star-fill me-2 mx-3" />
                    <span className="fw-bold fs-6 fs-md-5">
                      TURN OUR CHANGE INTO
                    </span>
                  </div>

                  <div className="main-text fw-bold mb-2 fs-md-2 mx-3">
                    {heroSlides[index]?.title}
                  </div>

                  <p className="mb-2 fs-6 fs-md-5 mx-3">
                    {heroSlides[index]?.description}
                  </p>

                  <p className="text-light mb-3 fs-6 mx-3">
                    {heroSlides[index]?.paragraph}
                  </p>

                  <Link
                    to={heroSlides[index]?.buttonLink}
                    className="btn btn-danger px-4 py-2 fs-6 mx-3"
                  >
                    {heroSlides[index]?.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <i className="bi bi-chevron-left fs-1 px-2 rounded-1 custom-icon-box d-none d-sm-block "></i>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <i className="bi bi-chevron-right fs-1 px-2 rounded-1 custom-icon-box d-none d-sm-block "></i>
        </button>
      </div>

      <div className="cardsqure py-4 px-3 rounded-2 bg-white position-relative">
        <div className="row g-3">
          {cardData.map((card, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12">
              <div className="yellow-box position-relative">
                <div className="icon-box-wrapper">
                  <div className="icon-back"></div>
                  <div className="icon-box">
                    <div className="icon-inner">
                      <i className={`bi ${card.icon} fs-2 text-danger`}></i>
                    </div>
                  </div>
                </div>
                <h6 className="text-muted">{card.subTitle}</h6>
                <h5>{card.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* herosection2 */}
      <div className="container-fluid p-0">
        <div
          id="heroCarousel2"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          {/* Carousel Indicators */}
          <div className="carousel-indicators ">
            {hero2Images.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#heroCarousel2"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Carousel Inner */}
          <div className="carousel-inner">
            {hero2Images.map((img, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                style={{ height: "100vh" }}
              >
                <img
                  src={img}
                  className="d-block w-100 h-100 object-fit-cover"
                  alt={`Slide ${index + 1}`}
                />
                <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center h-100 overlay-bg px-2">
                  <span className="main-text text-warning fw-bold mb-1">
                    {hero2Slides[index].title.split("For")[0]}
                  </span>
                  <span className="main-text2 text-warning fw-bold mb-3">{`For${
                    hero2Slides[index].title.split("For")[1]
                  }`}</span>
                  <p className="text-white mx-auto mb-4 w-75">
                    {hero2Slides[index].description}
                  </p>
                  <Link
                    to={hero2Slides[index].buttonLink}
                    className="yellow-button btn btn-warning rounded-1 text-white fw-bold px-4 py-4"
                  >
                    {hero2Slides[index].buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* herosection3 */}

   
      <div className="container-fluid p-0">
        <div className="position-relative py-4"> {/* This will be the relative parent */}
          <div className="carousel slide">
            <div className="carousel-inner">
              {allImages.map((img, i) => (
                <div
                  key={i}
                  className={`carousel-item ${i === currentIndex ? "active" : ""}`}
                >
                 <div className="carousel-img-wrapper position-relative">
                    <img
                      src={img}
                      className="d-block w-100"
                      alt={`Slide ${i + 1}`}
                    />
                    <div className="overlay"></div> {/* 👈 Overlay layer */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Indicators Positioned Absolutely */}
          <div className="my-indicators">
            {navMap.map((imgIndex, navIndex) => (
              <button
                key={navIndex}
                onClick={() => setCurrentIndex(imgIndex)}
                className={currentIndex === imgIndex ? "active" : ""}
                aria-label={`Group ${navIndex + 1}`}
              ></button>
            ))}
          </div>
        </div>
</div>


    </div>
  );
}
