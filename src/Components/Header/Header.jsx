import React from "react";
import TopNavBar from "../TopNavBar/TopNavBar";
import "./header.css";

const Header = () => {
  return (
    <div>
      <div>
        <img src="https://picsum.photos/1100/300" className="img-responsive" alt="cover" />
        <h2>Dumindu Oshinka</h2>
      </div>
      <div className='profile'>
        <img src="https://picsum.photos/150" className="img-responsive" height="150px" width="150px" alt="profile" id="proimg" />
      </div>
      <div className="topNavBar">
        <TopNavBar />
      </div>
    </div>
  );
};

export default Header;
