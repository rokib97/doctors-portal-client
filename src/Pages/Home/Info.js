import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-12">
      <InfoCard
        cardTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        cardText="Lorem Ipsum is simply dummy text of the pri"
        img={clock}
      ></InfoCard>
      <InfoCard
        cardTitle="Visit our location"
        bgClass="bg-accent"
        cardText="Brooklyn, NY 10036, United States"
        img={marker}
      ></InfoCard>
      <InfoCard
        cardTitle="Contact us now"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        cardText="+000 123 456789"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
