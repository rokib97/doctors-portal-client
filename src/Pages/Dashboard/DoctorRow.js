import React from "react";
const DoctorRow = ({ doctor, index, refetch, setDeleteDoctor }) => {
  const { name, specialty, img, email } = doctor;
  console.log(email);

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <label
          onClick={() => setDeleteDoctor(doctor)}
          for="delete-confirm-modal"
          class="btn btn-xs btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
