// src/views/Homepage.js
import React from 'react';

function Homepage() {
  return (
    <div>
      <>
        <main role="main" style={{ marginTop: 50 }}>
          {/* Main jumbotron for a primary marketing message or call to action */}
          <div className="jumbotron text-white bg-dark text-center">
            <div className="container">
              <h1 className="display-4">Welcome to Our Website!</h1>
              <p className="lead">
                Discover unique content and amazing features designed to inspire and inform.
              </p>
              <p>
                <a className="btn btn-primary btn-lg" href="#" role="button">
                  Get Started »
                </a>
              </p>
            </div>
          </div>

          {/* Three columns of text below the jumbotron */}
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    className="card-img-top"
                    src="https://via.placeholder.com/350x150"
                    alt="Random content"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Our Mission</h4>
                    <p className="card-text">
                      We aim to provide the highest quality services to meet all your needs.
                      Join us on our journey to make a difference.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a className="btn btn-secondary" href="#" role="button">
                      Learn More »
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    className="card-img-top"
                    src="https://via.placeholder.com/350x150"
                    alt="Innovative features"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Innovative Solutions</h4>
                    <p className="card-text">
                      From cutting-edge technology to creative problem solving, we
                      bring innovation to everything we do.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a className="btn btn-secondary" href="#" role="button">
                      Discover »
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    className="card-img-top"
                    src="https://via.placeholder.com/350x150"
                    alt="Community"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Our Community</h4>
                    <p className="card-text">
                      Be a part of a vibrant, thriving community that empowers individuals
                      to achieve their best.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a className="btn btn-secondary" href="#" role="button">
                      Join Us »
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <hr />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-light py-3">
          <div className="container text-center">
            <p className="mb-0">© Sanofer Niswan 2024 - All Rights Reserved</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">Privacy</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Terms</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </footer>
      </>
    </div>
  );
}

export default Homepage;
