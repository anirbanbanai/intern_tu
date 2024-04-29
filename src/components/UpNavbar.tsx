import { BellSnoozeIcon, InboxIcon } from "@heroicons/react/24/solid";
import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiMenu, BiNotification, BiWorld } from "react-icons/bi";
import { GiWorld } from "react-icons/gi";
import { SlSettings } from "react-icons/sl";

const UpNavbar = () => {
  return (
    <div className="flex upnav2">
      <div className="flex1">
        <AiOutlineMenuUnfold />
        <h3>Create new</h3>
      </div>
      <div className="flex1">
        <div>
          <input type="text" placeholder="Search..." className="input" />
        </div>
        <div className="accordion-header">
          <span className="">
            <InboxIcon className="icon" />
          </span>
        </div>
        <div className="accordion-header">
          <span className="">
            <BiWorld className="icon" />
          </span>
        </div>
        <div className="accordion-header">
          <span className="">
            <BiMenu className="icon" />
          </span>
        </div>
        <div className="accordion-header">
          <span className="">
            <BellSnoozeIcon className="icon" />
          </span>
        </div>
        <div className="accordion-header">
          <span className="">
            <SlSettings className="icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default UpNavbar;
