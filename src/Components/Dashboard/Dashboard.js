import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }

  deleteHouse = (id) => {
    axios
      .delete(`/api/house/${id}`)
      .then(this.props.getAllHouses)
      .catch(err => console.log(`u got an error: ${err}`));
  };

  getAllHouses = () => {
    axios
      .get("/api/houses")
      .then(result => {
        this.setState({
          houses: result.data
        });
      })
      .catch(err => console.log(`u got an error: ${err}`));
  };

  componentDidMount = () => {
    this.getAllHouses();
  };

  componentDidUpdate = () => {
    this.getAllHouses();
  }

  render() {
    let mappedHouses = this.state.houses.map((house, i) => {
      return <House key={i} house={house} deleteHouse={this.deleteHouse} id={house.id}/>;
    });
    return (
      <div className="Dashboard">
        Dashboard
        <Link to="/wizard">
          <button>Add New Property</button>
        </Link>
        <h2>Home Listings</h2>
        {mappedHouses}
      </div>
    );
  }
}

export default Dashboard;
