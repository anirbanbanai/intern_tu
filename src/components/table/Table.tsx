
// import React, { useState } from "react";
// import { TABLE_HEAD, TableData60 } from "../data/data";

// const TableWithStripedRows: React.FC = () => {
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const rowsPerPage: number = 5;

  
//   const indexOfLastRow: number = currentPage * rowsPerPage;
//   const indexOfFirstRow: number = indexOfLastRow - rowsPerPage;


//   const currentRows = TableData60.slice(indexOfFirstRow, indexOfLastRow);

  
//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="table h-full w-full overflow-scroll">
//       <table className="table">
//         <thead className="table-head">
//           <tr>
//             {TABLE_HEAD?.map((head, index) => (
//               <th key={index}>{head}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody className="table-rows">
//           {currentRows.map(({ Id, name, phone_number, age, company }, index) => (
//             <tr key={name}>
//               <td>{Id}</td>
//               <td>{name}</td>
//               <td>+88{phone_number}</td>
//               <td>{age}</td>
//               <td>{company}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination */}

//       <ul className="pagination">
//         {Array.from({ length: Math.ceil(TableData60.length / rowsPerPage) }, (_, i) => (

//           <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
//             <button className="page-link" onClick={() => paginate(i + 1)}>{i + 1}</button>
//           </li>

//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TableWithStripedRows;

import React, { useState } from "react";
import { TABLE_HEAD, TableData60 } from "../data/data";
import { FaArrowCircleRight, FaSearchengin } from "react-icons/fa";

const TableWithStripedRows: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const rowsPerPage: number = 5;

  // Function to handle changes in the search input
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle the search button click
  const handleSearchButtonClick = () => {
    const filteredResults = TableData60.filter(
      ({ name, phone_number, age, company }) =>
        name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        phone_number.toString().includes(searchQuery) ||
        age.toString().includes(searchQuery) ||
        company.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
    setCurrentPage(1); // Reset to first page after search
  };

  // Calculate index of the first and last row of the current page
  const indexOfLastRow: number = currentPage * rowsPerPage;
  const indexOfFirstRow: number = indexOfLastRow - rowsPerPage;

  // Determine which set of rows to display (search results if available, otherwise current page)
  const currentRows = searchResults.length > 0 ? searchResults.slice(indexOfFirstRow, indexOfLastRow) : TableData60.slice(indexOfFirstRow, indexOfLastRow);

  // Function to handle pagination
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="table h-full w-full overflow-scroll">
      {/* Search input */}

      <div className="input-groupsearch flex1">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="input"
        />

        <button onClick={handleSearchButtonClick} typeof="submit" className="cssbuttons-io-button2">
          Search
          <div className="icon">
            <FaSearchengin />
          </div>
        </button>
      </div>


      <table className="table">
        <thead className="table-head">
          <tr>
            {TABLE_HEAD?.map((head, index) => (
              <th key={index}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table-rows">
          {currentRows.map(({ Id, name, phone_number, age, company }, index) => (
            <tr key={name}>
              <td>{Id}</td>
              <td>{name}</td>
              <td>+88{phone_number}</td>
              <td>{age}</td>
              <td>{company}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <ul className="pagination">
        {Array.from({ length: Math.ceil((searchResults.length > 0 ? searchResults.length : TableData60.length) / rowsPerPage) }, (_, i) => (
          <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
            <button className="page-link" onClick={() => paginate(i + 1)}>{i + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableWithStripedRows;
