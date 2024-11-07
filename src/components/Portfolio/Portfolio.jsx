import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Startuplady from "../../img/startuplady.png";
import Ecommerce from "../../img/ecommerce.png";
import Bree from "../../img/bree.png";
import Kuhlmann from "../../img/kuhlmann.png";
import Sim from '../../img/sim.png';
import Wifi from '../../img/wifi.png';
import { themeContext } from "../../Context";

const Portfolio = () => {
  const swiperConfig = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    grabCursor: true,
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode ? 'white' : ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper



        className="portfolio-slider"
        {...swiperConfig}
      >
        <SwiperSlide>
          <a href="https://jpsmart.net/" target="_blank" rel="noopener noreferrer">
            <img src={Sim} alt="Jpsmart" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://wifi.jpmob.jp/rentalspace" target="_blank" rel="noopener noreferrer">
            <img src={Wifi} alt="Jpwifi" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.startuplady.org/" target="_blank" rel="noopener noreferrer">
            <img src={Startuplady} alt="Startup lady Japan" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.aignermunich.jp/" target="_blank" rel="noopener noreferrer">
            <img src={Ecommerce} alt="Aigner Japan" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://kuhlmannsupply.com/" target="_blank" rel="noopener noreferrer">
            <img src={Kuhlmann} alt="Kuhlmann Supply" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.bree.jp/" target="_blank" rel="noopener noreferrer">
            <img src={Bree} alt="Bree Japan" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
