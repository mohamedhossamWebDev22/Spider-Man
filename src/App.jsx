//eslint-disable-next-line no-unused-vars
import React from "react";

const App = () => {
  return (
    <>
      <nav className="navbar text-center text-light navbar-light bg-black px-3 fixed-top">
        {/* playstation btn*/}
        <div className="nav-item">
          <a
            className="nav-link text-light"
            href="https://www.playstation.com/en-gb/games/marvels-spider-man-miles-morales/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-playstation"
              viewBox="0 0 16 16"
            >
              <path d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356ZM9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.454 8.454 0 0 1-4.018-.323Z" />
            </svg>
          </a>
        </div>
        {/* logo */}
        <a className="navbar-brand mx-auto" href="#">
          <img src="/src/assets/logo.png" width={50} height={60} alt="hh" />
        </a>
        {/* menu btn */}
        <a className="nav-item">
          <button
            className="btn btn-sm btn-outline-light"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
        </a>
        {/* links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto ">
            <li>
              <a href="https://en.wikipedia.org/wiki/Marvel%E2%80%99s_Spider-Man:_Miles_Morales" className="navbar-link text-muted">
                Wikipedia
              </a>
            </li>
            <div className="dropdown-divider text-muted"></div>
            <li>
              <a href="https://www.marvel.com/games/marvel-s-spider-man-miles-morales" className="navbar-link text-muted">
                Marvel
              </a>
            </li>
            <div className="dropdown-divider text-muted"></div>
            <li>
              <a href="" className="navbar-link text-muted">About Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default App;
