const ENDPOINT = "https://restcountries.com/v3.1/";

export const getRestCountriesByRegion = async (region) => {
  try {
    const res = await fetch(`${ENDPOINT}region/${region}`);
    // Convert all responses to JSON
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default async function getAllRestCountries() {
  const regions = [
    "africa",
    "europe",
    "asia",
    "oceania",
    "North America",
    "South America",
  ];
  try {
    const res = await Promise.all(
      regions.map((region) => fetch(`${ENDPOINT}region/${region}`))
    );
    // Convert all responses to JSON
    const data = await Promise.all(res.map((r) => r.json()));

    const allCountries = data.flat();

    return allCountries;
  } catch (err) {
    console.log(err);
  }
}
