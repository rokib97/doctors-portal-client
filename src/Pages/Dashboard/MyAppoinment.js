import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppoinment = () => {
  const [user] = useAuthState(auth);
  const [appointments, setAppoinments] = useState([]);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setAppoinments(data));
    }
  }, [user]);

  return (
    <div>
      <h2 className="font-bold mb-4">Appoinment : {appointments.length}</h2>
      <div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>NAME</th>
              <th>SERVICE</th>
              <th>TIME</th>
              <th>DATE</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appoinment, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{appoinment.patientName}</td>
                <td>{appoinment.treatment}</td>
                <td>{appoinment.slot}</td>
                <td>{appoinment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppoinment;
