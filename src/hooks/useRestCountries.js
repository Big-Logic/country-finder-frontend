import { useContext } from "react";
import { CountriesContext } from "../providers/RestCountriesProvider";

const useRestCountries = function () {
  const { allRestCountries, currentPageItems, setCurrentPageItems } =
    useContext(CountriesContext);

  if (!allRestCountries) {
    throw new Error(
      "useAllRestCountries must be used within a CountriesProvider"
    );
  }

  return { allRestCountries, currentPageItems, setCurrentPageItems };
};

export default useRestCountries;
