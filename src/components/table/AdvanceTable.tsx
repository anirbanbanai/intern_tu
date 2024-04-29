import React from "react";
import TableWithStripedRows from "./Table";

const AdvanceTable = () => {
  return (
    <div>
      <h2>Search</h2>
      <p>A table allowing search</p>

      <div>
        <div className="input-groupsearch">
          <label className="user-label">Search :</label>
          <input
            className="input"
            type="text"
            placeholder="60 recors..."
          />
        </div>
      </div>
      <TableWithStripedRows />
    </div>
  );
};

export default AdvanceTable;