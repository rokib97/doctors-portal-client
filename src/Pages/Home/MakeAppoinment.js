import React from "react";
import appointment from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppoinment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="lg:flex justify-center items-center mt-32 mb-8"
    >
      <div className="flex-1">
        <img className="mt-[-200px] hidden lg:block" src={doctor} alt="" />
      </div>
      <div className="flex-1 text-white p-8">
        <h3 className="text-secondary text-2xl font-bold">Appointment</h3>
        <h2 className="text-4xl mt-2">Make an appointment Today</h2>
        <p className="py-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryButton>GET STARTED</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppoinment;
