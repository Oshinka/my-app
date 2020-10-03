import React from "react";
import Header from "../../Components/Header/Header";
import "./about.css";

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <hr />
        <h3>Welcome to about page.</h3>
      </div>
    );
  }
}

export default About;
