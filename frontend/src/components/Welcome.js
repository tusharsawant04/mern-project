import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div className="h-100vh custom-bg-color">
      <div className="box">
        {[...Array(10)].map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
      <div className="page relative">
        <div className="page-content">
          <div className="container text-center">
            <div className="display-2 text-white mb-5 font-weight-bold error-text">
              Coming soon
            </div>
            <h1 className="h3 mb-3 text-white-80">
              Site Nearly Already Ready
            </h1>
            <p className="h5 font-weight-normal mb-5 leading-normal text-white-50">
              You may have mistyped the address or the page may have moved.
            </p>
            <div className="row">
              <div className="col-md-6 d-block mx-auto">
                <div className="input-group mb-8">
                  <input
                    className="form-control"
                    placeholder="Enter Your Email"
                    type="text"
                  />
                  <span className="">
                    <button className="btn btn-secondary br-tl-0 br-bl-0" type="button">
                      <span className="input-group-btn">Notify Me</span>
                    </button>
                  </span>
                </div>
                <div className="custom-btns">
                  <button className="btn btn-icon" type="button">
                    <span className="btn-inner-icon">
                      <i className="fa fa-facebook-f"></i>
                    </span>
                  </button>
                  <button className="btn btn-icon" type="button">
                    <span className="btn-inner-icon">
                      <i className="fa fa-google"></i>
                    </span>
                  </button>
                  <button className="btn btn-icon" type="button">
                    <span className="btn-inner-icon">
                      <i className="fa fa-twitter"></i>
                    </span>
                  </button>
                  <button className="btn btn-icon" type="button">
                    <span className="btn-inner-icon">
                      <i className="fa fa-pinterest-p"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Welcome;
