import { useEffect } from "react";
import { useSearchParams } from "react-router";

// HOOKS
import useAllRestCountries from "../../hooks/useAllRestCountries";

// COMPONENTS
import Pagination from "../../components/Pagination/Pagination";

// UTILS
import * as pu from "../../components/Pagination/paginationUtils";

const itemsPerPage = 12;

const CountriesPagination = () => {
  const { allRestCountries, setCurrentPageItems } = useAllRestCountries();
  //
  const totalPages = pu.getTotalPages(allRestCountries, itemsPerPage);
  const [searchParams, setSearchParams] = useSearchParams({ page: "1" });
  const currentPage = parseInt(searchParams.get("page")) || 1;
  //
  useEffect(() => {
    setCurrentPageItems(
      pu.getCurrentPageItems(allRestCountries, currentPage, itemsPerPage)
    );
  }, [searchParams]);
  //
  const handlePageChange = (page) => {
    setSearchParams({ page: page.toString() });
  };
  //
  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
};

export default CountriesPagination;
