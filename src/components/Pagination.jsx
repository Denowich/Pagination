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
          <a onClick={prevPage} className="btn btn-primary" href="!#">
            Prev
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${
              currentPage === pgNumber ? "active" : null
            }`}
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link"
              href="!#"
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="post-item">
          <a onClick={nextPage} className="btn btn-primary" href="!#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
