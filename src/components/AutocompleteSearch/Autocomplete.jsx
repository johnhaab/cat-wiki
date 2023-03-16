import React, { useState } from "react";
import "./Autocomplete.scss";

import { AiOutlineSearch } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import Backdrop from "@mui/material/Backdrop";
import { Link } from "react-router-dom";

const Autocomplete = ({
  data,
  handleSearch,
  searchTerm,
  device,
  handlePhoneSearchClick,
  handlePhoneSearch,
  isClicked,
  mobileSearchTerm,
  handleCatClick,
}) => {
  const filteredData = data.filter((data) =>
    data.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredDataMobile = data.filter((data) =>
    data.name.toLowerCase().includes(mobileSearchTerm.toLowerCase())
  );

  return (
    <>
      {device === "pc" ? (
        <div className="wrapper">
          <input
            type="text"
            placeholder="Enter your breed"
            onChange={(e) => handleSearch(e)}
          />
          <AiOutlineSearch className="search-logo" />
        </div>
      ) : device === "phone" ? (
        <div className="phone-wrapper">
          <button type="text" onClick={() => handlePhoneSearchClick()}>
            Search <AiOutlineSearch className="search-logo" />
          </button>
        </div>
      ) : null}
      {device === "unknown" &&
      searchTerm.length >= 1 &&
      filteredData.length > 0 ? (
        <div className="pop-up" style={{ overflowY: "scroll" }}>
          {filteredData.map((item, index) => (
            <Link to="/details">
              <p key={index}>{item.name}</p>
            </Link>
          ))}
        </div>
      ) : device === "pc" &&
        searchTerm.length >= 1 &&
        filteredData.length > 0 ? (
        <div className="pop-up" style={{ overflowY: "scroll" }}>
          {filteredData.map((item, index) => (
            <p key={index} onClick={() => handleCatClick(item.id)}>
              <Link to="/details">
                <p key={index}>{item.name}</p>
              </Link>
            </p>
          ))}
        </div>
      ) : device === "tablet" &&
        searchTerm.length >= 1 &&
        filteredData.length > 0 ? (
        <div className="pop-up" style={{ overflowY: "scroll" }}>
          {filteredData.map((item, index) => (
            <Link to="/details">
              <p key={index}>{item.name}</p>
            </Link>
          ))}
        </div>
      ) : null}
      {isClicked === true ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <div className="container-phone-popup">
            <div className="phone-popup-wrapper">
              <div className="phone-popup-search">
                <input
                  type="text"
                  name="phone-popup-search"
                  placeholder="Enter your breed"
                  onChange={(e) => handlePhoneSearch(e)}
                />
                <AiOutlineSearch className="search-logo-phone-popup" />
              </div>
              <div className="close-btn-phone-popup">
                <GrFormClose onClick={() => handlePhoneSearchClick()} />
              </div>
            </div>
            <div className="results">
              {device === "phone" &&
              mobileSearchTerm.length >= 1 &&
              filteredDataMobile.length > 0 ? (
                <div className="mobile-pop-up" style={{ overflowY: "scroll" }}>
                  {filteredDataMobile.map((item, index) => (
                    <p key={index} onClick={() => handleCatClick(item.id)}>
                      <Link to="/details">
                        <p key={index}>{item.name}</p>
                      </Link>
                    </p>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </Backdrop>
      ) : null}
    </>
  );
};

export default Autocomplete;
