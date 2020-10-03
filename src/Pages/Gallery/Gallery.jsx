import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import SwipeButtons from '../../Components/SwipeButtons/SwipeButtons';
import "./gallery.css";

function Gallery() {
  const [people, setPeople] = useState([
    {
      id: 1,
      url:
        "https://scontent.fcmb1-1.fna.fbcdn.net/v/t1.0-0/c0.15.206.206a/p206x206/71704873_2483742568521412_956983073633730560_o.jpg?_nc_cat=103&_nc_sid=da31f3&_nc_ohc=PWRtHH53bzAAX8204ZK&_nc_ht=scontent.fcmb1-1.fna&_nc_tp=27&oh=d76f19f917be9abda4bf18a02bdf7135&oe=5F997DC3",
    },
    {
      id: 2,
      url:
        "https://scontent.fcmb1-1.fna.fbcdn.net/v/t1.0-0/c52.0.206.206a/p206x206/71119896_2477889672440035_1301443930423820288_o.jpg?_nc_cat=105&_nc_sid=da31f3&_nc_ohc=Rp2AtObB408AX-8EslL&_nc_ht=scontent.fcmb1-1.fna&_nc_tp=27&oh=28172e2a0cb03b1b523c5ca15cceb386&oe=5F98BDA7",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (id) => {
    console.log(id + " left the screen");
  };
  return (
    <div className="container siteBody">
      <Header />
      <hr />

      <div className="row">
        <div className="col-md-3">
          <Navbar />
        </div>
        <div className="col-md-7">
          <div className="jumbotron">
            <h1>Gallery</h1>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="thumbnail">
                <img src="https://picsum.photos/180" alt="img" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="thumbnail">
                <img src="https://picsum.photos/180" alt="img" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="thumbnail">
                <img src="https://picsum.photos/180" alt="img" />
              </div>
            </div>
          </div>
          <div className="tinderCards">
            <div className="tinderCards__cardContainer">
              {people.map((person) => (
                <TinderCard
                  className="swipe"
                  key={person.id}
                  preventSwipe={["up", "down"]}
                  onSwipe={(dir) => swiped(dir, person.id)}
                  onCardLeftScreen={() => outOfFrame(person.id)}
                >
                  <div
                    className="card"
                    style={{ backgroundImage: `url(${person.url})` }}
                  ></div>
                </TinderCard>
              ))}
            </div>
          </div>
          <SwipeButtons />
        </div>
        <div className="col-md-2">
          <Sidebar title={"Gallery"} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
