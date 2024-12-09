import "./Navigations.css";

import { useState } from "react";
import CloseIcon from "../../assets/images/icon-close.svg";
import HamburgerIcon from "../../assets/images/icon-hamburger.svg";
import brandLogo from "../../assets/images/logo.svg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`header `}>
      {/* ${!isOpen ? "absolute" : "fixed"} lg:static */}
      <nav className="navbar">
        <div className="brandLogo">
          <a href="#" className="logo_link">
            <img src={brandLogo} alt="BrandLogo" className="logo_img" />
          </a>

          <button
            className="hamburgerBtn"
            aria-expanded="false"
            aria-controls="navigation_links"
            aria-label="hamburger"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {!isOpen ? (
              <img src={HamburgerIcon} alt="hamburgerIcon" />
            ) : (
              <img src={CloseIcon} alt="hamburgerIcon" />
            )}
          </button>
        </div>

        <div
          id="navigation_links"
          className={`navigations  ${
            !isOpen ? "sm:translate-x-[250%]  " : "sm:translate-x-0"
          }`}
        >
          <ul className="nav_items">
            <li className="nav_item">
              <a href="#" className="hoverable">
                Pricing
              </a>
            </li>

            <li className="nav_item">
              <a href="#" className="hoverable">
                Product
              </a>
            </li>
            <li className="nav_item">
              <a href="#" className="hoverable">
                About Us
              </a>
            </li>

            <li className="nav_item">
              <a href="#" className="hoverable">
                Careers
              </a>
            </li>

            <li className="nav_item">
              <a href="#" className="hoverable">
                Community
              </a>
            </li>
          </ul>
        </div>

        <button className="get_start_btn ">
          <p className="hoverable"> Get Started</p>
        </button>
      </nav>
    </header>
  );
};
