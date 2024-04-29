'use client'
import React from "react";
import { useForm } from "react-hook-form";
import { FaArrowCircleRight } from "react-icons/fa";
import SecondValidation from "./SecondValidation";

const Validation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit= (data: any) => console.log(data);
  return (
    <div>
      <h2 className="validation-text">Validation</h2>
      <div className="flexvalidate">
        <div>
          <h3>Bootstrap validation normal</h3>
          
            <form
              className="input-groupBasic basic-element  "
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="">
                <div className="flex">
                  <label htmlFor="ftext">FirstName</label>
                  <input
                    className="input"
                    id="fname"
                    placeholder="Some text value"
                    {...register("firstname", {
                      required: true,
                      maxLength: 30,
                    })}
                  />
                </div>

                <div className="flex">
                  <label htmlFor="lname">LastName</label>
                  <input
                    className="input"
                    id="lname"
                    type="text"
                    {...register("lastname", {
                      required: true,
                      maxLength: 30,
                    })}
                  />
                </div>

                <div className="flex">
                  <label htmlFor="username">Username</label>
                  <input
                    className="input"
                    id="username"
                    {...register("username", { required: true, maxLength: 30 })}
                  />
                </div>

                <div className="flex">
                  <label htmlFor="city">City</label>
                  <input
                    className="input"
                    id="Date"
                    type="text"
                    {...register("city", { required: true, maxLength: 30 })}
                  />
                </div>

                <div className="flex">
                  <label htmlFor="state">State</label>
                  <input
                    className="input"
                    id="ss"
                    {...register("state", { required: true, maxLength: 30 })}
                  />
                </div>
              </div>

              {errors.name && errors.name.type === "required" && (
                <span className="text-red">This is required</span>
              )}
              {errors.name && errors.name.type === "maxLength" && (
                <span className="text-green">Max length exceeded</span>
              )}

              <button typeof="submit" className="cssbuttons-io-button">
                Submit
                <div className="icon">
                  <FaArrowCircleRight />
                </div>
              </button>
            </form>
          
        </div>
        <div>
          <h3>Bootstrap validation (Tooltips)</h3>
        <SecondValidation/>
        </div>
      </div>
    </div>
  );
};

export default Validation;
