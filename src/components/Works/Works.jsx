import React, { useContext } from "react";
import "./Works.css";
import Rails from "../../img/Rails.svg";
import woo from "../../img/woo.png";
import ReactJS from "../../img/reactjs.png";
import Shopify from "../../img/Shopify.png";
import Odoo from "../../img/odoo.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Ready to enhance your business
          </span>
          <span>Tools & services</span>
          <spane>
  <ul>
    <li>
      <h3>Web Development Frameworks:</h3>
      <ul>
        <li>Ruby on Rails for back-end and API development</li>
        <li>ASP.NET and Blazor for robust, scalable web applications</li>
      </ul>
    </li>
    
    <li>
      <h3>Front-End Technologies:</h3>
      <ul>
        <li>JavaScript and its libraries (Node.js, etc.) for dynamic and responsive front-end solutions</li>
      </ul>
    </li>
    
    <li>
      <h3>E-commerce Platforms:</h3>
      <ul>
        <li>Shopify and WordPress for custom e-commerce solutions, including integration and customization</li>
      </ul>
    </li>
    
    <li>
      <h3>Cloud & Hosting Services:</h3>
      <ul>
        <li>AWS for secure, scalable cloud hosting, and infrastructure management</li>
      </ul>
    </li>
    
    <li>
      <h3>Database Management:</h3>
      <ul>
        <li>SQL and other relational databases for efficient data storage and retrieval</li>
      </ul>
    </li>
    
    <li>
      <h3>SEO and Marketing Tools:</h3>
      <ul>
        <li>SEO optimization for increased visibility and user engagement</li>
      </ul>
    </li>
    
    <li>
      <h3>Support and Maintenance:</h3>
      <ul>
        <li>Comprehensive technical support, troubleshooting, and site maintenance</li>
      </ul>
    </li>
  </ul>
</spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Rails} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={woo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={ReactJS} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Odoo} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
