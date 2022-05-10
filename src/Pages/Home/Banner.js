import React from "react";
import chair from "../../assets/images/chair.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse md:flex-row-reverse">
        <img
          class="lg:max-w-lg md:max-w-md sm:max-w-sm rounded-lg shadow-2xl"
          src={chair}
          alt=""
        />
        <div>
          <h1 class="lg:text-6xl md:text-4xl text-3xl font-bold">
            Your New Smile Starts Here
          </h1>
          <p class="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button class="btn btn-primary text-uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
