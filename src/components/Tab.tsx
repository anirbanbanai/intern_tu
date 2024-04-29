import React, { useState } from "react";
import BesicElement from "./basicElement/BesicElement";
import Validation from "./Validation/Validation";
import { data } from "./data/data";
import AdvanceTable from "./table/AdvanceTable";

function TabExample() {
  const [activeTab, setActiveTab] = useState("at");

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs ">
      <div className="tabs-header  ">
        {data?.map(({ icon, label, value }) => (
          <div
            key={value}
            className={`tab ${activeTab === value ? "active" : ""} flex`}
            onClick={() => handleTabClick(value)}
          >
            {React.createElement(icon, { className: "icon" })}
            {label}
          </div>
        ))}
      </div>

      <div className="tabs-body">
        {activeTab === "at" && (
          <div>
            <AdvanceTable />
          </div>
        )}

        {activeTab === "bm" && (
          <div>
            <BesicElement />
          </div>
        )}
        {activeTab === "vl" && (
          <div>
            <Validation />
          </div>
        )}
      </div>
    </div>
  );
}

export default TabExample;
