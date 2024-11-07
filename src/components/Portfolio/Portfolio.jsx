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
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
         <SwiperSlide>
          <img src={Sim} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Wifi} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Startuplady} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Kuhlmann} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Bree} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
