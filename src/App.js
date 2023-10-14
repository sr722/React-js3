import "./styles.css";
import React, { Component } from 'react';

class AgeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dob: '',
      age: null,
    };
  }

  calculateAge = () => {
    const dob = new Date(this.state.dob);
    const currentDate = new Date();
    const ageDiff = currentDate - dob;
    const ageDate = new Date(ageDiff);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

    this.setState({
      age: calculatedAge,
    });
  };

  handleInputChange = (event) => {
    this.setState({
      dob: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h2>Age Calculator</h2>
        <label htmlFor="dob">Enter your date of birth: </label>
        <p></p>
        <input
          type="date"
          id="dob"
          value={this.state.dob}
          onChange={this.handleInputChange}
        />
        <p></p>
        <button  onClick={this.calculateAge} style={{color: "white"},{background: " skyblue"}}>Calculate Age</button>
        

        {this.state.age !== null && (
          <p>Your age is: {this.state.age} years old</p>
        )}
      </div>
    );
  }
}

export default AgeCalculator;

