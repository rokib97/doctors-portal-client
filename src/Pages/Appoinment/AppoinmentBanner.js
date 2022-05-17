import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";
const AppoinmentBanner = ({ date, setDate }) => {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  const disabledDays = [{ from: new Date(1000, 1, 1), to: yesterday }];
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
            defaultMonth={new Date()}
            disabled={disabledDays}
            onDayClick={setDate}
            mode="single"
            selected={date}
            // onSelect={setDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
