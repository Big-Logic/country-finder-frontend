import Countries from "../features/Countries";
import CountriesProvider from "../providers/RestCountriesProvider";

const CountriesPage = () => {
  return (
    <CountriesProvider>
      <Countries />
    </CountriesProvider>
  );
};

export default CountriesPage;
