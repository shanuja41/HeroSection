import { Link } from "react-router-dom";
import { heroImages, heroSlides } from "../constant/data";

export default function Herosection() {
  return (
    <div className="container-fluid p-0">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div style={{ position: "relative" }}>
                {/* Background image */}
                <img
                  src={img}
                  className="image1 d-block w-100"
                  alt={`Slide ${index + 1}`}
                />

                {/* Optional overlay */}
                <div className="overlay"></div>

                {/* Centered Content */}
                <div
                  className="container position-absolute top-50 start-50 translate-middle text-start text-white"
                  style={{ zIndex: 2, padding: "5rem" }}
                >
                  <div className=" maintext text-danger">
                    <i class="bi bi-star-fill" />{" "}
                    <span className="fw-bold">TURN OUR CHANGE INTO</span>
                  </div>
                  <div className=" main-text fw-bold mb-2">
                    {heroSlides[index]?.title}
                  </div>
                  <p className="mb-2">{heroSlides[index]?.description}</p>
                  <p className="text-light mb-3">
                    {heroSlides[index]?.paragraph}
                  </p>
                  <Link
                    to={heroSlides[index]?.buttonLink}
                    className="btn btn-danger px-4 py-2"
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
          <i className="bi bi-chevron-left fs-1 px-2 rounded-1 custom-icon-box"></i>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <i className="bi bi-chevron-right fs-1 px-2 rounded-1 custom-icon-box"></i>
        </button>
      </div>

      <div className="cardsqure py-4 px-3 rounded-2 bg-white position-relative ">
        <div className="row g-3">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="yellow-box position-relative">
              <div className="icon-box-wrapper">
                <div className="icon-back"></div>
                <div className="icon-box">
                  <div className="icon-inner">
                    <i className="bi bi-truck fs-2 text-danger"></i>
                  </div>
                </div>
              </div>
              <h6 className="text-muted">SCHEDULE</h6>
              <h5>Garbage & Recycling</h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="yellow-box position-relative">
              <div className="icon-box-wrapper">
                <div className="icon-back"></div>
                <div className="icon-box">
                  <div className="icon-inner">
                    <i className="bi bi-p-circle fs-2 text-danger"></i>
                  </div>
                </div>
              </div>
              <h6 className="text-muted">IN EFFECT </h6>
              <h5>Alternate Side Parking</h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="yellow-box position-relative">
              <div className="icon-box-wrapper">
                <div className="icon-back"></div>
                <div className="icon-box">
                  <div className="icon-inner">
                    <i className="bi bi-buildings fs-2 text-danger"></i>
                  </div>
                </div>
              </div>
              <h6 className="text-muted">SCHOOL</h6>
              <h5>All Schools are Open</h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="yellow-box position-relative">
              <div className="icon-box-wrapper">
                <div className="icon-back"></div>
                <div className="icon-box">
                  <div className="icon-inner">
                    <i className="bi bi-cash-coin fs-2 text-danger"></i>
                  </div>
                </div>
              </div>
              <h6 className="text-muted">COUNCIL TAX</h6>
              <h5>Pay Your Council Tax</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
