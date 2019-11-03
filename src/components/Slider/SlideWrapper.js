import React, { Component } from "react";
import { Slide } from "./Slide";
import slide1 from "./assets/photos/slide-1.jpg";
import slide2 from "./assets/photos/slide-2.jpg";
import slide3 from "./assets/photos/slide-3.jpg";
import slide4 from "./assets/photos/slide-4.jpg";
import slide5 from "./assets/photos/slide-5.jpg";
import slide6 from "./assets/photos/slide-6.jpg";
import "./style.scss";

export default class SlideWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [slide1, slide2, slide3, slide4, slide5, slide6]
    };
  }
  componentDidMount() {
    this.setState(prevState => ({
      images: [...prevState.images, ...this.state.images]
    }));
  }
  render() {
    return (
      <div className="slider-container">
        <div className="slider">
          {this.state.images.map((image, i) => (
            <div className="slide" key={i}>
              <Slide src={image} alt="" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
