import React from "react";
import { useNavigate } from "react-router-dom";
import bannerImg from "../images/restauranfood.jpg";

const Header = ({ onShowBookingForm }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    onShowBookingForm();
    navigate("/booking");
  };

  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="btn" onClick={handleButtonClick}>Reserve Table</button>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="Restaurant food" />
        </div>
      </section>
    </header>
  );
};

export default Header;