import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );
  const imageStorageKey = `84ac25e6f0a66515cd8221236b78c8f9`;
  /**
   * Three ways to store image //Practice Project free opne public storage is okay.
   * 1) Third Pary - ImgeBB
   * 2)Your Own Storage in your own server (file system)
   * 3) database : mongodb
   *
   * YUP : to validate file
   *
   */
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    console.log(formData);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const img = result.data.url;
        const doctor = {
          name: data.name,
          email: data.email,
          specialty: data.specialty,
          img: img,
        };

        // send doctor data to database
        fetch("http://localhost:5000/doctor", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(doctor),
        })
          .then((res) => res.json())
          .then((inserted) => {
            if (inserted.insertedId) {
              toast.success("Doctor added successfully");
              reset();
            } else {
              toast.error("Failed to add the doctor");
            }
          });
      });
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <h2 className="text-2xl">Add A Doctor</h2>
      <div className="mt-16 flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Specialty</span>
                </label>
                <select
                  {...register("specialty")}
                  className="input input-bordered w-full max-w-xs"
                >
                  {services.map((service) => (
                    <option key={service._id} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  {...register("image", {
                    required: {
                      value: true,
                      message: "Image is Required",
                    },
                  })}
                  type="file"
                  placeholder="Your Image"
                  className="w-full max-w-xs"
                />
                <label className="label">
                  {errors.image?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <input
                className="btn w-full max-w-xs text-white"
                type="submit"
                value="Add"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDoctor;
