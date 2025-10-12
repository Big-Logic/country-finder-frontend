// COMPONENTS
import CountriesPagination from "./CountriesPagination";
import Filters from "./Filters";
import CountriesList from "./CountriesList";

// STYLES
import * as CS from "./CountriesStyles";

const Countries = () => {
  return (
    <CS.Container>
      <Filters />
      <CountriesList />
      <CountriesPagination />
    </CS.Container>
  );
};

export default Countries;
