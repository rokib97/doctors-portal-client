import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppoinments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formatedDate = format(date, "PP");
  useEffect(() => {
    fetch(`http://localhost:5000/available?date=${formatedDate}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [formatedDate]);
  return (
    <div className="my-40">
      <h3 className="text-secondary text-2xl font-bold text-center">
        Available Appointments on:
        {date ? format(date, "PP") : format(new Date(), "PP")}
      </h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {services.map((service) => (
          <Service
            key={service._id}
            setTreatment={setTreatment}
            service={service}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          setTreatment={setTreatment}
          treatment={treatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppoinments;
