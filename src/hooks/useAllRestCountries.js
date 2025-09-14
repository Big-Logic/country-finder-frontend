import { useContext } from "react";
import CountriesContext from "../providers/CountriesProvider/CountriesContext";

const useAllRestCountries = function () {
  const { allRestCountries } = useContext(CountriesContext);

  return allRestCountries;
};

export default useAllRestCountries;
