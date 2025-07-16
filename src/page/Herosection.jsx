import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  heroImages,
  heroSlides,
  hero2Images,
  hero2Slides,
  cardData,
  groupedSlides,
  hero5Images,
  hero5Slides,
  hero6Images,
  hero6Slides,
} from "../constant/data";

import heroVideo from "../assets/videos/video.mp4";

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
          <div className="carousel-indicators carousel-custom ">
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
        <div className="position-relative py-4">
          {/* This will be the relative parent */}
          <div className="carousel slide">
            <div className="carousel-inner">
              {allImages.map((img, i) => (
                <div
                  key={i}
                  className={`carousel-item ${
                    i === currentIndex ? "active" : ""
                  }`}
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

      {/* hero section4 */}
      <div className="container-fluid p-0">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div className="carousel-indicators">
            {hero2Images.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

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
          {/* Prev button (left) */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <i className="bi bi-chevron-left fs-1"></i>
            <span className="visually-hidden">Previous</span>
          </button>

          {/* Next button (right) */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <i className="bi bi-chevron-right fs-1"></i>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* herosection 5 */}

      <div className="container-fluid p-0 mt-4">
        <div
          id="carouselHero5"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div className="carousel-indicators">
            {hero5Images.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselHero5"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          <div className="carousel-inner overlay-bg ">
            {hero5Images.map((img, index) => (
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
                <span className="overlay" style={{ zIndex: 0 }}></span>

                <div
                  className={`carousel-caption carousel-caption5 d-flex flex-column justify-content-center h-100  ${
                    index === 0
                      ? "align-items-start text-start ps-3 ps-md-5"
                      : index === 1
                      ? "align-items-center text-center"
                      : "align-items-end text-end pe-3 pe-md-5 "
                  }`}
                >
                  <span className="main-text5 text-danger fs-1 fw-bold mb-1">
                    {hero5Slides[index].title.split("For")[0]}
                  </span>
                  <span className="main-text55 text-danger fs-1 fw-bold mb-3">{`For${
                    hero5Slides[index].title.split("For")[1]
                  }`}</span>
                  <p className="text-white  mb-4 w-75">
                    {hero5Slides[index].description}
                  </p>
                  <Link
                    to={hero5Slides[index].buttonLink}
                    className="yellow-button btn btn-danger rounded-1 text-white fw-bold px-4 py-4"
                  >
                    {hero5Slides[index].buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Prev button (left) */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselHero5"
            data-bs-slide="prev"
          >
            <i className="bi bi-chevron-left fs-1"></i>
            <span className="visually-hidden">Previous</span>
          </button>

          {/* Next button (right) */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselHero5"
            data-bs-slide="next"
          >
            <i className="bi bi-chevron-right fs-1"></i>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* herosection 6 */}
      <div className="container-fluid p-0 mt-4">
        <div
          id="carouselExampleIndicators6"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {hero6Slides.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators6"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Carousel Inner */}
          <div className="carousel-inner">
            {hero6Slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                style={{ height: "100vh" }}
              >
                {/* Render image for first 2 slides, video for 3rd */}
                {index < 2 ? (
                  <img
                    src={hero6Images[index]}
                    className="d-block w-100 h-100 object-fit-cover"
                    alt={`Slide ${index + 1}`}
                  />
                ) : (
                  <video
                    className="d-block w-100 h-100 object-fit-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}

                {/* Caption */}
                <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center h-100 overlay-bg px-2">
                  <span className="main-text text-warning fw-bold mb-1">
                    {slide.title.split("For")[0]}
                  </span>
                  <span className="main-text2 text-warning fw-bold mb-3">
                    {slide.title.includes("For")
                      ? `For${slide.title.split("For")[1]}`
                      : ""}
                  </span>
                  <p className="text-white mx-auto mb-4 w-75">
                    {slide.description}
                  </p>
                  <Link
                    to={slide.buttonLink}
                    className="yellow-button btn btn-warning rounded-1 text-white fw-bold px-4 py-4"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Prev button */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators6"
            data-bs-slide="prev"
          >
            <i className="bi bi-chevron-left fs-1"></i>
            <span className="visually-hidden">Previous</span>
          </button>

          {/* Next button */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators6"
            data-bs-slide="next"
          >
            <i className="bi bi-chevron-right fs-1"></i>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
