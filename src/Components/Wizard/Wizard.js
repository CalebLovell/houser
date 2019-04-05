import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
  }

  handleInput = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  render() {
    return (
      <div className="Dashboard">
        Dashboard
        <Link to="/">
          <button>Cancel</button>
        </Link>
        <form onSubmit={this.submit}>
          <label>Name</label>
          <input onChange={this.handleInput} type="text" id="name" />
          <label>Address</label>
          <input onChange={this.handleInput} type="text" id="address" />
          <label>City</label>
          <input onChange={this.handleInput} type="text" id="city" />
          <label>State</label>
          <input onChange={this.handleInput} type="text" id="state" />
          <label>Zip</label>
          <input onChange={this.handleInput} type="number" id="zip" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Wizard;
