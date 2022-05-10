import React from "react";
import bg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
      className="hero lg:py-32 md:py-16 py-8"
    >
      <div className="hero-content flex-col lg:flex-row-reverse md:flex-row-reverse">
        <img
          className="lg:max-w-lg md:max-w-md sm:max-w-sm rounded-lg shadow-2xl"
          src={chair}
          alt=""
        />
        <div>
          <h1 className="lg:text-6xl text-4xl font-bold">
            Your New Smile Starts Here
          </h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <PrimaryButton />
        </div>
      </div>
    </div>
  );
};

export default Banner;
