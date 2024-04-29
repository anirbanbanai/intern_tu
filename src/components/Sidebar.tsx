"use client";

import React, { useState } from "react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  ChartBarIcon,
  MapIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { ChevronRightIcon, ChevronDownIcon, FolderIcon } from "@heroicons/react/24/outline";
import { BsUiChecks } from "react-icons/bs";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/20/solid";
import { GiCondyluraSkull } from "react-icons/gi";
import { CgEnter } from "react-icons/cg";


function SidebarWithContentSeparator() {
  const [open, setOpen] = useState<number>(0);
  const handleOpen = (value: number) => { 
    setOpen(open === value ? 0 : value);
  };
  const [activeTab, setActiveTab] = useState("at");

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-header ">
        <h1 className=""><GiCondyluraSkull className=""/>  <span className="smVanish">SHREYU</span></h1>
      </div>

      <ul className="sidebar-list">
        <h3>Customs</h3>
        <li>
          <div className="accordion-header" onClick={() => handleOpen(1)}>
            <span className="">
              <PresentationChartBarIcon className="icon" />
            </span>
            <span className="smVanish">Dashboard</span>
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
            <span className="">
              <ShoppingBagIcon className="icon" />
            </span>
            <span className="smVanish">E-Commerce</span>
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
        <h3>Components</h3>
        <li>
          <Link href="/advancetable">
            <div className={`tab2 ${activeTab === "value" ? "active" : ""} `}
            onClick={() => handleTabClick("value")}>

              <span className="">
                <InboxIcon className="icon" />
              </span>
              <span className="smVanish">Advance Table</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/besicelement">
            <div className={`tab2 ${activeTab === "value2" ? "active" : ""}  `}
            onClick={() => handleTabClick("value2")}>
              <span className="">
                <Cog6ToothIcon className="icon" />
              </span>
              <span className="smVanish">Basic Element</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/validation">
            <div className={`tab2 ${activeTab === "at" ? "active" : ""} `}
            onClick={() => handleTabClick("at")}>
              <span className="">
                <CgEnter className="icon" />
              </span>
              <span className="smVanish">Validate</span>
            </div>
          </Link>
        </li>
        <li>
          <div className="accordion-header">
            <span className="">
              <BsUiChecks className="icon" />
            </span>
            <span className="smVanish">UI Elements</span>
          </div>
        </li>

        <li>
          <div className="accordion-header">
            <span className="">
              <MapIcon className="icon" />
            </span>
            <span className="smVanish">Maps</span>
          </div>
        </li>
        <li>
          <div className="accordion-header">
            <span className="">
              <ChartBarIcon className="icon" />
            </span>
            <span className="smVanish">Charts</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SidebarWithContentSeparator;
