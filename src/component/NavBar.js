import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
// import ShoppingCart from "./ShoppingCart"
// import SearchList from "./SearchList"

export default function NavBar(props) {
  //Changing cover image
  const cacheImage = useMemo(
    () => [
      "/img/maincovers/adjustedfront.png",
      "/img/maincovers/adjustedtea.png",
      "/img/maincovers/adjustedcoffee2.png",
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
      <img src="../img/jqlogo1.png" className="coverlogo" alt="JQ Logo" />
      <div className="navBar-container">
        <div className="navlinks">
          <img src="../img/onlylogo.png" className="logo" alt="Small JQ Logo" />
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/products" className="links">
            Products
          </Link>
          <Link to="/contact" className="links">
            Contact
          </Link>
          <Link to="/cart" className="shoppingCart links">
            Cart
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
