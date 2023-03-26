import React, { useEffect, useState } from "react";
import Banners from "../api/banners.json";
import Slider from "react-slick";
import Title from "./ui/Title";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextButton({ onClick, className }) {
  return (
    <button className={`${className} text-brand-color`} onClick={onClick}>
      <IoIosArrowForward size={22} />
    </button>
  );
}
function PrevButton({ onClick, className }) {
  return (
    <button className={`${className} text-brand-color`} onClick={onClick}>
      <IoIosArrowBack size={22} />
    </button>
  );
}

const Campaigns = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="sm:container overflow-hidden md:overflow-visible mx-auto px-0">
        <Title>Kampanyalar</Title>
        <Slider className="-mx-2 relative" {...settings}>
          {banners &&
            banners.map((banner) => (
              <div key={banner.id} className="px-2">
                <img src={banner.image} className="w-full sm:rounded-lg" />
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
};

export default Campaigns;
