// import React from "react";
// import Slider from "react-slick";


// function SampleNextArrow(props) {
//   const { onClick } = props;
//   return <div onClick={onClick} />;
// }

// function SamplePrevArrow(props) {
//   const { onClick } = props;
//   return <div onClick={onClick} />;
// }

// export const Banner = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     customPaging: (i) => (
//       <div className="custom-dot ease position-absolute inline-block h-4 w-4 rounded-full transition duration-300"></div>
//     ),
//     appendDots: (dots) => <ul className="m-0 p-0">{dots}</ul>,
//   };

//   return (
//     <div className="pb-20">
//       <Slider {...settings}>
//         <div>
//           <img
//             className="transform rounded-2xl transition-transform duration-500 ease-in-out hover:scale-105"
//             src="/Hero-bg.png"
//             alt="carusel"
//           />
//         </div>
//       </Slider>
//     </div>
//   );
// };
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 z-10 -translate-y-1/2 cursor-pointer text-black"
      onClick={onClick}
    >
      &gt;
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer text-black"
      onClick={onClick}
    >
      &lt;
    </div>
  );
}

export const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: (i) => (
      <div className="custom-dot ease position-absolute inline-block h-4 w-4 rounded-full transition duration-300"></div>
    ),
    appendDots: (dots) => <ul className="m-0 p-0">{dots}</ul>,
  };

  return (
    <div className="pb-20">
      <Slider {...settings}>
        <div>
          <img
            className="transform rounded-2xl transition-transform duration-500 ease-in-out hover:scale-105"
            src="/Hero-bg.png"
            alt="carousel"
          />
        </div>
      </Slider>
    </div>
  );
};

