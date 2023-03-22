import React, { Component } from "react";
import axios from "axios";
import Landing from "./pages/Landing/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import CatDetails from "./pages/CatDetails/CatDetails";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      imgs: [],
      isLoaded: false,
      autoSearch: false,
      searchTerm: "",
      mobileSearchTerm: "",
      device: "",
      isClicked: false,
      isOnDetailsPage: false,
      catData: null,
    };
  }

  detechDeviceType = () => {
    const userAgent = navigator.userAgent;
    if (/Android/i.test(userAgent)) {
      this.setState({
        device: "phone",
      });
      return "phone";
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
      this.setState({
        device: "phone",
      });
      return "phone";
    } else if (/Windows/i.test(userAgent)) {
      this.setState({
        device: "pc",
      });
      return "pc";
    } else if (/Macintosh|MacIntel|MacPPC|Mac68K/i.test(userAgent)) {
      this.setState({
        device: "pc",
      });
      return "pc";
    } else if (/Tablet|iPad/i.test(userAgent)) {
      this.setState({
        device: "tablet",
      });
      return "tablet";
    } else {
      this.setState({
        device: "unknown",
      });
      return "unknown";
    }
  };

  async componentDidMount() {
    await axios
      .get(
        "https://api.thecatapi.com/v1/breeds?&api_key=live_c2XLSKXZ5gDb1bxbUKzqjkGoSA8cJXprOsqkeHYRLzBlsnmUsk52jXvmxrcLi8ZZ"
      )
      .then((response) => {
        this.setState({
          data: response.data,
          isLoaded: true,
        });
        console.log(this.state.data);
      })
      .catch((error) => {
        // console.log(error);
      });

    this.detechDeviceType();
    console.log(this.state.device);
  }

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value });
    console.log(e.target.value);
  };

  handlePhoneSearch = (e) => {
    this.setState({ mobileSearchTerm: e.target.value });
    console.log(e.target.value);
  };

  handlePhoneSearchClick = () => {
    this.setState(
      (prevState) => ({
        isClicked: !prevState.isClicked,
      }),
      () => {
        console.log(this.state.isClicked);
      }
    );
  };

  handleCatClick = async (catId) => {
    const response = await fetch(
      "https://api.thecatapi.com/v1/breeds?&api_key=live_c2XLSKXZ5gDb1bxbUKzqjkGoSA8cJXprOsqkeHYRLzBlsnmUsk52jXvmxrcLi8ZZ"
    );
    const data = await response.json();
    const selectedCat = await data.find((cat) => cat.id === catId);
    this.setState({ catData: selectedCat });
    console.log(selectedCat);
  };

  render() {
    const catInfo = this.state.catData;
    const router = createBrowserRouter([
      {
        path: "/",
        element: (
          <Landing
            data={this.state.data}
            handleSearch={this.handleSearch}
            searchTerm={this.state.searchTerm}
            device={this.state.device}
            isClicked={this.state.isClicked}
            handlePhoneSearchClick={this.handlePhoneSearchClick}
            handlePhoneSearch={this.handlePhoneSearch}
            mobileSearchTerm={this.state.mobileSearchTerm}
            handleCatClick={this.handleCatClick}
            fetchCatData={this.fetchCatData}
          />
        ),
      },
      {
        path: "/details",
        element: this.state.catData ? (
          <CatDetails data={catInfo} />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <CircularProgress />
            <p style={{ paddingTop: "2rem" }}>Loading, please be paitent.</p>
          </div>
        ),
      },
    ]);

    if (this.state.isLoaded === true) {
      return (
        <>
          <RouterProvider router={router} />
        </>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
          <p style={{ paddingTop: "2rem" }}>Loading, please be paitent.</p>
        </div>
      );
    }
  }
}

export default Main;
