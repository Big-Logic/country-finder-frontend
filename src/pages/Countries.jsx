import styled from "styled-components";
import CountryCard from "../components/CountryCard";
import useAllRestCountries from "../hooks/useAllRestCountries";
import Pagination from "../components/Pagination/Pagination";
import * as pu from "../components/Pagination/paginationUtils";
import { useState } from "react";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  padding: 2rem;
`;

const Countries = () => {
  const allRestCountries = useAllRestCountries();

  console.log(allRestCountries[0]);

  const itemsPerPage = 12;
  const totalPages = pu.getTotalPages(allRestCountries, itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const currentPageItems = pu.getCurrentPageItems(
    allRestCountries,
    currentPage,
    itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Container>
        {/* <CountryCard country={allRestCountries[0]} />
      <CountryCard country={allRestCountries[1]} />
      <CountryCard country={allRestCountries[2]} />
      <CountryCard country={allRestCountries[3]} />
      <CountryCard country={allRestCountries[4]} /> */}
        {currentPageItems.map((country) => (
          <CountryCard country={country} />
        ))}
        {/* {currentPageItems.map((item) => (
          <div key={item}>Item {item}</div>
        ))} */}
      </Container>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Countries;
