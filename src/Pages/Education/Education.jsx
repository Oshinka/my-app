import React from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

class Education extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <hr />

        <div className="row">
          <div className="col-md-3">
            <Navbar education={"active"} />
          </div>
          <div className="col-md-7">
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">G C E Ordinary Level</h3>
              </div>
              <div className="panel-body">D S Senanayake College</div>
            </div>
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">G C E Advanced Level</h3>
              </div>
              <div className="panel-body">D S Senanayake College</div>
            </div>
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">Bsc (Computer Science)</h3>
              </div>
              <div className="panel-body">University of Colombo School of Computing</div>
            </div>
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">Internship (Software Engineer)</h3>
              </div>
              <div className="panel-body">Content Management Solutions</div>
            </div>
          </div>
          <div className="col-md-2">
            <Sidebar title={"Education"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
