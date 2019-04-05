import React, { Component } from "react";
import { Link } from "react";
import House from "../House/House";

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

  render() {
    return (
      <div className="Dashboard">
        Dashboard
        <Link to="/wizard">
          <button>Add New Property</button>
        </Link>
        
        <House />
      </div>
    );
  }
}

export default Wizard;
