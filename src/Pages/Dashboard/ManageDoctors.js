import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div>
        <h2 className="text-2xl">Manage Doctors : {doctors.length}</h2>
        <div class="overflow-x-auto mt-2">
          <table class="table table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Specialty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors?.map((doctor, index) => (
                <DoctorRow
                  key={doctor._id}
                  doctor={doctor}
                  index={index}
                  refetch={refetch}
                  setDeleteDoctor={setDeleteDoctor}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {deleteDoctor && (
        <DeleteConfirmModal
          refetch={refetch}
          deleteDoctor={deleteDoctor}
          setDeleteDoctor={setDeleteDoctor}
        ></DeleteConfirmModal>
      )}
    </>
  );
};

export default ManageDoctors;
