export const fetchByCity = async (city) => {
  const response = await fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`);
  const data = response.json();
  return data;
}
