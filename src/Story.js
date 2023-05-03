import React from "react";
import Slider from "react-slick";
import vectors from "./assets/Vector.svg";
import vector1 from "./assets/Vector-l.svg";

const Story = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slider = React.useRef(null);

  return (
    <div className="slider">
      <button
        className="prevArrow"
        onClick={() => slider?.current?.slickPrev()}
      >
        <img src={vector1} alt="" />
      </button>
      <button
        className="NextArrow"
        onClick={() => slider?.current?.slickNext()}
      >
        <img src={vectors} alt="" />
      </button>
      {/* slider--1 */}
      <Slider ref={slider} {...settings}>
        <div className="slide--1" style={{ width: "100rem", height: "30rem" }}>
          <div className="carousel-real" {...settings}>
            <div className="overlay "></div>

            <div className="innerContent">
              <h4>{props.useDate}</h4>

              <h2>{props.teamWork}</h2>

              <p>{props.lorem}</p>
            </div>
          </div>
        </div>

        {/* slider--2 */}

        <div className="slide--1">
          <div
            className="carousel-real"
            style={{ backgroundImage: `url(${props.backgroundImage})` }}
            {...settings}
          >
            <div className="overlay "></div>
            <div className="innerContent">
              <h4>{props.useDate}</h4>

              <h2>{props.teamWork}</h2>

              <p>{props.lorem}</p>
            </div>
          </div>
        </div>
        {/* slider--3 */}

        <div className="slide--1">
          <div
            className="carousel-real"
            style={{ backgroundImage: `url(${props.backgroundImage})` }}
            {...settings}
          >
            <div className="overlay "></div>
            <div className="innerContent">
              <h4>{props.useDate}</h4>

              <h2>{props.teamWork}</h2>

              <p>{props.lorem}</p>
            </div>
          </div>
        </div>
        {/* slider--4 */}

        <div className="slide--1">
          <div
            className="carousel-real"
            style={{ backgroundImage: `url(${props.backgroundImage})` }}
            {...settings}
          >
            <div className="overlay"></div>
            <div className="innerContent">
              <h4>{props.useDate}</h4>

              <h2>{props.teamWork}</h2>

              <p>{props.lorem}</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Story;
