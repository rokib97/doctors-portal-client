import React from "react";
import chair from "../../assets/images/chair.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse image-details ">
        <img src={chair} class="rounded-lg shadow-2xl" alt="" />
        <div className="banner-left">
          <h1 class="text-6xl font-bold">Your New Smile Starts Here</h1>
          <p class="py-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            blanditiis molestiae fugit ex consequuntur, assumenda provident
            porro nisi qui et voluptate modi soluta esse doloremque nesciunt
            mollitia illo illum tenetur.
          </p>
          <button class="btn btn-primary text-uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
