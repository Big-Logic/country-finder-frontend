import styled from "styled-components";

import CountryCard from "./CountryCard";
import useRestCountries from "../../hooks/useRestCountries";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
`;

const CountriesList = () => {
  const { currentPageItems } = useRestCountries();
  let [searchParams] = useSearchParams();
  const isFirstRender = useRef(true);
  const conainerRef = useRef();

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    conainerRef.current
      .closest("#rmd-id-123")
      .scrollIntoView({ behavior: "smooth" });
  }, [searchParams]);

  return (
    <Container ref={conainerRef}>
      {currentPageItems.map((country) => (
        <CountryCard country={country} key={country.name.common} />
      ))}
    </Container>
  );
};

export default CountriesList;
