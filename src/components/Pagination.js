import React from "react";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="btn btn-primary mr-1" onClick={prevPage} href="!#">
            Prev
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${
              currentPage === pgNumber ? "active" : "page-item"
            }`}
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link text-dark"
              href="!#"
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="btn btn-primary" onClick={nextPage} href="!#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
