import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppoinments = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const newDate = date ? date : new Date();
  const formatedDate = format(newDate, "PP");
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formatedDate], () =>
    fetch(`http://localhost:5000/available?date=${formatedDate}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${formatedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [formatedDate]);
  return (
    <div className="my-40">
      <h3 className="text-secondary text-2xl font-bold text-center">
        Available Appointments on:
        {formatedDate}
      </h3>
      {/* <h3 className="text-secondary text-2xl font-bold text-center">
        Available Appointments on:
        {date ? format(date, "PP") : format(new Date(), "PP")}
      </h3> */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {services?.map((service) => (
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
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppoinments;
