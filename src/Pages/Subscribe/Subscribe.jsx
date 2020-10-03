import React from "react";
import Header from "../../Components/Header/Header";
import "./subscribe.css";

class Subscribe extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <hr />
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <form className="was-validated" >
                    <small className="red">* Fields are required</small>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                        <label for="firsName">First name<span className="red">*</span></label>
                        <input type="text" className="form-control" id="firsName" required />
                        </div>
                        <div className="col-md-6 mb-3">
                        <label for="lastName">Last name<span className="red">*</span></label>
                        <input type="text" className="form-control" id="lastName" required />
                        </div>
                    </div>
                    <div className="form-group " >
                        <label for="email">Email address<span className="red">*</span></label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <label for="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                    </div>
                    <div className="form-group">
                        <legend className="col-form-label col-sm-2 pt-0">Gender<span className="red">*</span></legend>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="male" name="gender" className="custom-control-input" required/>
                            <label className="custom-control-label" for="male">Male</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="female" name="gender" className="custom-control-input" required/>
                            <label className="custom-control-label" for="female">Female</label>
                        </div>
                    </div>
                    <div className="custom-control custom-switch form-group">
                        <input type="checkbox" className="custom-control-input" id="customSwitch" />
                        <label className="custom-control-label" for="customSwitch">Keep me inform</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}

export default Subscribe;
