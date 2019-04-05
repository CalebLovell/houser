import React, { Component } from "react";
import axios from "axios";

class House extends Component {
  deleteHouse = () => {
    axios
      .delete(`/api/house/${this.props.house.id}`)
      .then(this.props.getAllHouses)
      .catch(err => console.log(`u got an error: ${err}`));
  };

  render() {
    // console.log(this.props.house.id);
    return (
      <div className="House">
        <p>{`Property Name: ${this.props.house.property_name}`}</p>
        <p>{`Address: ${this.props.house.address}`}</p>
        <p>{`City: ${this.props.house.city}`}</p>
        <p>{`State: ${this.props.house.state}`}</p>
        <p>{`Zip: ${this.props.house.zip}`}</p>
        <button onClick={this.deleteHouse}>delete</button>
      </div>
    );
  }
}

export default House;
