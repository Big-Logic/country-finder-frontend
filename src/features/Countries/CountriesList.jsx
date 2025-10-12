import styled from "styled-components";
import useAllRestCountries from "../../hooks/useAllRestCountries";

import CountryCard from "./CountryCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
`;

const CountriesList = () => {
  const { currentPageItems } = useAllRestCountries();

  return (
    <Container>
      {currentPageItems.map((country) => (
        <CountryCard country={country} />
      ))}
    </Container>
  );
};

export default CountriesList;
