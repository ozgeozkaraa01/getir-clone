import React, { useEffect, useState } from "react";
import Banners from "../api/banners.json";
import Slider from "react-slick";
import Title from "./ui/Title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useWindowWidth } from "@react-hook/window-size";

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
  const windowWidth = useWindowWidth();

  useEffect(() => {
    setBanners(Banners);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    arrows: true,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="container mx-auto md:pt-8">
        <div className="hidden md:block">
          <Title>Kampanyalar</Title>
        </div>
        <Slider className="md:-mx-2" {...settings}>
          {banners &&
            banners.map((banner, index) => (
              <div key={banner.id} className="block md:px-2">
                <picture className="block md:px-2">
                  <img src={banner.image} className="md:rounded-lg" />
                </picture>
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
};

export default Campaigns;
