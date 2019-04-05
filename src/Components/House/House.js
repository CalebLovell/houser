import React, { Component } from "react";
// import axios from "axios";

class House extends Component {


  render() {
    // console.log(this.props.house.id);
    return (
      <div className="House">
        <p>{`Property Name: ${this.props.house.property_name}`}</p>
        <p>{`Address: ${this.props.house.address}`}</p>
        <p>{`City: ${this.props.house.city}`}</p>
        <p>{`State: ${this.props.house.state}`}</p>
        <p>{`Zip: ${this.props.house.zip}`}</p>
        <button onClick={() => this.props.deleteHouse(this.props.id)}>delete</button>
      </div>
    );
  }
}

export default House;
