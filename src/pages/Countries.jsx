import styled from "styled-components";
import CountryCard from "../components/CountryCard";
import useAllRestCountries from "../hooks/useAllRestCountries";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  padding: 2rem;
`;

const Countries = () => {
  const allRestCountries = useAllRestCountries();

  console.log(allRestCountries[0]);

  return (
    <Container>
      {/* <CountryCard country={allRestCountries[0]} />
      <CountryCard country={allRestCountries[1]} />
      <CountryCard country={allRestCountries[2]} />
      <CountryCard country={allRestCountries[3]} />
      <CountryCard country={allRestCountries[4]} /> */}
      {allRestCountries.map((country) => (
        <CountryCard country={country} />
      ))}
    </Container>
  );
};

export default Countries;
