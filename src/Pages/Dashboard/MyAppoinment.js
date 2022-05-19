import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppoinment = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [appointments, setAppoinments] = useState([]);
  useEffect(() => {
    if (user) {
      fetch(
        `https://tranquil-earth-80495.herokuapp.com/booking?patient=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.ststus === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setAppoinments(data);
        });
    }
  }, [user, navigate]);

  return (
    <div>
      <h2 className="font-bold mb-4">Appoinment : {appointments?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>NAME</th>
              <th>SERVICE</th>
              <th>TIME</th>
              <th>DATE</th>
              <th>PAYMENT</th>
            </tr>
          </thead>
          <tbody>
            {appointments?.map((appoinment, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{appoinment.patientName}</td>
                <td>{appoinment.treatment}</td>
                <td>{appoinment.slot}</td>
                <td>{appoinment.date}</td>
                <td>
                  {appoinment.price && !appoinment.paid && (
                    <Link to={`/dashboard/payment/${appoinment._id}`}>
                      <button className="btn btn-xs btn-success">Pay</button>
                    </Link>
                  )}
                  {appoinment.price && appoinment.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>

                      <p>
                        Transaction Id:
                        <span className="text-success">
                          {appoinment.transactionId}
                        </span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppoinment;
