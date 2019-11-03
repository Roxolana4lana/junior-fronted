import React, { Component } from "react";
import axios from "axios";

// const keyApi = process.env.REACT_APP_KEY_API

export default class MyProfile extends Component {
  state = {
    name: "",
    image: ""
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
      <div className="FindMore">
        <p>{this.state.name}</p>
        <img src={this.state.image} />
      </div>
    );
  }
}
