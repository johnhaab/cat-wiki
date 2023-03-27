import React from "react";

import { Link } from "react-router-dom";
import Logo from "../../assets/CatwikiLogo.svg";

import "./TopTen.scss";

const TopTen = ({ topTenCatsDetails }) => {
  return (
    <div className="container-top">
      <Link to="/">
        <img src={Logo} alt="CatwikiLogo" className="logo" />
      </Link>

      <section className="top-body">
        <h1 className="head-line">Top 10 most searched breeds</h1>

        {topTenCatsDetails.map((item, index) => {
          return (
            <div className="top-ten">
              <div className="top-image">
                <img
                  src={topTenCatsDetails[index].image.url}
                  alt={topTenCatsDetails[index].name}
                />
              </div>
              <div className="top-desc">
                <h1>
                  {index + 1}. <span>{topTenCatsDetails[index].name}</span>
                </h1>
                <p>{topTenCatsDetails[index].description}</p>
              </div>
            </div>
          );
        })}
      </section>

      <footer>
        <img src={Logo} alt="logo" />
        <p>
          &copy; created by{" "}
          <span>
            <a href="https://www.twitter.com/johnlhaab">johnhaab</a>
          </span>{" "}
          - devChallenge.io 2023
        </p>
      </footer>
    </div>
  );
};

export default TopTen;
