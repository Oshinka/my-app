import React from "react";
import Header from "../../Components/Header/Header";
import "./contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <hr />
        <div className="row">
          <div className="col-md-4">
            <div className="media logos">
              <a href="#">
                <div className="row">
                  <div width="100px" height="100px">
                  <img
                    src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19750.png"
                    alt="fbImg"
                    width="80px"
                    height="80px"
                  />
                  </div>
                  
                  <div className="media-body">
                    <h5>Facebook</h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="media">
              <a href="#">
                <div className="row">
                <div width="100px" height="100px">
                <img
                    src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-background-hd-3.png"
                    alt="instaImg"
                    width="80px"
                    height="80px"
                  />
                </div>
                  
                  <div className="media-body">
                    <h5>Instagram</h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="media">
              <a href="#">
                <div className="row">
                <div width="100px" height="100px">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPuCcg9KwnvNV41Lx79oNkLKIdJyUv6SdWpw&usqp=CAU"
                    alt="youtubeImg"
                    width="80px"
                    height="65px"
                  />
                </div>
                  
                  <div className="media-body">
                    <h5>Youtube</h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="media">
              <a href="#">
                <div className="row">
                <div width="100px" height="100px"><img
                    src="https://www.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png"
                    alt="linImg"
                    width="80px"
                    height="80px"
                  /></div>
                  
                  <div className="media-body">
                    <h5>LinkedIn</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-5"></div>
          <div className="col-md-3">
            <div>
              <address>
                <strong>Dumindu Oshinka</strong>
                <br />
                3/199,
                <br />
                2nd Lane,
                <br />
                Kendalanda,
                <br />
                Homagama,<small>10200</small>
                <br />
                Sri Lanka
              </address>
            </div>
            <div>
              <address>
                <strong>Email</strong>
                <br />
                oshinka94@gmail.com
              </address>
            </div>
            <div>
              <address>
                <strong>Telephone</strong>
                <br />
                (+94) 71 26 92 590
              </address>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
