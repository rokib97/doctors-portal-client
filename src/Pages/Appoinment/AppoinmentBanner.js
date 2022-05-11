import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";
const AppoinmentBanner = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
      class="hero lg:py-32 md:py-16 py-8"
    >
      <div class="hero-content flex-col lg:flex-row-reverse gap-20">
        <img
          src={chair}
          class="lg:max-w-lg rounded-lg shadow-2xl"
          alt="Dentist Chair"
        />
        <div>
          <DayPicker
            className=""
            mode="single"
            selected={date}
            onSelect={setDate}
          />
          <p className="mt-3">You have selected: {format(date, "PP")}</p>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
