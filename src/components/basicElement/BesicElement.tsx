import React from "react";
import { useForm } from "react-hook-form";
import { FaArrowCircleRight } from "react-icons/fa";

const BesicElement = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <div>
      <h2>Besic Element</h2>
      <div className=" input-groupBasic">
        <h4>Input types</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis
          aliquam, praesentium eius laborum quia.
        </p>
      </div>

      <form
        className="input-groupBasic basic-element  "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid">

          <div className="flex">
            <label htmlFor="text">Text</label>
            <input
              className="inputbasic"
              id="name"
              placeholder="Some text value"
              {...register("text", { required: true, maxLength: 30 })}
            />
          </div>

          <div className="flex">
            <label htmlFor="defaultfileinput">Default file input</label>
            <input
              className="inputbasic"
              id="name"
              type="file"
              {...register("defaultfileinput", {
                required: true,
                maxLength: 30,
              })}
            />
          </div>

          <div className="flex">
            <label htmlFor="email">Email</label>
            <input
              className="inputbasic"
              id="email"
              {...register("email", { required: true, maxLength: 30 })}
            />
          </div>

          <div className="flex">
            <label htmlFor="sate">Date</label>
            <input
              className="inputbasic"
              id="Date"
              type="date"
              {...register("date", { required: true, maxLength: 30 })}
            />
          </div>

          <div className="flex">
            <label htmlFor="email">Password</label>
            <input
              className="inputbasic"
              id="Date"
              {...register("ppassword", { required: true, maxLength: 30 })}
            />
          </div>
          <div className="flex">
            <label htmlFor="month">Month</label>
            <input
              className="inputbasic"
              id="month"
              {...register("month", { required: true, maxLength: 30 })}
            />
          </div>
          <div className="flex">
            <label htmlFor="placeholder">Placeholder</label>
            <input
              className="inputbasic"
              id="placeholder"
              {...register("placeholder", { required: true, maxLength: 30 })}
            />
          </div>
          <div className="flex">
            <label htmlFor="time">Time</label>
            <input
              className="inputbasic"
              id="time"
              {...register("time", { required: true, maxLength: 30 })}
            />
          </div>
          <div className="flex">
            <label htmlFor="number">Number</label>
            <input
              className="inputbasic"
              id="number"
              {...register("number", { required: true, maxLength: 30 })}
            />
          </div>

          <div className="flex">
            <label htmlFor="url">URL</label>
            <input
              className="inputbasic"
              id="url"
              {...register("url", { required: true, maxLength: 30 })}
            />
          </div>

          <div className="flex">
            <label htmlFor="url">Readonly</label>
            <input
              className="inputbasic"
              id="readonly"
              {...register("readonly", { required: true, maxLength: 30 })}
            />
          </div>

          <div className="flex">
            <label htmlFor="url">Textarea</label>
            <textarea
              className="inputbasic"
              id="url"
              {...register("url", { required: true, maxLength: 30 })}
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
  );
};

export default BesicElement;
