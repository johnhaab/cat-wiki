import React from "react";
import Logo from "../../assets/CatwikiLogo.svg";
import Rating from "../../components/Rating/Rating";

import "./CatDetails.scss";

const CatDetails = ({ data }) => {
  const temp = data.temperament.split(", ");
  return (
    <div className="container-cat-details">
      <img src={Logo} alt="CatwikiLogo" className="logo" />

      <section className="container-cat-body">
        <div className="container-cat-text">
          <div className="container-cat-photo">
            <div className="box-for-photo"></div>
            <img src={data.image.url} alt={data.name} />
          </div>
          <div className="container-cat-desc">
            <div className="top-level">
              <h1>{data.name}</h1>
              <p className="desc">{data.description}</p>
              <p className="temp">
                Temperament:{" "}
                {temp.map((item, index) => {
                  return (
                    <span key={index}>
                      {item}
                      {index < temp.length - 1 ? ", " : ""}
                    </span>
                  );
                })}
              </p>
              <p className="origin">
                Origin: <span>{data.origin}</span>
              </p>
              <p className="life-span">
                Life Span: <span>{data.life_span} years</span>
              </p>
              <div className="low-level">
                <div className="adapt">
                  <p>Adaptability:</p>
                  <Rating boxCount={data.adaptability} />
                </div>
                <div className="affection">
                  <p>Affection level:</p>
                  <Rating boxCount={data.affection_level} />
                </div>
                <div className="adapt">
                  <p>Child Friendly:</p>
                  <Rating boxCount={data.child_friendly} />
                </div>
                <div className="adapt">
                  <Rating boxCount={data.adaptability} />
                </div>
                <div className="adapt">
                  <Rating boxCount={data.adaptability} />
                </div>
                <div className="adapt">
                  <Rating boxCount={data.adaptability} />
                </div>
                <div className="adapt">
                  <Rating boxCount={data.adaptability} />
                </div>
                <div className="adapt">
                  <Rating boxCount={data.adaptability} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <footer>
        <img src={Logo} alt="logo" />
        <p>
          &copy; created by{" "}
          <span>
            <a href="https://www.twitter.com/johnlhaab">johnhaab</a>
          </span>{" "}
          - devChallenge.io 2023
        </p>
      </footer> */}
    </div>
  );
};

export default CatDetails;
