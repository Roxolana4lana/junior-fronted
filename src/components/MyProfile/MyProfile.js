import React, { Component } from "react";
import { Container, Image } from "./styles";
import axios from "axios";

export default class MyProfile extends Component {
  state = {
    name: "",
    image:
      "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  };
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/Roxolana4lana`)
      .then(res =>
        this.setState({
          name: res.data.name,
          image: res.data.avatar_url
        })
      )
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Container>
        <p>{this.state.name}</p>
        <Image src={this.state.image} />
      </Container>
    );
  }
}
