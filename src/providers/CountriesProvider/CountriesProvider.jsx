import { Outlet } from "react-router";
import { useQuery } from "@tanstack/react-query";

// CONTEXT
import CountriesContext from "./CountriesContext";

// SERVICES
import getAllRestCountries from "../../services/restCountries/restCountries";
import AppError from "../../utils/AppError";

const CountriesProvider = () => {
  // Queries
  const {
    data: allRestCountries,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["restCountries"],
    queryFn: getAllRestCountries,
    staleTime: "static",
  });

  if (isError) throw new AppError(error);

  if (!isLoading) {
    return (
      <CountriesContext value={{ allRestCountries }}>
        {<Outlet />}
      </CountriesContext>
    );
  }
};

export default CountriesProvider;
