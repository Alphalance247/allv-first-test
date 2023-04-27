import React from "react";
import Slider from "react-slick";

const Story = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slider = React.useRef(null);

  return (
    <div className="slider">
      <button
        className="prevArrow"
        onClick={() => slider?.current?.slickPrev()}
      ></button>
      <button
        className="NextArrow"
        onClick={() => slider?.current?.slickNext()}
      ></button>
      {/* slider--1 */}
      <Slider ref={slider} {...settings}>
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
            <div className="overlay "></div>
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
