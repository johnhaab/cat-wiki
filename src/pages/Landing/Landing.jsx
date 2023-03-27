import React from "react";
import "./Landing.scss";
import Logo from "../../assets/CatwikiLogo.svg";

import AutocompleteSearch from "../../components/AutocompleteSearch/Autocomplete";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";

import CatOne from "../../assets/image 1.png";
import CatTwo from "../../assets/image 2.png";
import CatThree from "../../assets/image 3.png";

const Landing = ({
  data,
  handleSearch,
  searchTerm,
  device,
  handlePhoneSearchClick,
  isClicked,
  handlePhoneSearch,
  handleCatClick,
  mobileSearchTerm,
  fetchCatData,
  topTenCatsDetails,
}) => {
  return (
    <div className="container">
      <img src={Logo} alt="CatwikiLogo" className="logo" />

      <div className="wrapper-main">
        <div className="top-card">
          <img src={Logo} alt="CatwikiLogo" className="top-card-logo" />
          <p>
            Get to know more about your <br />
            cat breed
          </p>
          <div className="search-box">
            <AutocompleteSearch
              data={data}
              searchTerm={searchTerm}
              handleSearch={handleSearch}
              device={device}
              handlePhoneSearchClick={handlePhoneSearchClick}
              isClicked={isClicked}
              handleCatClick={handleCatClick}
              handlePhoneSearch={handlePhoneSearch}
              mobileSearchTerm={mobileSearchTerm}
              fetchCatData={fetchCatData}
              className="search"
            />
          </div>
        </div>
      </div>

      <div className="bottom-card" style={{ zIndex: "1" }}>
        <div className="btn-header">
          <p>Most Searched Breeds</p>
          <div className="underline"></div>
        </div>
        <div className="wrapper-btn-body">
          <h1>
            66+ Breeds For you <br /> to discover
          </h1>
          <Link
            to="/leaderboard"
            style={{ textDecoration: "none", padding: "0", margin: "0" }}
          >
            <div className="wrapper-see-more">
              <p>SEE MORE</p>
              <CgArrowLongRight className="arrow" />
            </div>
          </Link>
        </div>

        <div className="images">
          <div className="one">
            <div className="combined-img">
              <div className="yellow"></div>
              <img
                className="img-one"
                src={topTenCatsDetails[0].image.url}
                alt="cat #1"
              ></img>
            </div>
            <p>{topTenCatsDetails[0].name}</p>
          </div>
          <div className="two">
            <img
              className="img-two"
              src={topTenCatsDetails[1].image.url}
              alt="cat #2"
            ></img>
            <p>{topTenCatsDetails[1].name}</p>
          </div>
          <div className="three">
            <img
              className="img-three"
              src={topTenCatsDetails[2].image.url}
              alt="cat #3"
            ></img>
            <p>{topTenCatsDetails[2].name}</p>
          </div>
          <div className="four">
            <img
              className="img-four"
              src={topTenCatsDetails[3].image.url}
              alt="cat #4"
            ></img>
            <p>{topTenCatsDetails[3].name}</p>
          </div>
        </div>
      </div>

      <section className="why">
        <div className="wrapper-why">
          <div className="why-body">
            <div className="why-body-underline"></div>
            <h1>
              Why should you <br /> have a cat?
            </h1>
            <p>
              Having a cat around you can actually trigger the release of
              calming chemicals in your body which lower your stress and anxiety
              levels.
            </p>
            <div className="why-body-wrapper">
              <h5>READ MORE</h5>
              <CgArrowLongRight className="arrow" />
            </div>
          </div>

          <div className="why-pics">
            <img src={CatTwo} alt="cat 2" className="cat-one" />
            <img src={CatOne} alt="cat 1" className="cat-two" />
            <img src={CatThree} alt="cat 3" className="cat-three" />
          </div>
        </div>
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

export default Landing;
