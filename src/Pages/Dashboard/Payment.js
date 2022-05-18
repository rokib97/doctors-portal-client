import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0jSvKKx0h80NePSGEKC696ami7QfwJJ77LE03WKBdqcs9ng1jTatdI2lFk2VT8hF8uCFOXum6UTlMI2am78qyX00gCuUNiCC"
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
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
