import React, { useState } from "react";
import BesicElement from "./basicElement/BesicElement";
import Validation from "./Validation";
import { data } from "./data/data";
import AdvanceTable from "./AdvanceTable";

function TabExample() {
  const [activeTab, setActiveTab] = useState("at");

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
    
       <div className="tabs-header">
        {data?.map(({ label, value }) => (
          <div
            key={value}
            className={`tab ${activeTab === value ? "active" : ""}`}
            onClick={() => handleTabClick(value)}
          >
            {label}
          </div>
        ))}
      </div>

      <div className="tabs-body">
        {activeTab === "at" && (
          <div>
           <AdvanceTable/>
          </div>
        )}

        {activeTab === "bm" && (
          <div>
           <BesicElement/>
          </div>
        )}
        {activeTab === "vl" && (
          <div>
           <Validation/>
          </div>
        )}
      </div>
    </div>
  );
}

export default TabExample;