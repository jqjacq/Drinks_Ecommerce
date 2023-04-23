import React, { useEffect, useState, useMemo }  from "react"
import { Link } from "react-router-dom"
// import ShoppingCart from "./ShoppingCart"
// import SearchList from "./SearchList"

export default function NavBar(props) {
    const cacheImage = useMemo(() => 
    [
      "/img/maincovers/adjustedfront.png",
      "/img/maincovers/adjustedtea.png",
      "/img/maincovers/adjustedcoffee2.png"
  ], [])
  const [currentImage, setCurrentImage] = useState(0)
  const intervalTime = 4000

  function setTimer() {
    let nextImage = currentImage + 1
      if (nextImage >= cacheImage.length) {
        nextImage = 0
      }
    setTimeout(() => setCurrentImage(nextImage), intervalTime)
  }

  useEffect(setTimer, [cacheImage, currentImage])

    return (
        <>
                <img
          src={cacheImage[currentImage]}
          alt="changing cover of field of green, tea and coffee"
          className="backgroundcover"/>
          <img src="../img/jqlogo1.png" className="coverlogo" alt="JQ Logo" />
        <div className="navBar-container"> 
            <div className="navlinks">
                <img src = "../img/onlylogo.png" className="logo" alt="Small JQ Logo" />
                <Link to="/" className="home"> Home </Link>
                <Link to="/products" className="products"> Products </Link>
                {/* <Link to="/product" className="btn dropdown-toggle" data-bs-toggle="dropdown"> Product </Link>
                    <ul className="dropdown-menu">
                        <Link to="/product" className="dropdown-item"> Full Menu</Link>
                        <Link to="/coffee" className="dropdown-item"> Coffee </Link>
                        <Link to="/tea" className="dropdown-item"> Tea </Link>
                    </ul> */}
                <Link to="/contact" className="contact">Contact</Link>
                <Link to="/cart" className="shoppingCart">
                    Cart
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>
            </div>

            {/* Alternative to route -- slower loading page */}
            {/* <ul className="navlinks">
                <li>
                    <img src = "../img/onlylogo.png" className="logo" alt="Small JQ Logo" />
                </li>
                <li className="homelink" onClick={()=> props.onClick("home")}>Home</li>
                    <div className="dropdown">
                <li>
                    <span className="btn dropdown-toggle" data-bs-toggle="dropdown">
                        Products
                            <ul className="dropdown-menu">
                                <li onClick={()=> props.onClick("product")} className="dropdown-item">Full Menu</li>
                                <li onClick={()=> props.onClick("coffee")} className="dropdown-item">Coffee</li>
                                <li onClick={()=> props.onClick("tea")} className="dropdown-item">Tea</li>
                            </ul>
                    </span>
                </li>
                </div>
                <li className="contactlink" onClick={()=> props.onClick("contact")}>Contact</li>
                <li>
                     <button className="shoppingCart" onClick={()=> props.onClick("cart")}>
                        <span className="numberofitems"> Cart </span>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                </li>
                {/* <li> <SearchList /> </li> */}
                {/* <li>
                    <input type="text" className="search" placeholder="Search..."></input> 
                    <i class="fa-solid fa-magnifying-glass"></i>
                </li> */}
                {/* <li className="login"> <span> 
                    <i className="fa-solid fa-person"></i> 
                    login </span></li> */}
            {/* </ul> */}
        </div>
        </>
    )
}