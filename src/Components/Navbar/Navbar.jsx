import React from "react";
import './navbar.css';

const Navbar = (props) => {
  return (
    <div className="row">
  <div className="col-12">
    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="/" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
      <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
      <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="/gallery" role="tab" aria-controls="v-pills-messages" aria-selected="false">Gallery</a>
      <a className="nav-link { props.education }" id="v-pills-settings-tab" data-toggle="pill" href="/education" role="tab" aria-controls="v-pills-settings" aria-selected="false">Education</a>
    </div>
  </div>
</div>
  );
};

export default Navbar;
