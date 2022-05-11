import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";
const AppoinmentBanner = ({ date, setDate }) => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
      className="hero lg:py-32 md:py-16 py-8"
    >
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <img
          src={chair}
          className="lg:max-w-lg rounded-lg shadow-2xl"
          alt="Dentist Chair"
        />
        <div>
          <DayPicker
            className=""
            mode="single"
            selected={date}
            onSelect={setDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
