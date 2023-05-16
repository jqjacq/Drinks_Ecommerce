import React, { useEffect, useState, useMemo, useRef } from "react";

import { Link } from "react-router-dom";
// import ShoppingCart from "./ShoppingCart"
// import SearchList from "./SearchList"

const Nav = React.memo(function (props) {
  //Smooth scrolling & Auto Scroll
  const scrollHome = useRef(null);
  const scrollProduct = useRef(null);
  const scrollContact = useRef(null);
  const scrollCart = useRef(null);

  const handleScroll = () => {
    scrollHome.current.scrollIntoView({ behavior: "smooth" });
  };
  //Changing cover image
  const cacheImage = useMemo(
    () => [
      `${process.env.PUBLIC_URL}/img/maincovers/adjustedfront.png`,
      `${process.env.PUBLIC_URL}/img/maincovers/adjustedtea.png`,
      `${process.env.PUBLIC_URL}/img/maincovers/adjustedcoffee2.png`,
    ],
    []
  );
  const [currentImage, setCurrentImage] = useState(0);
  const intervalTime = 4000;

  function setTimer() {
    let nextImage = currentImage + 1;
    if (nextImage >= cacheImage.length) {
      nextImage = 0;
    }
    setTimeout(() => setCurrentImage(nextImage), intervalTime);
  }

  useEffect(setTimer, [cacheImage, currentImage]);

  return (
    <>
      <img
        src={cacheImage[currentImage]}
        alt="changing cover of field of green, tea and coffee"
        className="backgroundcover"
      />
      <img
        src={`${process.env.PUBLIC_URL}/img/jqlogo1.png`}
        className="coverlogo"
        alt="JQ Logo"
      />
      <div className="navBar-container">
        <div className="navlinks">
          <img
            src={`${process.env.PUBLIC_URL}/img/onlylogo.png`}
            className="logo"
            alt="Small JQ Logo"
          />
          <Link
            to="/"
            className="links"
            onClick={handleScroll}
            ref={scrollHome}>
            Home
          </Link>
          <Link
            to="/products"
            className="links"
            onClick={handleScroll}
            ref={scrollProduct}>
            Products
          </Link>
          <Link
            to="/contact"
            className="links"
            onClick={handleScroll}
            ref={scrollContact}>
            Contact
          </Link>
          <Link
            to="/cart"
            className="shoppingCart links"
            onClick={handleScroll}
            ref={scrollCart}>
            Cart
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </div>
    </>
  );
});

export default Nav;
