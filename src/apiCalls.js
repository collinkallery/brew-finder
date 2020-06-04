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

export const fetchImage = async (url) => {
  if(url === undefined ) {
    return "https://cdn.windowsreport.com/wp-content/uploads/2018/07/Error-message-1.jpg"
  } else {
    const encoded = encodeURIComponent(url)
    const response = await fetch(`https://opengraph.io/api/1.1/site/${encoded}?app_id=0e0b4950-def6-4c04-b616-bbce614bff05`);
    const data = response.json();
    return data;
  }
}
