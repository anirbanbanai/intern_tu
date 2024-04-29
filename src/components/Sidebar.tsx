"use client";

import React, { useState } from "react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";


function SidebarWithContentSeparator() {
  const [open, setOpen] = useState<number>(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h5>Sidebar</h5>
      </div>

      <ul className="sidebar-list">
        <li>
          <div className="accordion-header" onClick={() => handleOpen(1)}>
            <span className="icon">
              <PresentationChartBarIcon className="h-5 w-5" />
            </span>
            <span>Dashboard</span>
            <ChevronRightIcon strokeWidth={3} className="icon left-2" />
          </div>
          {open === 1 && (
            <ul className="sub-menu">
              <li>Analytics</li>
              <li>Reporting</li>
              <li>Projects</li>
            </ul>
          )}
        </li>
        <li>
          <div className="accordion-header" onClick={() => handleOpen(2)}>
            <span className="icon">
              <ShoppingBagIcon className="h-5 w-5" />
            </span>
            <span>E-Commerce</span>
            <ChevronRightIcon strokeWidth={3} className="icon left-2" />
          </div>
          {open === 2 && (
            <ul className="sub-menu">
              <li>Orders</li>
              <li>Products</li>
            </ul>
          )}
        </li>
        <hr className="separator" />
        <li>
            <Link href="/advancetable">
            
          <div className="accordion-header">
            <span className="">
              <InboxIcon className="icon" />
            </span>
            <span>Advance Table</span>
          </div>
          
            </Link>
        </li>
        <li>
            <Link href="/besicelement">
            
          <div className="accordion-header">
            <span className="">
              <Cog6ToothIcon className="icon" />
            </span>
            <span>Besic Element</span>
          </div>

            </Link>
        </li>
        <li>
            <Link href="/validation">
            
          <div className="accordion-header">
            <span className="">
              <UserCircleIcon className="icon" />
            </span>
            <span>Validate</span>
          </div>

            </Link>
        </li>
        <li>
          <div className="accordion-header">
            <span className="">
              <UserCircleIcon className="icon" />
            </span>
            <span>Profile</span>
          </div>
        </li>

        <li>
          <div className="accordion-header">
            <span className="">
              <Cog6ToothIcon className="icon" />
            </span>
            <span>Setting</span>
          </div>
        </li>
        <li>
          <div className="accordion-header">
            <span className="">
              <PowerIcon className="icon" />
            </span>
            <span>Logout</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SidebarWithContentSeparator;
