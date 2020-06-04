export const fetchByCity = async (city) => {
  const response = await fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`);
  const data = response.json();
  return data;
}

export const fetchByState = async (state) => {
  const response = await fetch(`https://api.openbrewerydb.org/breweries?by_state=${state}`);
  const data = response.json();
  return data;
}

export const fetchByZip = async (zipcode) => {
  const response = await fetch(`https://api.openbrewerydb.org/breweries?by_postal=${zipcode}`);
  const data = response.json();
  return data;
}
