import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

// CONTEXT
import CountriesContext from "./CountriesContext";

// SERVICES
import getAllRestCountries, {
  getRestCountriesByRegion,
} from "../../services/restCountries/restCountries";

import AppError from "../../utils/AppError";
import { useState } from "react";

const RestCountriesProvider = ({ children }) => {
  const { region } = useParams();
  const [currentPageItems, setCurrentPageItems] = useState([]);

  const {
    data: allRestCountries,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [`${region}`],
    queryFn:
      region === "all"
        ? getAllRestCountries
        : () => getRestCountriesByRegion(region),
    staleTime: "static",
  });

  if (isError) throw new AppError(error);

  if (!isLoading) {
    return (
      <CountriesContext
        value={{ allRestCountries, currentPageItems, setCurrentPageItems }}
      >
        {children}
      </CountriesContext>
    );
  }
};

export default RestCountriesProvider;
