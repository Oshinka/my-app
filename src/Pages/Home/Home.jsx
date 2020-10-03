import React from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Webbody from "../../Components/Webbody/Webbody";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./home.css";

const Home = () => {
  return (
    <div className="container siteBody">
      <Header />
      <hr />
      <div className="row">
        <div className="col-md-3 navBar">
          <Navbar />
        </div>
        <div className="col-md-7 webBody">
          <Webbody />
        </div>
        <div className="col-md-2 sideBar">
          <Sidebar title={ 'Home' } />
        </div>
      </div>
    </div>
  );
};

export default Home;
