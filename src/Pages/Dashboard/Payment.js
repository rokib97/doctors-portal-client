import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1DcCAEGFyJJ0zROqcAybdN1iZgfZDHVBxiNBpoT7GhZM1fSyYC6O5mv7kDQYFoJ45fn5eWBwgwUnBh9cpJ4u0U00v4bqtawT"
);
const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;
  const { data: appoinment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">
            Hello, {appoinment.patientName}
          </p>
          <h2 class="card-title">Pay for: {appoinment.treatment}</h2>
          <p className="text-1xl">
            Your Appoinment:
            <span className="text-orange-500"> {appoinment.date}</span> at
            <span className="text-orange-600"> {appoinment.slot}</span>
          </p>
          <p>Please pay: ${appoinment.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appoinment={appoinment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
