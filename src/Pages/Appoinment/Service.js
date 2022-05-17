import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body items-center text-center py-12">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try another date</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
        </p>
        <p>Price: ${price}</p>
        <label
          onClick={() => setTreatment(service)}
          disabled={slots.length === 0}
          htmlFor="booking-modal"
          className="btn btn-wide btn-secondary bg-gradient-to-r from-secondary to-primary text-white font-bold mt-2"
        >
          Book Appointment
        </label>
      </div>
    </div>
  );
};

export default Service;
