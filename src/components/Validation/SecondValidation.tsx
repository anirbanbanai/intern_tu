import React from "react";
import { useForm } from "react-hook-form";
import { FaArrowCircleRight } from "react-icons/fa";
const SecondValidation = () => {
  
  return (
    <div>
   
        <div className="">
          <div className="flex">
            <label htmlFor="ftext">FirstName</label>
            <input
              className="input"
              id="fname"
              placeholder="Some text value"
              
            />
          </div>

          <div className="flex">
            <label htmlFor="lname">LastName</label>
            <input
              className="input"
              id="lname"
              type="text"
             
            />
          </div>

          <div className="flex">
            <label htmlFor="username">Username</label>
            <input
              className="input"
              id="username"
              
            />
          </div>

          <div className="flex">
            <label htmlFor="city">City</label>
            <input
              className="input"
              id="Date"
              type="text"
              
            />
          </div>

          <div className="flex">
            <label htmlFor="state">State</label>
            <input
              className="input"
              id="ss"
             
            />
          </div>
        </div>

       

        <button typeof="submit" className="cssbuttons-io-button">
          Submit
          <div className="icon">
            <FaArrowCircleRight />
          </div>
        </button>
     
    </div>
  );
};

export default SecondValidation;
