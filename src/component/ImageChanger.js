import React from "react"
import "../index.css";

class ImageChanger extends React.Component {
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.state = {
          currentImage: 0,
          images: [
            "/img/maincovers/adjustedfront.png",
            "/img/maincovers/adjustedtea.png",
            "/img/maincovers/adjustedcoffee2.png"
          ]
        };
      }
    
    switchImage() {
        if (this.state.currentImage < this.state.images.length - 1) {
          this.setState({
            currentImage: this.state.currentImage + 1
          });
        } else {
          this.setState({
            currentImage: 0
          });
        }
        return this.currentImage;
      }
    
    timeImage() {
        setInterval(this.switchImage, 3500);
      }

    render() {
        this.timeImage()
        return (
        <div className="mainimage-container">
          <img
            src={this.state.images[this.state.currentImage]}
            alt="changing cover of field of green, tea and coffee"
          />
          <img src = "../img/jqlogo.png" className="logo" alt="JQ Logo" />
        </div>
        )
    }
}

export default ImageChanger