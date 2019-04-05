import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
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

export default Dashboard;
