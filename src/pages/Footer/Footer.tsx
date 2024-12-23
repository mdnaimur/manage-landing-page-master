import "./Footer.css";

import facebook from "../../assets/images/icon-facebook.svg";
import instrargam from "../../assets/images/icon-instagram.svg";
import printerst from "../../assets/images/icon-pinterest.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import yt from "../../assets/images/icon-youtube.svg";
import logo from "../../assets/images/logo-white.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_main">
        <div className="logo_icon_combo">
          <p className="copy_right">Copyright 2020. All Rights Reserved</p>
          <img src={logo} alt="" className="logo" />
          <ul className="icon_ul">
            <li>
              <a href="#">
                <img src={facebook} alt="" className="icon_ul_img" />
              </a>
            </li>

            <li>
              <a href="#">
                <img src={yt} alt="" className="icon_ul_img" />
              </a>
            </li>

            <li>
              <a href="#">
                <img src={twitter} alt="" className="icon_ul_img" />
              </a>
            </li>

            <li>
              <a href="#">
                <img src={printerst} alt="" className="icon_ul_img" />
              </a>
            </li>

            <li>
              <a href="#">
                <img src={instrargam} alt="" className="icon_ul_img" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_nav">
          <div className="footer_nav_main">
            <ul className="footer_nav_main_ul">
              <li className="hoverable">
                <a href="#">Home</a>
              </li>

              <li className="hoverable">
                <a href="#">Pricing</a>
              </li>

              <li className="hoverable">
                <a href="#">Products</a>
              </li>

              <li className="hoverable">
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
          <div className="footer_nav_main">
            <ul className="footer_nav_main_ul">
              <li className="hoverable">
                <a href="#">Careers</a>
              </li>

              <li className="hoverable">
                <a href="#">Community</a>
              </li>

              <li className="hoverable">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer_form">
          <form action="" className="footer_form_main">
            <input
              type="email"
              placeholder="Updates in your inbox..."
              className="footer_form_input"
              required
            />
            <button className="footer_form_btn hoverable" type="submit">
              Go
            </button>

            <p className="form_error">Please insert a valid email</p>
            <p className="form_copy_right">
              Copyright 2020. All Rights Reserved
            </p>
          </form>
        </div>
      </div>
    </footer>
  );
};
