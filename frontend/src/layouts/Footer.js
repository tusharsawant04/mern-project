import React from 'react';

const Footer = () => {
  return (
    
    <div className="row">
      <div className="col-md-12">
        <div className="card overflow-hidden">
          <div className="">
            <div className="footer br-bl-7 br-br-7 border-top-0 p-0">
              <div className="">
                <div className="p-3">
                  <div className="row align-items-center text-center">
                    <div className="col-lg-6 col-md-6 d-none d-md-block ">
                      <div className="social">
                        <ul className="text-center m-0 ">
                          <li>
                            <a className="social-icon" href=""><i className="fa fa-twitter"></i></a>
                          </li>
                          <li>
                            <a className="social-icon" href=""><i className="fa fa-rss"></i></a>
                          </li>
                          <li>
                            <a className="social-icon" href=""><i className="fa fa-youtube"></i></a>
                          </li>
                          <li>
                            <a className="social-icon" href=""><i className="fa fa-linkedin"></i></a>
                          </li>
                          <li>
                            <a className="social-icon" href=""><i className="fa fa-google-plus"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 text-right privacy">
                      <a href="#" className="btn btn-link" >Privacy</a>
                      <a href="#" className="btn btn-link" >Terms</a>
                      <a href="#" className="btn btn-link" >About Us</a>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center flex-row-reverse border-top">
                  <div className="col-lg-12 col-sm-12 mt-lg-0 text-center p-3">
                    Copyright © 2020 <a href="#">Admitro</a>. Designed by <a href="#">Spruko Technologies Pvt.Ltd</a> All rights reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Footer;
