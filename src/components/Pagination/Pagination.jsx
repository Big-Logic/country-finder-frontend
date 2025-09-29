import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import * as P from "./PaginationStyles";

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const renderPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++)
        pages.push(
          <P.Button
            key={i}
            className={`pagination-btn${i === currentPage ? " active" : ""}`}
            onClick={() => onPageChange(i)}
            disabled={i === currentPage}
          >
            {i}
          </P.Button>
        );
    } else {
      pages.push(
        <P.Button
          key={1}
          className={`pagination-btn${1 === currentPage ? " active" : ""}`}
          onClick={() => onPageChange(1)}
          disabled={1 === currentPage}
        >
          {1}
        </P.Button>
      );
      if (currentPage > 4) pages.push(<span>...</span>);
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(
          <P.Button
            key={i}
            className={`pagination-btn${i === currentPage ? " active" : ""}`}
            onClick={() => onPageChange(i)}
            disabled={i === currentPage}
          >
            {i}
          </P.Button>
        );
      }
      if (currentPage < totalPages - 3) pages.push(<span>...</span>);
      pages.push(
        <P.Button
          key={totalPages}
          className={`pagination-btn${
            totalPages === currentPage ? " active" : ""
          }`}
          onClick={() => onPageChange(totalPages)}
          disabled={totalPages === currentPage}
        >
          {totalPages}
        </P.Button>
      );
    }
    return pages;
  };

  return (
    <P.Container>
      <P.Button onClick={handlePrev} disabled={currentPage === 1}>
        <VscChevronLeft />
      </P.Button>
      {renderPageNumbers()}
      <P.Button onClick={handleNext} disabled={currentPage === totalPages}>
        <VscChevronRight />
      </P.Button>
    </P.Container>
  );
}

export default Pagination;
