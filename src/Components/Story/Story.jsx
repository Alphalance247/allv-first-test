import React from "react";
import Slider from "react-slick";
import StoryModule from "./story.module.scss";
import SliderComp from "./SliderComp";
import Details from "./Details";
import vectors from "../../assets/Vector.svg";
import vector1 from "../../assets/Vector-l.svg";

const Story = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  //////// warning key prop still showing////////

  const createDetails = (details) => {
    return (
      <div className={StoryModule.slide1} key={details.id}>
        <div className={StoryModule.carouselReal}>
          <SliderComp
            useDate={details.useDate}
            teamwork={details.teamWork}
            message={details.message}
          />
        </div>
      </div>
    );
  };

  const slider = React.useRef(null);

  return (
    <div className={StoryModule.slider}>
      <button
        className={StoryModule.prevArrow}
        onClick={() => slider?.current?.slickPrev()}
      >
        <img src={vector1} alt="" />
      </button>
      <button
        className={StoryModule.NextArrow}
        onClick={() => slider?.current?.slickNext()}
      >
        <img src={vectors} alt="" />
      </button>

      <Slider ref={slider} {...settings}>
        {Details.map(createDetails)}
      </Slider>
    </div>
  );
};

export default Story;
