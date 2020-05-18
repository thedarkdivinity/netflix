import React from "react";
import ReactDOM from "react-dom";
ReactDOM.render(
  <>
    <div className="cards">
      <div className="card">
        <img
          src="https://wallpapercave.com/wp/wp4056410.jpg"
          alt="myPic"
          className="card__img"
        />
        <div className="card__info">
          <span className="card__category">A Netflix Original Series</span>
          <h3 className="card__title">DARK</h3>
          <a
            href="https://www.netflix.com/in/title/80990668?source=35"
            target="_blank"
          >
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  </>,
  document.getElementById("root")
);
