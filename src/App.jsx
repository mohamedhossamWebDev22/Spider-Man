//eslint-disable-next-line no-unused-vars
import React from "react";

import Navbar from "./components/navbar.jsx";

const App = () => {
  return (
    <>
      {/* nav bar  */}
      <Navbar />

      {/* landing page */}
      <div className="bg-red py-5">
        <div className="container py-5">
          {/* landing page  */}
          <div className="row my-5">
            <div className="col-md-8 col-sm-11">
              <h5 className="display-2">Spider Man</h5>
              <h6 className="display-3">Miles Morales</h6>

              <div className="mt-5">
                <button className="btn btn-dark text-danger shadow">
                  <a
                    className="text-light display-3 p-3"
                    href="https://www.playstation.com/en-gb/games/marvels-spider-man-miles-morales/"
                  >
                    Buy Game
                  </a>
                </button>
              </div>
            </div>
            <div className="col-md-4 col-sm-0 text-center">
              <img
                className="mt-5 shadow border-R"
                src="/src/assets/img1.png"
              />
            </div>
          </div>
        </div>
      </div>

      {/* carousel */}
      <div className="py-5 px-5 bg-black">
        <div className="px-5">
          <div className="mx-5">
            <div className="mx-5">
              <div className="mx-5">
                <div className="mx-5">
                  <div className="mx-5">
                    <div className="mx-5 text-center">
                      <div
                        id="carouselExampleCaptions"
                        className="carousel slide"
                        data-ride="carousel"
                      >
                        <ol className="carousel-indicators">
                          <li
                            data-target="#carouselExampleCaptions"
                            data-slide-to="0"
                            className="active"
                          ></li>
                          <li
                            data-target="#carouselExampleCaptions"
                            data-slide-to="1"
                          ></li>
                          <li
                            data-target="#carouselExampleCaptions"
                            data-slide-to="2"
                          ></li>
                        </ol>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              src="src/assets/img1.png"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                              <h5>Insane Details</h5>
                              <p>
                                Insane Graphics And Details
                              </p>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              src="src/assets/img2.png"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                              <h5>Powerful Gameplay</h5>
                              <p>
                                Insane Gameplay With This Powers and lights!!
                              </p>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              src="src/assets/img3.png"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                              <h5>Super Animation</h5>
                              <p>
                                The Same Animation From The First Chapter.
                              </p>
                            </div>
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          href="#carouselExampleCaptions"
                          role="button"
                          data-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          href="#carouselExampleCaptions"
                          role="button"
                          data-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
