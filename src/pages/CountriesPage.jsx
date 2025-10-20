import Countries from "../features/Countries";
import { RestCountriesProvider } from "../providers/RestCountriesProvider";
const CountriesPage = () => {
  return (
    <RestCountriesProvider>
      <Countries />
    </RestCountriesProvider>
  );
};

export default CountriesPage;
