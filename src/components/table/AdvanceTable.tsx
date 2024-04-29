'use client'

import React from "react";
import TableWithStripedRows from "./Table";
import TableWithSearchButton from "./Table";

const AdvanceTable = () => {
  return (
    <div>
      <h2>Search</h2>
      <p>A table allowing search</p>

     
      <TableWithSearchButton/>
    </div>
  );
};

export default AdvanceTable;
