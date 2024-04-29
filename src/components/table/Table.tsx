import React from "react";
import { TABLE_HEAD, TABLE_ROWS } from "../data/data";

const TableWithStripedRows: React.FC = () => {
  return (
    <div className="table h-full w-full overflow-scroll">
      <table className="table">
        <thead className="table-head">
          <tr>
            {TABLE_HEAD?.map((head, index) => (
              <th key={index}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table-rows">
          {TABLE_ROWS?.map(
            ({ Id, name, phone_number, age, company }, index) => (
              <tr key={name}>
                <td>{Id}</td>
                <td>{name}</td>
                <td>+88{phone_number}</td>
                <td>{age}</td>
                <td>{company}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithStripedRows;
