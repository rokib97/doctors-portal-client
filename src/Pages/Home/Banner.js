import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
const Banner = () => {
  return (
    <div class="hero lg:py-32 md:py-16 py-8">
      <div class="hero-content flex-col lg:flex-row-reverse md:flex-row-reverse">
        <img
          class="lg:max-w-lg md:max-w-md sm:max-w-sm rounded-lg shadow-2xl"
          src={chair}
          alt=""
        />
        <div>
          <h1 class="lg:text-6xl text-4xl font-bold">
            Your New Smile Starts Here
          </h1>
          <p class="py-6">
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
