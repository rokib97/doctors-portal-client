import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";
const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      location: "California",
      ureview:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
    },
    {
      _id: 2,
      name: "Winson Herry",
      location: "California",
      ureview:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
    },
    {
      _id: 3,
      name: "Winson Herry",
      location: "California",
      ureview:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
    },
  ];
  return (
    <section>
      <div className="flex justify-between">
        <div className="px-6">
          <h3 className="text-secondary text-2xl font-bold">Appointment</h3>
          <h2 className="text-4xl mt-2">Make an appointment Today</h2>
        </div>
        <div>
          <img className="lg:w-48 w-24" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
