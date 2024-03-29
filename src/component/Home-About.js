import React from "react";

const HomeAbout = React.memo(function (props) {
  return (
    <>
      <div className="homeabout-container">
        <h1 className="centertext">
          <i className="fa-solid fa-house-user halfopacity"></i>
          Our Coffee and Tea
        </h1>

        <section className="contentmarginpadding">
          <p className="bold">How we started</p>
          <div className="about flex">
            <img
              className="howImg"
              src={`${process.env.PUBLIC_URL}/img/howwestarted.jpg`}
              alt="anothercupoftea"></img>
            <p className="about-info">
              It all began with our passion for tea and coffee.<br></br>
              We love drinking tea and coffee.<br></br>
              Thus, we decided to open our store.<br></br>
              We want to share the true beautiful taste of real tea and coffee.{" "}
              <br></br>
              All organic. No artificial flavoring to it.
            </p>
          </div>
        </section>

        <section className="contentmarginpadding">
          <p className="bold">About our tea and coffee</p>
          <div className="about flex">
            <img
              className="aboutImg"
              src={`${process.env.PUBLIC_URL}/img/aboutimage.jpg`}
              alt="cupoftea"></img>
            <p className="about-info">
              We can guarantee that our tea and coffee are of the best quality.{" "}
              <br></br>
              We traveled and sampled tea and coffee from other parts of the
              world. <br></br>
              Our tea and coffee are from the most well-known tea- and
              coffee-producing countries. <br></br>
              Our tea is from the world's largest producer of tea, China.{" "}
              <br></br>
              Our coffee is from Brazil, Colombia, Ethiopia, Honduras, Hawaii,
              and Tanzania, where the best coffee resides. <br></br>
            </p>
          </div>
        </section>

        <section className="contentmarginpadding">
          <p className="bold">Our mission</p>
          <div className="about flex">
            <img
              className="missionImg"
              src={`${process.env.PUBLIC_URL}/img/mission.jpg`}
              alt="colorfultea"></img>
            <p className="about-info">
              Our mission is to provide customers with the finest quality teas
              and coffees. <br></br>
              We sell it at a reasonable, fair, and affordable price. <br></br>
              Not only that, 20% of our profits go to nonprofit organizations.{" "}
              <br></br>
              Together, we can all make a difference! <br></br>
              Let the tea lovers and coffee lovers unite! <br></br>
            </p>
          </div>
        </section>
      </div>
    </>
  );
});

export default HomeAbout;
