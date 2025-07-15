import { Link } from "react-router-dom";
import { hero2Images, hero2Slides } from "../constant/data";


export default function Herosection2() {
  return (
    <div className="container-fluid p-0">
      <div id="heroCarousel2" className="carousel slide" data-bs-ride="carousel">
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
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
              <img src={img} className="d-block w-100 h-100 object-fit-cover" alt={`Slide ${index + 1}`} />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center h-100 overlay-bg px-2">
                <span className="main-text text-warning fw-bold mb-1">{hero2Slides[index].title.split("For")[0]}</span>
                <span className="main-text2 text-warning fw-bold mb-3">{`For${hero2Slides[index].title.split("For")[1]}`}</span>
                <p className="text-white mx-auto mb-4 w-75">{hero2Slides[index].description}</p>
                <Link to={hero2Slides[index].buttonLink} className="yellow-button btn btn-warning rounded-1 text-white fw-bold px-4 py-4">
                  {hero2Slides[index].buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
