import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isVisible = prevScrollPos > currentScrollPos;

    setVisible(isVisible);
    setIsTop(currentScrollPos < 50); // Adjust 50px to control when the background becomes transparent
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [prevScrollPos]);

  return (
    <div
      className={`head w-100 ${visible ? "visible" : "hidden"} ${
        isTop ? "solid-bg" : "transparent-bg"
      }`}
    >
      <header>
        <Link to={"/"}>
        <img
          src="https://chrono-dial.myshopify.com/cdn/shop/files/2017-10-31.png?v=1613163202&width=240"
          alt="Logo"
          
          className="logo"
          />
          </Link>
        <nav className="col-6">
          <ul className="navlinks w-50 col-6">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li>
              <Link>Model</Link>
            </li>
            <li>
              <Link>Brands</Link>
            </li>
            <li>
              <Link>Pages</Link>
            </li>
          </ul>
        </nav>
        <ul className="navlinks">
         <Link to={"/cart"}>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
         </Link>
          <li>
            <i className="fa-solid fa-user"></i>
          </li>
          <li>
            <i className="fa-solid fa-magnifying-glass"></i>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
