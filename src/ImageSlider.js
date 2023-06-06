import React from 'react';
import Slider from 'react-slick';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="annual2023-1.png" alt="Image 1" />
      </div>
      <div>
        <img src="annual2023-2.png" alt="Image 2" />
      </div>
      <div>
        <img src="annual2023-3.png" alt="Image 3" />
      </div>
    </Slider>
  );
};

export default ImageSlider;
